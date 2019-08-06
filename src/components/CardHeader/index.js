import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardHeader = ({ className, as, innerRef, ...attrs }) => {
    const Tag = typeof as !== 'undefined' ? as : 'div';
    return <Tag ref={innerRef} className={classNames('bb-card__header', className)} {...attrs} />;
};

CardHeader.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Pass the ref into inner element */
    innerRef: PropTypes.func,
    /** Render card header as HTML tag or React component */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default CardHeader;
