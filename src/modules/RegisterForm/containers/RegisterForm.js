import React from 'react';
import RegisterForm from "../components/RegisterForm";
import RegisterSuccess from "../components/RegisterSuccess";


class RegisterFormContainer extends React.Component {

    render() {
        const { success } = this.props;
        return (!success ? <RegisterForm /> : <RegisterSuccess />);
    }
}


export default RegisterFormContainer;