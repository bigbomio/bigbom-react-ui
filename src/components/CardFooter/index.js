import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardFooter = ({ className, as, innerRef, ...attrs }) => {
    const Tag = typeof as !== 'undefined' ? as : 'div';

    return <Tag className={classNames('bb-card__footer', className)} ref={innerRef} {...attrs} />;
};

CardFooter.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Pass the ref into inner element */
    innerRef: PropTypes.func,
    /** Render card footer as HTML tag or React component */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default CardFooter;
