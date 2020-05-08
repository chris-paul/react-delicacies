/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 19:20:51
 * @Description: file content
 */
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import Summary from '..';

const mockStore = configureMockStore();

const setup = initStore => {
    let store = initStore;
    if (!store) {
        store = mockStore(fromJS({ list: { counterList: [] } }));
    }
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn(),
    };
    const component = mount(<Summary store={store} {...actions} />);
    return {
        component,
        actions,
        div: component.find('div'),
    };
};

describe('CounterPanel Component with connect', () => {
    it('should show empty text when value is empty', () => {
        const { div } = setup();
        expect(div.text()).toEqual('Total Count: 0');
    });

    it('should have correct tatal value when counterList is not null ', () => {
        const store = mockStore(
            fromJS({
                list: {
                    counterList: [
                        { value: 1, caption: 'first' },
                        { value: 2, caption: 'second' },
                    ],
                },
            }),
        );
        const { div } = setup(store);
        expect(div.text()).toEqual('Total Count: 3');
    });

    it('should have correct tatal value when counterList is null ', () => {
        const store = mockStore(fromJS({}));
        const { div } = setup(store);
        expect(div.text()).toEqual('Total Count: 0');
    });
});
