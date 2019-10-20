import React from 'react';
import { Message } from 'components';

import './Messages.scss';


let messages = [
    {
        date:'Sun Oct 13 2019 11:39:42',
        text:'Hello',
        user: { 
            fullname: 'test 1' ,
            avatar:"https://source.unsplash.com/100x100/?random=1&user"
        },
        attachments: [
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-7&nature,water"
            },
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-8&nature,water"
            },
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-9&nature,water"
            },
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-10&nature,water"
            }
        ]
    },
    {
        date:'Sun Oct 14 2019 11:39:42',
        text:'Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rhoncus duis vulputate vitae vivamus congue senectus mauris. Dis aenean amet orci; faucibus mi vivamus egestas. Mauris class nunc ut aenean phasellus eu placerat dolor. Congue etiam facilisi convallis consectetur semper. Leo et sollicitudin sem porttitor; nunc parturient duis. Aenean rutrum nam orci conubia adipiscing convallis. Scelerisque lobortis lacus, egestas lacus ullamcorper sollicitudin suspendisse. Rutrum malesuada lectus aptent aliquam porta scelerisque elit.',
        user: { 
            fullname: 'test 1' ,
            avatar:"https://source.unsplash.com/100x100/?random=1&user"
        },
        attachments: [
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-1&nature,water"
            },
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-2&nature,water"
            },
        ]
    },
    {
        date:'Sun Oct 15 2019 11:39:42',
        text:'Lorem ipsum odor amet, consectetuer adipiscing elit.',
        user: { 
            fullname: 'me' ,
            avatar:"https://yt3.ggpht.com/-vJvied4rn-g/AAAAAAAAAAI/AAAAAAAAAAA/8XPXs5dXYy0/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
        },
        attachments: [
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-10&nature,water"
            },
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-11&nature,water"
            },
        ],
        isMy:true,
        isReaded:true
    },
    {
        date:'Sun Oct 18 2019 11:39:42',
        text:'Lorem ipsum odor amet, consectetuer adipiscing elit.',
        user: { 
            fullname: 'me' ,
            avatar:"https://yt3.ggpht.com/-vJvied4rn-g/AAAAAAAAAAI/AAAAAAAAAAA/8XPXs5dXYy0/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
        },
        isMy:true,
        isReaded:false
    },
    {
        date:'Sun Oct 18 2019 11:39:42',
        user: { 
            fullname: 'test 1' ,
            avatar:"https://source.unsplash.com/100x100/?random=1&user"
        },
        attachments: [
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-12&nature,water"
            },
        ],
        
    },
    {
        date:'Sun Oct 19 2019 11:39:42',
        user: { 
            fullname: 'me' ,
            avatar:"https://yt3.ggpht.com/-vJvied4rn-g/AAAAAAAAAAI/AAAAAAAAAAA/8XPXs5dXYy0/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"
        },
        attachments: [
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random-13&nature,water"
            },
        ],
        isMy:true,
        isReaded:true
    },
    {
        user: { 
            fullname: 'test 1' ,
            avatar:"https://source.unsplash.com/100x100/?random=1&user"
        },
        isTyping:true
    }
];

const Messages = (props) => {

    let Messages = messages.map( (item, key) =>{
        return (
            <Message key={key} {...item}/>
        )
    
    })
    return Messages
}


export default Messages;