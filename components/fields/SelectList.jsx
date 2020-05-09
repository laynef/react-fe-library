import * as React from 'react';

const GroupComponent = ({ label, children, ...rest }) => (
    <optgroup label={label} {...rest}>
        {children}
    </optgroup>
);

const ListComponent = ({ value, ...rest }) => (
    <option value={value} {...rest}>{value}</option>
);

export const SelectList = ({ 
    data, 
    name, 
    multiple, 
    size, 
    groupBy, 
    groupComponent, 
    itemComponent, 
    defaultValue, 
    ...rest 
}) => {
    if (!Array.isArray(data)) return null;

    return (
        <select name={name} multiple={multiple} size={size} {...rest} defaultValue={defaultValue}>

        </select>
    );
}