
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button, WhiteBlockWithShadow } from '../../../components'


const LoginForm = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <WhiteBlockWithShadow>
                <Form className="auth-form" >
                    <Form.Item >
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text" name="user_name" placeholder="Ваше имя" size="large" id="user_name" />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" name="password" placeholder="Пароль" size="large" id="password" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" size="large"> Войти в аккаунт </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register"> Зарегистрироваться</Link>
                </Form>
            </WhiteBlockWithShadow>
        </>
        
    );
}

export default LoginForm;
