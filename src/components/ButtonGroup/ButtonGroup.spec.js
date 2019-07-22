import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from './index';
import Button from '../Button';

describe('Unit tests for ButtonGroup component', () => {
    it('Should render ButtonGroup as a group of two buttons', () => {
        const wrapper = shallow(
            <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </ButtonGroup>
        );

        expect(wrapper.find(Button).length).toBe(2);
    });

    it('Should render ButtonGroup as "div" HTML element', () => {
        const ButtonGroupElement = shallow(<ButtonGroup as="div" />).getElement();

        expect(ButtonGroupElement.type).toBe('div');
    });
});
