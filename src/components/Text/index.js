import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ className, as, type, ...attrs }) => {
    const classes = classNames(
        'bb-text',
        {
            ['bb-' + type]: !!type,
        },
        className
    );

    const Tag = typeof as !== 'undefined' ? as : 'span';

    return <Tag className={classes} {...attrs} />;
};

Text.propTypes = {
    // Custom class name for element
    className: PropTypes.string,
    // Render as another type instead of `span`
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.oneOf([
        'title1',
        'title2',
        'title3',
        'title4',
        'headline',
        'body',
        'subhead',
        'callout',
        'subtitle',
        'subtext',
        'footnote',
        'caption1',
        'caption2',
        'caption-headline',
    ]),
};

Text.defaultProps = {
    type: 'body',
};

export default Text;
