import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import readedSVG from '../../assets/img/readed.svg'
import noreadedSVG from '../../assets/img/noreaded.svg'

import './Message.scss';

const Message = ({ avatar, text, date, user, ...props }) => {

    return (
        <div className={classNames('message', props.className, { 'message--isMain': props.isMain })} >

            <div className="message__avatar ">
                <img src={avatar} alt={`avatar ${user.fullname}`} />
            </div>

            <div className="message__content  ">
                <div className="message__bubble ">
                    <p className="message__text "> {text} </p>
                </div>
            </div>

            {
                props.isMain ?
                    <div className={classNames("message__info", { 'message__info--readed': props.isReaded })}>
                        <img src={props.isReaded ? readedSVG : noreadedSVG} alt="readed icon" />
                    </div> : null
            }

            <div className="message__date ">{distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</div>

        </div>
    );
}


Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
};

export default Message;