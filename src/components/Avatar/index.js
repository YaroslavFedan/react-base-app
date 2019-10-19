import React from 'react';
import PropTypes from "prop-types";
import  classNames  from "classnames";

const Avatar = ({
    src,
    className,
    alt
}) => {

    if(!src){
        //make avatar from alt
        src = null;
    }

    return (
        <div className={classNames("avatar", className)}>
            <img src={src} alt={alt} />
        </div>
    );
}
 
Avatar.propTypes ={
    className: PropTypes.string,
    src: PropTypes.string,
};

export default Avatar;