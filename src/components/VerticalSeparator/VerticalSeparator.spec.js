import React from 'react';
import { mount } from 'enzyme';
import VerticalSeparator from './index';

describe('Unit test for VerticalSeparator', () => {
    it('Should render VerticalSeparator as a "span" element', () => {
        const wrapper = mount(<VerticalSeparator />).getDOMNode();

        expect(wrapper.tagName).toBe('SPAN');
    });
});
