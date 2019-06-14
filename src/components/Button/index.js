import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { mapPropsToModifiers } from '../../utils';

/**
 *  General Button components
 */
const Button = ({ as, className, color, ghost, size, disabled, children, active, innerRef, ...props }) => {
    const modifiers = mapPropsToModifiers({
        color,
        ghost,
        disabled,
        size,
        active,
    });

    const btnClassName = classNames('bb-button', className, modifiers.map(modifier => 'bb-button--' + modifier));

    const Tag = typeof as !== 'undefined' ? as : 'button';

    return (
        <Tag ref={innerRef} className={btnClassName} disabled={disabled} {...props}>
            {children}
        </Tag>
    );
};

Button.defaultProps = {
    color: 'primary',
    disabled: false,
    ghost: false,
};

Button.propTypes = {
    /** Render button as another tag */
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** Add more className for button */
    className: PropTypes.string,
    /** Active state for Button */
    disabled: PropTypes.bool,
    /** Active state for Button */
    active: PropTypes.bool,
    /** Button label or icons */
    children: PropTypes.node,
    /** Color of the button */
    color: PropTypes.oneOf(['none', 'primary', 'secondary', 'warning', 'alternative']),
    /** make background transparent and invert text and border colors*/
    ghost: PropTypes.bool,
    /** Size of button */
    size: PropTypes.oneOf(['small', 'large']),
    /** Pass ref to inner */
    innerRef: PropTypes.func,
};

export default Button;
