import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Unit tests for Card component', () => {
    it('Should render Card', () => {
        const wrapper = shallow(<Card />);

        expect(wrapper.type()).toBe('div');
    });

    it('Should render Card as "span"', () => {
        const wrapper = shallow(<Card as="span" />);

        expect(wrapper.type()).toBe('span');
    });
});
