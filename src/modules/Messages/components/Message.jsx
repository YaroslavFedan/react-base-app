import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import readedSVG from 'assets/img/readed.svg'
import noreadedSVG from 'assets/img/noreaded.svg'

import './Message.scss';
import { Avatar } from 'components';

const Message = ({
    avatar,
    text,
    date,
    user,
    className,
    attachments,
    isMy,
    isReaded,
    isTyping }) => {

    return (
        <div className={classNames('message', className, { 'message--isMy': isMy})} >

            <Avatar className="message__avatar" src={avatar} alt={`avatar ${user.fullname}`} />
           
            <div className="message__content  demo">
                {attachments &&
                    <div className={classNames("message__attachments", {"message__attachments--one":attachments.length === 1})}>
                        {attachments.map((item, index) => {
                            return (
                                <div key={index} className="message__attachments--item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            );
                        })}
                    </div>
                } 
                
                { (text || isTyping) && 
                    <div className={ classNames("message__bubble",{"message__bubble--is-typing":isTyping}) }>
                        {text && <p className="message__text demo"> {text} </p>}
                        {isTyping && <div className="message__typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        }
                    </div>
                } 

            </div>



            {
                isMy ?
                    <div className={classNames("message__info demo", { 'message__info--readed': isReaded })}>
                        <img src={isReaded ? readedSVG : noreadedSVG} alt="readed icon" />
                    </div> : null
            }


            <div className="message__date demo">{date && distanceInWordsToNow(new Date(date), { addSuffix: true, locale: ruLocale })}</div>

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
    isTyping: PropTypes.bool,
};

export default Message;