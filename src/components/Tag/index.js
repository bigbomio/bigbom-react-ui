import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = ({ as, className, disposable, onClickClose, children, color, size, ...attrs }) => {
    const classes = classNames(
        'bb-tag',
        {
            ['bb-tag--' + color]: color !== 'none',
            ['bb-tag--' + size]: size !== 'md',
            'bb-tag--disposable': disposable,
        },
        className
    );
    const Tag = typeof as !== 'undefined' ? as : 'span';
    if (disposable) {
        return (
            <Tag className={classes} {...attrs}>
                {children}
                <button className="bb-tag__close" onClick={onClickClose} aria-label="Close">
                    &times;
                </button>
            </Tag>
        );
    }
    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

Tag.propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    /** Custom render element */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Color of tag */
    color: PropTypes.oneOf(['none', 'primary', 'secondary', 'warning', 'alternative']),
    /** Size of tag */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** Content of tag */
    children: PropTypes.string.isRequired,
    /** Disposable tag */
    disposable: PropTypes.bool,
    /** When disposable, handler for close click */
    onClickClose: PropTypes.func,
};

Tag.defaultProps = {
    color: 'none',
    size: 'md',
    disposable: false,
};

export default Tag;
