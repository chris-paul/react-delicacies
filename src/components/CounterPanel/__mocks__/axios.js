/*
 * @Author: 廉恒凯
 * @Date: 2020-05-04 16:16:58
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-04 16:34:33
 * @Description: file content
 */
const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
// const mockUndoList = {
//     data: [{
//         value: 1,
//         caption: '1'
//     }],
//     success: true
// }
// export default {
//     get(url) {
//         console.info("as-d-a-d")
//         if(url === '/counter/getCounterList') {
//             return new Promise((resolve, rejects) => {
//                 resolve(mockUndoList);
//             })
//         }
//     }
// }
// }
// const getInitList = () => {
//     return new Promise((resolve, rejects) => {
//         resolve(mockUndoList);
//     })
// }

// export default getInitList;
