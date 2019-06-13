import React from 'react';
import { shallow } from 'enzyme';

import Tag from './index';

describe('Unit test for Tag component', () => {
    it('Should render a simple Tag', () => {
        const Wrapper = shallow(<Tag className="m-sm">hello</Tag>);

        expect(Wrapper.getElement().type).toBe('span');
    });

    it('Should render a Tag with warning color', () => {
        const Wrapper = shallow(
            <Tag className="m-sm" color="warning">
                warning
            </Tag>
        );

        expect(Wrapper.getElement().props.className.includes('bb-tag--warning')).toBeTruthy();
    });

    it('Should render a disposable Tag with close button', () => {
        const handleClickCloseMockFn = jest.fn();
        const Wrapper = shallow(
            <Tag className="m-sm" color="warning" disposable onClickClose={handleClickCloseMockFn}>
                disposable
            </Tag>
        );

        // First get the close button
        const closeButton = Wrapper.children('button');
        // and expect the close button to be available
        expect(closeButton).toBeTruthy();

        // then simulate click 2 times
        closeButton.simulate('click');
        closeButton.simulate('click');
        // and expect the mock function to be called 2 times
        expect(handleClickCloseMockFn.mock.calls.length).toBe(2);
    });
});
