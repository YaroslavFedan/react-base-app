
import React from 'react';
import PropTypes from "prop-types";
import  classNames  from "classnames";

import readedSVG from 'assets/img/readed.svg'
import noreadedSVG from 'assets/img/noreaded.svg'

const ReadedIcon = ( { 
    readed, 
    alt, 
    className 
} ) => {
    return (
        <div className={classNames("readed_icon", className)}>
                <img src={readed ? readedSVG : noreadedSVG} alt={classNames("readed_icon", alt)} />
        </div> 
    )
}
  
ReadedIcon.propTypes = {
    readed: PropTypes.bool,
    alt : PropTypes.string,
    className : PropTypes.string || PropTypes.null,
};
export default ReadedIcon;