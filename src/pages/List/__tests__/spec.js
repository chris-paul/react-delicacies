import React from 'react';
import { shallow } from 'enzyme';
import List from '../index';

const findWrapper = (wrapper, tag) => {
    return wrapper.find(`[data-test="${tag}"]`);
};

describe('List', () => {
    it('should have select', () => {
        const wraper = shallow(<List />);
        const selectElem = findWrapper(wraper, 'list');
        expect(selectElem.length).toBe(1);
    });
});
