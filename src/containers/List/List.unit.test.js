/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:38:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 13:32:31
 * @Description: 单元测试 TDD 测试先行 逐步完善代码
 */
import React from 'react';
import { shallow } from 'enzyme';
import List from '.';

describe(' List Component ', () => {
    test('<List /> mounts without crashing', () => {
        const wrapper = shallow(<List />);
        expect(wrapper).toMatchSnapshot();
    });
});
