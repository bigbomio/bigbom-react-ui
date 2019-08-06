import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './index';

describe('Unit tests for CardHeader', () => {
    it('Should render CardHeader as a "div" element', () => {
        const wrapper = shallow(<CardHeader />);

        expect(wrapper.type()).toBe('div');
    });
});
