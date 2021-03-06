/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 18:46:03
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-15 11:03:38
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import findTestWrapper from '@tests/utils/tools';
import Counter from '..';

const setup = (value = 1, caption = '1') => {
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn(),
    };
    const component = shallow(<Counter caption={caption} value={value} {...actions} />);

    return {
        component,
        ...actions,
        buttons: component.find('Button'),
        counterValue: findTestWrapper(component, 'counterValue'),
        counterLabel: findTestWrapper(component, 'counterLabel'),
    };
};

describe(' Counter Component ', () => {
    it('should have Button Increment and Decrement', () => {
        const { buttons } = setup();
        expect(buttons.at(0).prop('children')).toEqual('+');
        expect(buttons.at(1).prop('children')).toEqual('-');
    });

    it('counter value show with props', () => {
        const { counterLabel, counterValue } = setup(1);
        expect(counterLabel.text()).toMatch(/^Counter/);
        expect(counterValue.text()).toMatch(/^1/);
    });

    it('Button Component should have value, caption props and onClick', () => {
        const { buttons } = setup();
        const addCounterProps = buttons.at(0).props();
        const descCounterProps = buttons.at(1).props();
        expect(addCounterProps.onClick).toBeTruthy();
        expect(descCounterProps.onClick).toBeTruthy();
    });

    it('increment button should call decrement and send param with caption', () => {
        const { buttons, increment } = setup();
        buttons.at(0).simulate('click', {
            stopPropagation: () => {},
        });
        expect(increment).toHaveBeenLastCalledWith('1');
    });

    it('second button should call decrement and send param with caption', () => {
        const { buttons, decrement } = setup();
        buttons.at(1).simulate('click', {
            stopPropagation: () => {},
        });
        expect(decrement).toHaveBeenLastCalledWith('1');
    });
});
