import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Status = ({ as, className, children, color, size, ...attrs }) => {
    const classes = classNames(
        'bb-status',
        {
            ['bb-status--' + color]: color !== 'none',
            ['bb-status--' + size]: size !== 'md',
        },
        className
    );
    const Tag = typeof as !== 'undefined' ? as : 'span';
    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

Status.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Custom render element */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Color of tag */
    color: PropTypes.oneOf([
        'none',
        'primary',
        'secondary',
        'warning',
        'alternative',
        'alternative2',
        'alternative3',
        'alternative4',
        'alternative5',
        'alternative6',
        'alternative7',
        'alternative8',
    ]),
    /** Size of tag */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** Content of tag */
    children: PropTypes.string.isRequired,
};

Status.defaultProps = {
    color: 'none',
    size: 'md',
};

export default Status;
