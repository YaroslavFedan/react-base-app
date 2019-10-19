
import PropTypes from "prop-types";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

const DistanceTime = ( {date} ) => 
   date ? distanceInWordsToNow(new Date(date), { addSuffix: true, locale:ruLocale }) : null;


DistanceTime.propTypes = {
    date: PropTypes.string,
};
export default DistanceTime;