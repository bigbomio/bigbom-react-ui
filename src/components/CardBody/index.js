import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardBody = ({ className, as, innerRef, ...attrs }) => {
    const classes = classNames('bb-card__body', className);

    const Tag = typeof as !== 'undefined' ? as : 'div';
    return <Tag ref={innerRef} className={classes} {...attrs} />;
};

CardBody.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Render card body as a custom tag or Component */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Pass the ref into inner */
    innerRef: PropTypes.func,
};

export default CardBody;
