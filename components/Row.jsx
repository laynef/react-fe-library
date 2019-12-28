import * as React from 'react';


export const Row = ({ children, align, justify }) => {
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
        { display: 'flex', flexDirection: 'row' }, 
        align && alignStyles[align] ? alignStyles[align] : {},
        justify && justifyStyles[justify] ? justifyStyles[justify] : {},
    );

    return (
        <div style={style}>
            {children}
        </div>
    )
};