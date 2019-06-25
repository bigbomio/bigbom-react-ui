import React from 'react';
import { shallow } from 'enzyme';

import Status from './index';

describe('Unit test for Status component', () => {
    it('Should render a simple Status', () => {
        const Wrapper = shallow(<Status>good</Status>);

        expect(Wrapper.getElement().type).toBe('span');
    });

    it('Should render a Status with warning color', () => {
        const Wrapper = shallow(<Status color="warning">warning</Status>);

        expect(Wrapper.getElement().props.className.includes('bb-status--warning')).toBeTruthy();
    });

    it('Should render a Status as custom Anchor element', () => {
        const Wrapper = shallow(
            <Status color="warning" as="a">
                Active
            </Status>
        );

        // and expect the warpper type to be anchor
        expect(Wrapper.type()).toBe('a');
    });
});
