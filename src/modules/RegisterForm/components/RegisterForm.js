import React from 'react';
import {RegisterForm, RegisterSuccess} from "components";


class RegisterFormComponent extends React.Component {

    render() {
        const { success } = this.props;
        return (!success ? <RegisterForm /> : <RegisterSuccess />);
    }
}


export default RegisterFormComponent;