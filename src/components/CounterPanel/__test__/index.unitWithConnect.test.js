/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-05 10:34:54
 * @Description: file content
 */
import React from 'react';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import findTestWrapper from '@tests/utils/tools';
import ConnectedCounterPanel from '..';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const setup = initStore => {
    let store = initStore;
    if (!store) {
        store = mockStore(fromJS({ counterPanel: { counterList: [] } }));
    }
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn(),
        getCounterList: jest.fn(),
    };
    const component = mount(<ConnectedCounterPanel store={store} {...actions} />);
    return {
        component,
        actions,
        h1: component.find('h1'),
    };
};

describe('CounterPanel Component with connect', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeAll(() => {
        mockAxios.get.mockImplementation(() => Promise.resolve({ data: [] }));
    });

    it(`axios should be called once in componentDidMount, param is '/counter/getCounterList'`, () => {
        return new Promise(done => {
            // 为了componentDidMount中的axios async方法
            try {
                const fun = mockAxios.get.mockImplementationOnce(() =>
                    Promise.resolve({ data: [] }),
                );
                const { component } = setup();
                process.nextTick(() => {
                    component.update();
                    expect(fun).toBeCalled();
                    expect(fun.mock.calls.length).toBe(1);
                    expect(fun.mock.calls[0]).toEqual(['/counter/getCounterList']);
                    done();
                });
            } catch (e) {
                done(e);
            }
        });
    });

    it('should have h3 and value is Counter List', () => {
        const { h1 } = setup();
        expect(h1.text()).toEqual('Counter List');
    });

    it('should not have Counter when counterList is empty Array ', () => {
        const { component } = setup();
        const counterItem = findTestWrapper(component, 'counterItem');
        expect(counterItem.length).toEqual(0);
    });

    it('should have Counter when counterList is not null ', () => {
        const store = mockStore(
            fromJS({ counterPanel: { counterList: [{ value: 1, caption: 'first' }] } }),
        );
        const { component } = setup(store);
        const counterItem = findTestWrapper(component, 'counterItem');
        expect(counterItem.length).toEqual(1);
    });

    it('counter Component should have value, caption, increment, decrement, props', () => {
        const store = mockStore(
            fromJS({ counterPanel: { counterList: [{ value: 1, caption: 'first' }] } }),
        );
        const { component } = setup(store);
        const counterItem = findTestWrapper(component, 'counterItem');
        const counterProps = counterItem.props();
        expect(counterProps.value).toBe(1);
        expect(counterProps.increment).toBeTruthy();
        expect(counterProps.decrement).toBeTruthy();
        expect(counterProps.caption).toBe('first');
    });
});
