import * as React from 'react';


export default ({ children, align, justify }) => {
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

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            ...(align && alignStyles[align] ? alignStyles[align] : {}),
            ...(justify && justifyStyles[justify] ? justifyStyles[justify] : {}),
        }}>
            {children}
        </div>
    )
};