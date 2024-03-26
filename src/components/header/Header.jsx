

function Header()  {
    return (
        <header className="header">
            <span className="header__logo logo">
                <img className="logo__logomark logo_lg" src="/images/logo/logo-en.svg" width="232"
                     height="48" alt="Логотип" />
                <img className="logo__logomark logo_md" src="/images/svg-editor-image.svg"
                     width="232" height="48" alt="Логотип" />
                <img className="logo__logomark logo_xs" src="/images/svg-editor-image.svg"
                         width="80" height="80" alt="Логотип" />
            </span>

            <div className="form__items d-grid">
                <div className="header__search">
                    <div className="form__item">
                        <input className="form__control" id="header-search-input"
                               name="blogsearch" type="search" dir="auto" autoComplete="off" aria-label="within mybusines.app"
                               placeholder="Поиск" />
                        <button className="header__search-submit" type="submit" aria-label="Submit Search">
                                <svg className="icon" aria-hidden="true" focusable="false">
                                    <use href="/images/sprite/sprite.svg#icon-search"></use>
                                </svg>
                            </button>

                    </div>
                    <button className="header__search-cancel btn is-ghost" type="reset" data-role="search-cancel">
                        <span className="label is-bolder">Отмена</span>
                    </button>
                </div>
            </div>

            <ul className="header__menu">
                <li className="header__notify dropdown is-right">
                        <svg id="tremor_bell" className="icon" aria-hidden="true" focusable="false">
                            <use href="/images/sprite/sprite.svg#icon-bell"></use>
                        </svg>
                        <span className="header__notify-label active">0</span>
                </li>
                <li className="dropdown not_fixed header__user is-on">
                    <div className="dropdown-toggle">
                        <div className="header_photo">
                            <img alt=""
                                 src="/images/avatar-placeholder.svg" />
                        </div>
                        <span>Тыренчик</span>
                        <span className="downArrow">
                            <svg className="icon deg180 is-right" aria-hidden="true" focusable="false">
                                <use href="/images/sprite/sprite.svg#icon-chevron-down-sm"></use>
                            </svg>
                        </span>
                    </div>

                    <div className="dropdown-menu_wrap">
                        <ul className="dropdown-menu">
                            <li><a>мой профиль</a></li>
                            <li><a>настройки</a></li>
                            <li><a>Выход</a></li>
                        </ul>
                    </div>
                </li>
                <li className="header__language-toggle dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg className="icon" aria-hidden="true" focusable="false">
                            <use href="/images/flags/flags.svg#icon-flag-ru"></use>
                        </svg>
                    </button>
                    <div className="dropdown-menu_wrap">
                        <ul className="dropdown-menu">
                            <li className="menu__item is-dashboard">
                                <a href="/ru/my_page" lang="ru">
                                    <svg className="icon" aria-hidden="true" focusable="false">
                                        <use href="/images/flags/flags.svg#icon-flag-ru"></use>
                                    </svg>
                                    Русский
                                </a>
                            </li>
                            <li className="menu__item is-dashboard">
                                <a href="/en/my_page" lang="en">
                                    <svg className="icon" aria-hidden="true" focusable="false">
                                        <use href="/images/flags/flags.svg#icon-flag-en"></use>
                                    </svg>
                                    English
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="has-search-button">
                    <button className="header__search-toggle btn is-compact is-icon"
                            type="button" aria-haspopup="true" aria-label="Отправить поиск">
                        <svg role="img" className="icon">
                            <use href="/images/sprite/sprite.svg#icon-search"></use>
                        </svg>
                    </button>
                </li>
            </ul>

        </header>
    )
}
export default Header;
