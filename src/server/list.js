/*
 * @Author: lhk
 * @Date: 2020-01-05 18:33:07
 * @LastEditTime : 2020-01-05 19:37:17
 * @LastEditors  : Please set LastEditors
 * @Description: list 接口
 * @FilePath: /react-delicacies/src/server/list.js
 */
import request from '../utils/request';

const list = {
    getInitList: () => {
        return request.get(`getInitList`);
    },
};

export default list;
