import React from 'react';
import DialogItem from "../components/DialogItem";

import './Dialogs.scss';

class DialogsContainer extends React.Component {

    render() {

        return (
            < div className="dialogs">
                <DialogItem
                    date={"Sun Oct 13 2019 11:39:42"}
                    text={"Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rhoncus duis vulputate vitae vivamus congue senectus mauris."}
                    user={{ fullname: 'test 1' }}
                    avatar={"https://source.unsplash.com/100x100/?random=1&user"} 
                    newMessage={3}
                    isReaded

                    />

                <DialogItem
                    date={"Sun Oct 13 2019 11:39:42"}
                    text={"Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rhoncus duis vulputate vitae vivamus congue senectus mauris."}
                    user={{ fullname: 'Федор Достоевский' }}
                    avatar={"https://source.unsplash.com/100x100/?random=2&user"} 
                    newMessage={3}
                    online
                    />
            </div>
        )
    }
}


export default DialogsContainer;