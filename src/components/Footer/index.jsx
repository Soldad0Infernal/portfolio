import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div class="linha">
                    <footer>
                        <div class="coluna col12">
                            <span>©2023 - Kauê J. Silva Desenvolvimento Web</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Footer;