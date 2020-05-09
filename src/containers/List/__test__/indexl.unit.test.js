/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 13:38:33
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import { List } from '..';

const setup = props => {
    const actions = {
        getCounterList: jest.fn(),
    };
    const component = shallow(<List {...actions} {...props} />);
    return {
        component,
        ...actions,
        counters: component.find('Counter'),
    };
};

describe(' List Component ', () => {
    it('should show loading when isFetching ', () => {
        const { component } = setup({ isFetching: true });
        expect(component.find('p').text()).toEqual('Loading...');
    });

    it('should show error when fetch error ', () => {
        const { component } = setup({ errorMessages: 'fetch error' });
        const fetchError = component.find('FetchError');
        expect(fetchError.exists()).toBeTruthy();
        const fetchErrorProps = fetchError.props();
        expect(fetchErrorProps.message).toBe('fetch error');
        expect(fetchErrorProps.onRetry).toBeTruthy();
    });

    // it('should render CounterPanel', () => {
    //     const { component } = setup();
    //     console.info(component.find('Connect(Component)').dive().debug())
    //     const counterPanel = component.find('Connect(CounterPanel)');
    //     expect(counterPanel.exists()).toBeTruthy();
    // });

    it('List ComponentDidMount should called', () => {
        const componentDidMountSpy = jest.spyOn(List.prototype, 'componentDidMount');
        setup();
        expect(componentDidMountSpy).toHaveBeenCalled();
        componentDidMountSpy.mockRestore();
    });

    it('getCounterList should be called when ComponentDidMount', () => {
        const { component } = setup({ disableLifecycleMethods: true });
        component.instance().componentDidMount();
        expect(component.instance().props.getCounterList).toHaveBeenCalled();
    });

    test('<List /> shallow without crashing', () => {
        const wrapper = shallow(<List />);
        expect(wrapper).toMatchSnapshot();
    });
});
