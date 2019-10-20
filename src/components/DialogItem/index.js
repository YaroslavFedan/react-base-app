import React from 'react';

import PropTypes from "prop-types";
import { Avatar, DistanceTime, ReadedIcon } from 'components';

import { Badge } from 'antd';

const DialogItem = ({ date, text, user, newMessage, isReaded }) => {

    return (
        <div className="dialogs__item dialogs__item-flex">

            <div className="dialogs__item dialogs__item-flex-column relative">
                <Avatar src={user.avatar} alt={user.fullname} className="dialogs__item-avatar" />
                {user.online && <span className="online"><Badge color="green" /></span>}
            </div>

            <div className="dialogs__item dialogs__item-flex-column">

                <div className="dialogs__item dialogs__item-flex-row">
                    <div className="dialogs__item dialogs__item-grow ">
                        <p className="bold">{user.fullname}</p>
                    </div>
                    <div className="dialogs__item ">
                        <DistanceTime date={date} className="opacity" />
                    </div>
                </div>

                <div className="dialogs__item dialogs__item-flex-row">
                    <div className="dialogs__item dialogs__item-grow ">
                        <p className="opacity ellipsis pr20">{text}</p>
                    </div>
                    <div className="dialogs__item dialogs__item-end   ">
                        {
                            newMessage ?
                                <span className="new-message"><Badge count={newMessage} /></span> :
                                <ReadedIcon className="dialogs__item--readed"
                                    readed={isReaded} />
                        }

                    </div>
                </div>

            </div>

        </div>
    );
};

DialogItem.defaultProps = {
    user: {}
}

DialogItem.propTypes = {
    avatar: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    newMessage: PropTypes.number,
    isReaded: PropTypes.bool,

};



export default DialogItem;