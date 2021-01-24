import React from 'react';
import h from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img
                src='https://image.shutterstock.com/image-vector/feminine-logo-set-black-pink-260nw-1150394132.jpg'></img>
            <div className={h.login}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}> Log out </button></div>
                    : <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;