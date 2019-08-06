import React from 'react';
import { shallow } from 'enzyme';
import CardBody from './index';

describe('Unit tests for CardBody', () => {
    it('Should render CardBody as a "div" element', () => {
        const wrapper = shallow(<CardBody />);

        expect(wrapper.type()).toBe('div');
    });
});
