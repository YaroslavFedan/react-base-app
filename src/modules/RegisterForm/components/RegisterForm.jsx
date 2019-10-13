
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button, WhiteBlockWithShadow } from '../../../components'


const RegisterForm = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, Вам нужно зарегистрироваться</p>
            </div>
            <WhiteBlockWithShadow>
                <Form className="register-form" >
                    <Form.Item >
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="email" name="email" placeholder="E-Mail " size="large" id="email" />
                    </Form.Item>
                    <Form.Item >
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text" name="user_name" placeholder="Ваше имя " size="large" id="user_name" />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" name="password" placeholder="Пароль" size="large" id="password"/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password" name="password_again" placeholder="Повторите пароль" size="large" id="password_again" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" size="large"> Зарегистрироваться </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/login"> Войти в аккаунт </Link>
                </Form>
            </WhiteBlockWithShadow>
        </>
        
    );
}

export default RegisterForm;
