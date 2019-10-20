import React from 'react';

import PropTypes from "prop-types";
import classNames from "classnames";
import { Avatar , DistanceTime, ReadedIcon} from 'components';

const Message = ({
   
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
    
                <Avatar className="message__avatar" src={user.avatar} alt={`avatar ${user.fullname}`} />
               
                <div className="message__content  ">
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
                            {text && <p className="message__text "> {text} </p>}
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
                                className={classNames("message__info ", { 'message__info--readed': isReaded })}
                                readed={isReaded} />
                        : null
                }
    
                <div className="message__date "><DistanceTime date={date}/></div>
                
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