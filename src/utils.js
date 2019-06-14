/**
 *
 * Generate modifiers which will be append into element className
 * @export
 * @param {*} [props={}]
 * @returns {string[]}
 */
export function mapPropsToModifiers(props = {}, defaults = {}) {
    const modifiers = [];

    props.active && props.active !== defaults.active && modifiers.push('active');
    props.color && props.color !== defaults.color && modifiers.push(props.color);
    props.ghost && props.ghost !== defaults.ghost && modifiers.push('background-ghost');
    props.size && props.size !== defaults.size && modifiers.push(props.size);
    props.disabled && props.disabled !== defaults.disabled && modifiers.push('disabled');

    return modifiers;
}

/**
 *
 * Generate list of class names based on module name and modifiers
 * @export
 * @param {[]} [modifiers=[]]
 * @param {string} [moduleName='']
 * @returns
 */
export function mapModifiersToClassNames(modifiers = [], moduleName = '') {
    return modifiers.map(mod => moduleName + '--' + mod);
}
