
import React from 'react';
import { Link } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

import { Form, Icon } from 'antd';
import { Button, WhiteBlockWithShadow, FormField } from 'components';

import {required, email, minLength, match} from "utils/helpers/validate";


const Register = ( props ) => {
    const submit = (formData) => {
        console.log(formData);
     }
     return (
        <>
             <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, Вам нужно зарегистрироваться</p>
            </div>
            <WhiteBlockWithShadow>
                <RegisterReduxForm  onSubmit={submit} />
            </WhiteBlockWithShadow>
        </>
        
    );
}

const RegisterForm = props => {
    
    const { handleSubmit } = props

    return (
        <Form className="register-form" onSubmit={handleSubmit}>

            <Field
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required, email]}
                type="email" name="email" placeholder="E-Mail" size="large" id="email"
                component={FormField}/>
                
            <Field
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required]}
                type="text" name="user_name" placeholder="Ваше имя" size="large" id="user_name"
                component={FormField}/>

            <Field
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required, minLength(6)]}
                type="password" name="password" placeholder="Пароль" size="large" id="password"
                component={FormField}/>

            <Field
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required, match('password')]}
                type="password" name="password_again" placeholder="Повторите пароль" size="large" id="password_again"
                component={FormField}/>

            <Form.Item>
                <Button htmlType="submit" type="primary" size="large"> Зарегистрироваться </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/sign-in"> Войти в аккаунт </Link>
        </Form>
    );
}

const RegisterReduxForm = reduxForm({ form: 'register'})(RegisterForm);

export default Register;
