import axios from 'axios';
import { message } from 'antd';
import base from '../server/base';
import { isObject } from './tools';

const { baseUrl, basePrefix } = base;
/* 连续点击的错误标示 */
const flagMsg = 'FASTCLICK';
const pending = [];
const { CancelToken } = axios;
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/**
 * @description: 检查错误类型 抛出错误异常
 * @param {Object}
 * @return:
 */
const checkStatus = errorRes => {
    const { response } = errorRes;
    if (!response) {
        throw new Error('response is undefined', errorRes);
    }
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errorText = response.statusText || codeMessage[response.status];
    const error = new Error(errorText);
    error.code = response.status;
    error.response = response;
    error.text = errorText;
    message.error(`请求失败${JSON.stringify(error.text)}`);
    throw error;
};

const axiosConfig = {
    baseURL: baseUrl,
    transformRequest: [data => data],
    transformResponse: [data => data],
    /* 设置超时时间 */
    timeout: 3000,
    /* 携带凭证 */
    withCredentials: false,
};

/* 创建axios实例 */
const request = axios.create(axiosConfig);

/**
 * @description: 取消请求 防止接口多次调用 此时应该取最后一次
 * @param {type}
 * @return:
 */
const removePending = (config, fn) => {
    // 处理 baseURL
    const arr = config.url.split(basePrefix);
    const flagUrl = arr[arr.length - 1];
    if (pending.includes(flagUrl)) {
        if (fn) {
            fn(flagMsg);
        } else {
            pending.splice(pending.indexOf(flagUrl), 1);
        }
    } else if (fn) {
        pending.push(flagUrl);
    }
};

/**
 * @description: 请求拦截器 以后可以吧token 从这里放入
 * @param {type}
 * @return:
 */
const requestInterceptor = config => {
    const combineConfig = {
        ...config,
        cancelToken: new CancelToken(c => {
            removePending(config, c);
        }),
    };
    return combineConfig;
};

/**
 * @description: 响应拦截器
 * @param {type}
 * @return:
 */
const responseInterceptor = response => {
    removePending(response.config);
    return isObject(response.data) ? response.data : JSON.parse(response.data);
};

const errorRequest = error => Promise.error(error);

const errorResponse = error => {
    checkStatus(error);
};

request.interceptors.request.use(requestInterceptor, errorRequest);

request.interceptors.response.use(responseInterceptor, errorResponse);

export default request;
