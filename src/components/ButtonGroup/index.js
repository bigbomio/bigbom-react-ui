import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonGroup = ({ className, as, innerRef, ...attrs }) => {
    const Tag = typeof as !== 'undefined' ? as : 'span';
    return <Tag ref={innerRef} className={classNames('bb-button-group', className)} {...attrs} />;
};

ButtonGroup.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Render as a custom tag or Component */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Pass the ref into inner */
    innerRef: PropTypes.func,
};

export default ButtonGroup;
