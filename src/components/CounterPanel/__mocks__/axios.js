/*
 * @Author: 廉恒凯
 * @Date: 2020-05-04 16:16:58
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 23:21:44
 * @Description: file content
 */
const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
