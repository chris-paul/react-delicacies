/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 21:54:35
 * @Description: file content
 */
import React from 'react';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import List from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const setup = initStore => {
    let store = initStore;
    if (!store) {
        store = mockStore(fromJS({ list: { isFetching: false, errorMessages: '' } }));
    }
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn(),
        getCounterList: jest.fn(),
    };
    const component = mount(
        <Provider store={store}>
            <List {...actions} />
        </Provider>,
    );
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

    it('should show loading when isFetching ', () => {
        const store = mockStore(fromJS({ list: { isFetching: true } }));
        const { component } = setup(store);
        expect(component.find('p').text()).toEqual('Loading...');
    });

    it('should render CounterPanel', () => {
        const { component } = setup();
        const counterPanel = component.find('CounterPanel');
        expect(counterPanel.exists()).toBeTruthy();
        const Summary = component.find('Summary');
        expect(Summary.exists()).toBeTruthy();
    });

    it('should show error when fetch error ', () => {
        const store = mockStore(fromJS({ list: { errorMessages: 'fetch error' } }));
        const { component } = setup(store);
        const fetchError = component.find('FetchError');
        expect(fetchError.exists()).toBeTruthy();
        const fetchErrorProps = fetchError.props();
        expect(fetchErrorProps.message).toBe('fetch error');
        expect(fetchErrorProps.onRetry).toBeTruthy();
    });
});
