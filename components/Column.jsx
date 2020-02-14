import * as React from 'react';


export const Column = ({ children, align, justify, style = {}, ...rest }) => {
    const directionalOptions = (key) => ({
        center: {
            [key]: 'center',
        },
        start: {
            [key]: 'flex-start',
        },
        end: {
            [key]: 'flex-end',
        },
    });
    const justifyContentStyles = directionalOptions('justifyContent');
    const alignItemsStyles = directionalOptions('alignItems');

    const styles = Object.assign(
        { display: 'flex', flexDirection: 'column' }, 
        align && alignItemsStyles[align] ? alignItemsStyles[align] : {},
        justify && justifyContentStyles[justify] ? justifyContentStyles[justify] : {},
        style,
    );

    return (
        <div style={styles} {...rest}>
            {children}
        </div>
    )
};