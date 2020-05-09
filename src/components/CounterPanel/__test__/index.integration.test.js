/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 21:18:13
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-06 13:23:32
 * @Description: file content
 */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import findTestWrapper from '@tests/utils/tools';
import { getStore } from '../../../store';
import ConnectedCounterPanel from '../index';

describe('CounterPanel Component ', () => {
    it('click addButton should add 1 and click decButton should dec 1 ', () => {
        const state = fromJS({ list: { counterList: [{ value: 1, caption: 'first' }] } });
        const wrapper = mount(
            <Provider store={getStore(state)}>
                <ConnectedCounterPanel />
            </Provider>,
        );
        wrapper.find('button[data-test="addButton"]').simulate('click', {
            caption: 'first',
        });
        const counterValue = findTestWrapper(wrapper, 'counterValue');
        expect(counterValue.text()).toEqual('Counter: 2');
        wrapper.find('button[data-test="decButton"]').simulate('click', {
            caption: 'first',
        });
        expect(counterValue.text()).toEqual('Counter: 1');
    });
});
