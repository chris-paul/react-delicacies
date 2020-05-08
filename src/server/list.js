/*
 * @Author: lhk
 * @Date: 2020-01-05 18:33:07
 * @LastEditTime: 2020-05-08 23:08:39
 * @LastEditors: 廉恒凯
 * @Description: list 接口
 * @FilePath: /react-delicacies/src/server/list.js
 */
import request from '../utils/request';

const getInitList = () => {
    return request.post(`/counter/getCounterList`);
};

export default getInitList;
