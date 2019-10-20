< ul className="dialogs">
            {items.map((item, key) => {
                
                let { date, text, user, newMessage, isReaded } = item;
               
                return (
                    <li key={key} className={"dialogs__item "}>
                        
                        <a href="#" >

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

                        </a>

                    </li>
                )

            })}
        </ul>