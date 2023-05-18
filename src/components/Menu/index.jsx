import React from 'react';
import style from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className={style.menu}>
                <header className={style.header}>
                    <div className={style.logo}>
                        <Link to="/" className={style.link}><h1>Kauê Jerônimo</h1></Link>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Menu;
