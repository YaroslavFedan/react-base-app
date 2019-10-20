import React from 'react';
import DialogItem from "../components/DialogItem";

import './Dialogs.scss';

class DialogsContainer extends React.Component {

    render() {

        let items = [
            {
                date: 'Sun Oct 13 2019 11:39:42',
                text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rhoncus duis vulputate vitae vivamus congue senectus mauris.",
                user:{ fullname: 'test 1', avatar:'https://source.unsplash.com/100x100/?random=1&user', online:true},
                isReaded: true,
            },
            {
                date: 'Sun Oct 18 2019 11:39:42',
                text:"Lorem ipsum odor amet, consectetuer adipiscing elit.",
                user:{ fullname: 'Федор Достоевский', avatar:'https://source.unsplash.com/100x100/?random=2&user'},
                isReaded: false,
            },
            {
                date: 'Sun Oct 19 2019 11:39:42',
                text:"Lorem ipsum odor amet, consectetuer adipiscing elit.",
                user:{ fullname: 'John Down', avatar:'https://source.unsplash.com/100x100/?random=3&user'},
                isReaded: false,
                newMessage: 3
            },
        ];
        return (

                <DialogItem items={items} />
        )
    }
}


export default DialogsContainer;