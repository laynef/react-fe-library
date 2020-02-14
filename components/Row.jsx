import * as React from 'react';


export const Row = ({ children, align, justify, style = {}, ...rest }) => {
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
    
    const style = Object.assign(
        { display: 'flex', flexDirection: 'row' }, 
        align && alignItemsStyles[align] ? alignItemsStyles[align] : {},
        justify && justifyContentStyles[justify] ? justifyContentStyles[justify] : {},
        style,
    );

    return (
        <div style={style} {...rest}>
            {children}
        </div>
    )
};