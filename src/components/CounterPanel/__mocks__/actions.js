/*
 * @Author: 廉恒凯
 * @Date: 2020-05-01 19:05:06
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-01 20:15:27
 * @Description: file content
 */
const mockCounterList = {
    status: 200,
    data: [
        {
            caption: 'first',
            number: 66,
        },
        {
            caption: 'second',
            number: 80,
        },
        {
            caption: 'third',
            number: 90,
        },
    ],
};

const mockApiNotFount = {
    status: 500,
    errMsg: 'API NOT FOUND',
};
export default {
    get(url) {
        if (url === 'getInitList') {
            return new Promise(resolve => {
                resolve(mockCounterList);
            });
        }
        return new Promise(resolve => {
            resolve(mockApiNotFount);
        });
    },
};
