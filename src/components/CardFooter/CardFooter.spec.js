import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './index';

describe('Unit tests for CardFooter', () => {
    it('Should render CardFooter as a "div" element', () => {
        const wrapper = shallow(<CardFooter />);

        expect(wrapper.type()).toBe('div');
    });

    it('Should render CardFooter as "span"', () => {
        const wrapper = shallow(<CardFooter as="span" />);

        expect(wrapper.type()).toBe('span');
    });
});
