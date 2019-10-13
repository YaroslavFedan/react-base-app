import React from 'react';
import  classNames  from "classnames";


import './WhiteBlockWithShadow.scss';

const WhiteBlockWithShadow = ( { children, className } ) => {
    return (
        <div className={classNames('block', className)}>{children}</div>
    );
}

export default WhiteBlockWithShadow;