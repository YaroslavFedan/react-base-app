import React from 'react';


import {Message} from '../../components'
import './Home.scss';


class Home extends React.Component {

    render() {
        
       
        return (
            <section className="home">
                <Message 
                    date={"Sun Oct 13 2019 11:39:42"}
                    text={"Hello"}
                    user={ {fullname:'test 1'} }
                    avatar={"https://source.unsplash.com/100x100/?random=1&user"}/>
                <Message 
                    text={"Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rhoncus duis vulputate vitae vivamus congue senectus mauris. Dis aenean amet orci; faucibus mi vivamus egestas. Mauris class nunc ut aenean phasellus eu placerat dolor. Congue etiam facilisi convallis consectetur semper. Leo et sollicitudin sem porttitor; nunc parturient duis. Aenean rutrum nam orci conubia adipiscing convallis. Scelerisque lobortis lacus, egestas lacus ullamcorper sollicitudin suspendisse. Rutrum malesuada lectus aptent aliquam porta scelerisque elit."}
                    date={"Sun Oct 13 2019 13:05:42"}
                    user={  {fullname:'test 1'} }
                    avatar={"https://source.unsplash.com/100x100/?random=1&user"}/>
                <Message 
                    isMain={true} 
                    isReaded={true}
                    text={"Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum eu nunc dictumst tellus turpis sed condimentum. Et vestibulum ligula malesuada fringilla dictumst dictumst. Purus donec vestibulum lorem litora tempus vehicula. Suscipit porttitor porta parturient neque aliquet nisl urna. Nascetur dictum fermentum pulvinar aliquam vel malesuada. Maecenas ex at condimentum sagittis quis est curabitur sed orci."}
                    date={"Sun Oct 13 2019 13:07:42"}
                    user={ {fullname:'me'} }
                    avatar={"https://yt3.ggpht.com/-vJvied4rn-g/AAAAAAAAAAI/AAAAAAAAAAA/8XPXs5dXYy0/s48-c-k-no-mo-rj-c0xffffff/photo.jpg"}/>
            </section>
        );
    }

}



export default Home;