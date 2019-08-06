import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ as, className, color, size, innerRef, ...attrs }) => {
    const cardClassNames = classNames(
        'bb-card',
        {
            ['bb-card--' + size]: size !== 'md',
            ['bb-card--' + color]: color !== 'none',
        },
        className
    );

    const Tag = typeof as !== 'undefined' ? as : 'div';

    return <Tag ref={innerRef} className={cardClassNames} {...attrs} />;
};

Card.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Pass the ref into inner element */
    innerRef: PropTypes.func,
    /** Render card as HTML tag or React component */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Card background */
    color: PropTypes.oneOf(['none', 'primary', 'secondary', 'warning', 'alternative']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

Card.defaultProps = {
    color: 'none',
    size: 'md',
};

export default Card;
