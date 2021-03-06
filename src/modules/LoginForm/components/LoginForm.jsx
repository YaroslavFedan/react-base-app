
import React from 'react';
import { Link } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";


import { Form, Icon } from 'antd';
import { Button, WhiteBlockWithShadow, FormField } from 'components'
import {required} from "utils/helpers/validate";


const Login = ( props ) => {

    const submit = (formData) => {
       console.log(formData);
    }
    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <WhiteBlockWithShadow>
                <LoginReduxForm  onSubmit={submit} />
            </WhiteBlockWithShadow>
        </>
        
    );
}

const LoginForm =  props  => {

    const { handleSubmit } = props

    return (
        <Form className="auth-form" onSubmit={handleSubmit} >
            <Field
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required]}
                type="text" name="user_name" placeholder="Ваше имя" size="large" id="user_name"
                component={FormField}/>
            <Field 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                validate={[required]}
                type="password" name="password" placeholder="Пароль" size="large" id="password" 
                component={FormField}/>
            <Form.Item>
                <Button htmlType="submit" type="primary" size="large"> Войти в аккаунт </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/sign-up"> Зарегистрироваться</Link>
        </Form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

export default Login;
