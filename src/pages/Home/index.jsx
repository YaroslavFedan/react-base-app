import React from 'react';


import {Messages, Dialogs} from 'modules'
import './Home.scss';


class Home extends React.Component {

    render() {
        
       
        return (
            <section className="home">
                <div className="home__item home__item--dialog demo">
                    <Dialogs />
                </div>
                <div className="home__item home__item--messages demo">
                    <Messages />
                </div>
            </section>
        );
    }
}



export default Home;