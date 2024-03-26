import {NavLink} from "react-router-dom";

import React from 'react';

function Menu() {
    return (
            <nav className="primary-nav">
                <NavLink className="primary-nav__logo logo" to="." end>
                    <img className="logo__logomark logo_lg" src="/images/logo/logo-en.svg" width="232"
                         height="48" alt="Логотип" />
                    <img className="logo__logomark logo_md" src="/images/svg-editor-image.svg" width="232"
                         height="48" alt="Логотип" />
                </NavLink>
                <ul className="menu">
                    <li className="menu__item is-mypage">
                        <NavLink className="menu__link" to="." end>
                            <svg className="icon" aria-hidden="true" focusable="false">
                                <use href="/images/sprite/sprite.svg#icon-home"></use>
                            </svg>
                            <span className="label">My page</span>
                        </NavLink>
                    </li>
                    <li className="menu__item is-news">
                        <NavLink className="menu__link" to="news" end>
                            <svg className="icon" aria-hidden="true" focusable="false">
                                <use className="md_hidden"
                                     href="/images/sprite/sprite.svg#icon-news"></use>
                                <use className="md_visible"
                                     href="/images/sprite/sprite.svg#icon-home"></use>
                            </svg>
                            <span className="label">News</span>
                        </NavLink>
                    </li>
                    <li className="menu__item is-messenger">
                        <NavLink to="groups" end className="menu__link" >
                            <svg className="icon" aria-hidden="true" focusable="false">
                                <use href="/images/sprite/sprite.svg#icon-community"></use>
                            </svg>
                            <span className="label">Communities</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Menu;