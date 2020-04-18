/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:46:14
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 16:17:59
 * @Description: file content
 */
const findTestWrapper = (wrapper, tag) => {
    return wrapper.find(`[data-test="${tag}"]`);
};

export default findTestWrapper;
