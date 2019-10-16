import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import readedSVG from '../../assets/img/readed.svg'
import noreadedSVG from '../../assets/img/noreaded.svg'

import './Message.scss';

const Message = (props) => {
    const { avatar, text, date, attachments, user, isMain, isReaded, className } = props;

    return (
        <div className={classNames('message', className, { 'message--isMain': isMain })} >

            <div className="message__avatar ">
                <img src={avatar} alt={`avatar ${user.fullname}`} />
            </div>


            <div className="message__content  demo">
                {text &&
                    <div className="message__bubble demo">
                        <p className="message__text demo"> {text} </p>
                    </div>
                }
                <div className="message__attachments">
                    {attachments && attachments.map((item, index) => {
                        return (
                            <div key={index} className="message__attachments--item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {
                isMain ?
                    <div className={classNames("message__info demo", { 'message__info--readed': isReaded })}>
                        <img src={props.isReaded ? readedSVG : noreadedSVG} alt="readed icon" />
                    </div> : null
            }

            <div className="message__date demo">{distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</div>

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
    attachments: PropTypes.array,
};

export default Message;