import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { Avatar , DistanceTime, ReadedIcon} from 'components';


import './Message.scss';


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
                isMy ? <ReadedIcon 
                            className={classNames("message__info demo", { 'message__info--readed': isReaded })}
                            readed={isReaded} />
                    : null
            }


            <div className="message__date demo"><DistanceTime date={date}/></div>

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