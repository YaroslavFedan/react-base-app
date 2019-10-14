import React from 'react';
import { Route } from 'react-router-dom';

import './Auth.scss';
import { LoginForm, RegisterForm} from 'modules';


class Auth extends React.Component {

    render() {
        return (
            <section className="auth">
                <div className="auth__content">
                    <Route exact path='/sign-in' component={LoginForm} />
                    <Route exact path='/sign-up' component={RegisterForm} />
                </div>
            </section>
        );
    }

}



export default Auth;