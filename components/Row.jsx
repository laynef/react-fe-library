import * as React from 'react';


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

export const Row = ({ children, align, justify, style = {}, ...rest }) => {
    const justifyContentStyles = directionalOptions('justifyContent');
    const alignItemsStyles = directionalOptions('alignItems');

    const styles = Object.assign(
        { display: 'flex', flexDirection: 'row' }, 
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