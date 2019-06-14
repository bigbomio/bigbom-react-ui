import React from 'react';
import { shallow } from 'enzyme';

import Text from './index';

describe('Unit test for Text component', () => {
    it('Should render a simple body Text', () => {
        const Wrapper = shallow(<Text className="m-sm">hello</Text>);

        expect(Wrapper.getElement().type).toBe('span');
    });

    it('Should render a title 1 Text', () => {
        const Wrapper = shallow(
            <Text className="m-sm" type="title1">
                Title 1
            </Text>
        );

        expect(Wrapper.props().className.includes('bb-title1')).toBeTruthy();
    });
});
