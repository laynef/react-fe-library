import * as React from 'react';


export const Column = ({ children, align, justify, style = {}, ...rest }) => {
    const alignStyles = {
        center: {
            alignItems: 'center',
        },
        start: {
            alignItems: 'flex-start',
        },
        end: {
            alignItems: 'flex-end',
        },
    };
    const justifyStyles = {
        center: {
            justifyContent: 'center',
        },
        start: {
            justifyContent: 'flex-start',
        },
        end: {
            justifyContent: 'flex-end',
        },
    };
    const style = Object.assign(
        { display: 'flex', flexDirection: 'column' }, 
        align && alignStyles[align] ? alignStyles[align] : {},
        justify && justifyStyles[justify] ? justifyStyles[justify] : {},
        style,
    );

    return (
        <div style={style} {...rest}>
            {children}
        </div>
    )
};