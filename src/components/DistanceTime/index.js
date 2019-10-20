
import React from 'react';
import PropTypes from "prop-types";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import  classNames  from "classnames";

const DistanceTime = ( {date , className} ) => 
   date ? <span className={classNames('', className)}>{distanceInWordsToNow(new Date(date), { addSuffix: true, locale:ruLocale })}</span> : null;


DistanceTime.propTypes = {
    date: PropTypes.string,
};
export default DistanceTime;