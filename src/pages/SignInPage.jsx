import {useEffect} from "react";
import {NavLink} from "react-router-dom";

function SignInPage() {
    useEffect(() => {
        document.title = "News Page 👻 👾  🤠 "
    })
    return (
        <div className="page-auth">
            <div className="page-auth__container container">
                <div className="flex">
                    <div className="left">
                        <div className="page-auth__logo-wrap">
                            <NavLink to="/" className="form-auth__logo img-r">
                                <img src="/images/svg-editor-image.svg" width="90" height="90" alt="" />
                            </NavLink>
                        </div>
                        <div className="page-auth__wrap">
                            <h1 className="page-auth__title">
                                Welcome
                            </h1>
                        </div>
                        <div className="team"></div>
                    </div>
                    <div className="right">
                        <div className="page-auth__form form-auth form is_sign-in">
                            <div className="form-auth__title">Authorization</div>
                            <div className="form-auth__controls">
                                <div className="form__item">
                                    <input type="email"
                                           className="form__control is-border-st has-icon-left"
                                           placeholder="Email" />
                                    <svg role="img" className="form__control-icon is-left icon">
                                        <use href="/images/sprite/sprite.svg#icon-email"></use>
                                    </svg>
                                    <button className="form__control-icon form__password-toggle is-right button is-bare is-icon"
                                            type="button">
                                        <svg role="img" className="icon reduce">
                                            <use href="/images/sprite/sprite.svg#icon-error"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="form__item">
                                    <form className="form__control-group">
                                        <input type="password" autoComplete="on"
                                               className="form__control is-border-st has-icon-left has-icon-right"
                                               placeholder="password" />
                                        <svg role="img" className="form__control-icon is-left icon">
                                            <use href="/images/sprite/sprite.svg#icon-lock-big"></use>
                                        </svg>
                                        <button className="form__control-icon form__password-toggle is-right button is-bare is-icon"
                                                type="button">
                                            <svg role="img" className="icon">
                                                <use href=" /images/sprite/sprite.svg#icon-eye"></use>
                                                <use href=" /images/sprite/sprite.svg#icon-eye-slash"></use>
                                            </svg>
                                        </button>
                                    </form>

                                </div>
                            </div>
                            <div className="form-auth__footer">
                                <div className="form-auth__links flex">
                                    <NavLink to="/sign_up" end className="form-auth__link label is-bolder">registration</NavLink>
                                    <NavLink to="/reset" end className="form-auth__link label">Forget password?</NavLink>
                                </div>
                                <button type="submit"
                                        className="form-auth__submit btn is-primary no_icon">
                                    <span className="label is-bolder">Login</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}

export default SignInPage;