import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, Menu } from 'antd';
import './Menu.scss';


const MyMenu = ( props )=>{
    return (
        <Menu mode="horizontal" >
            <Menu.Item key="signup" >
                <Icon type="signup" />
                <Link to={"/sign-up"}>Регистрация</Link>
            </Menu.Item>
            <Menu.Item key="signin" >
                <Icon type="signin" />
                <Link to={"/sign-in"}>Войти</Link>
            </Menu.Item>
        </Menu>
    );
}


export default MyMenu;