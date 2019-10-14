import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.scss';


const Error404 = ( props ) => {
    return(
           <div> 
                <h2>Error 404 page not found!</h2>
                <Link to="/">to Main</Link>
           </div>  

    );
}



export default Error404;