import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index';

describe('Unit tests for Button component', () => {
    it('Should render Button as "button" HTML element', () => {
        const innerHTML = 'this is a button';
        const buttonElement = mount(<Button>{innerHTML}</Button>).getDOMNode();

        expect(buttonElement.tagName).toBe('BUTTON');
        expect(buttonElement.innerHTML).toBe(innerHTML);
    });

    it('Should render Button as "a" HTML element', () => {
        const buttonElement = shallow(<Button as="a" />).getElement();

        expect(buttonElement.type).toBe('a');
    });
});