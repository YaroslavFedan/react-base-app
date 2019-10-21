
import React from 'react';
import { Icon } from 'antd';
import { WhiteBlockWithShadow } from 'components'


const RegisterSuccess = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, Вам нужно зарегистрироваться</p>
            </div>
            <WhiteBlockWithShadow>
                <div className="auth__success-block">
                    <div className="auth__success-info">
                        <Icon type="info-circle" style={{ fontSize: '48px' }} />
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                
                </div>
            </WhiteBlockWithShadow>
        </>
        
    );
}

export default RegisterSuccess;
