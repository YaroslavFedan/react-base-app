import React from 'react';
// import PropTypes from "prop-types";
 import classNames from "classnames";
// import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
// import ruLocale from 'date-fns/locale/ru';
import { Avatar, DistanceTime, ReadedIcon } from 'components';



const DialogItem = ({
    avatar,
    date,
    text,
    user,
    isReaded
}) => {

    return (
        <a href="#" className={"dialogs__item demo"}>
            <div className="dialogs__item--avatar demo">
                <Avatar src={avatar} alt={user.fullname} />
            </div>
            <div className="dialogs__item-info demo">
                <div className="dialogs__item-info-top demo">
                    <b className="demo">{user.fullname}</b>
                    <span className="demo"><DistanceTime date={date}/></span>
                </div>
                <div className="dialogs__item-info-bottom demo">
                    <p>{text}</p>
                    <ReadedIcon className={ classNames('',{ 'dialogs__item--readed': isReaded }) }
                            readed={isReaded}/>
                </div>
            </div>
        </a>
    );
}

DialogItem.defaultProps = {

}

DialogItem.propTypes = {

};

export default DialogItem;