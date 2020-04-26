/*
 * @Author: 廉恒凯
 * @Date: 2020-04-26 20:54:46
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-26 21:34:53
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from '.';

describe(' Summary Component ', () => {
    it('should show correct text when value is not empty', () => {
        const wraper = shallow(<Summary value={2} />);
        expect(wraper.find('div').text()).toEqual('Total Count: 2');
    });

    it('should show empty text when value is empty', () => {
        const wraper = shallow(<Summary />);
        expect(wraper.text()).toEqual('');
    });
});
