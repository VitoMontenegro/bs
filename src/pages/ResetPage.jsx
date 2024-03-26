import {useEffect} from "react";
import {NavLink} from "react-router-dom";

function ResetPage() {
    useEffect(() => {
        document.title = "Reset Pass Page 👻 👾  🤠 "
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
                            <div className="form-auth__title">Forgot your password?</div>
                            <div className="form-auth__auth-methods auth-methods">
                                <div className="auth-methods__title">
                                    Enter your registered email address
                                    email - we will send a link to reset your password.
                                </div>
                            </div>
                            <div className="form-auth__controls">
                                <div className="form__item">
                                    <input type="email"
                                           className="form__control is-border-st has-icon-left"
                                           placeholder="Email" />
                                    <svg role="img" className="form__control-icon is-left icon">
                                        <use href="/images/sprite/sprite.svg#icon-email"></use>
                                    </svg>
                                    <div className="form_notice mt-1s">
                                        <span className="reduce">Field cannot be empty</span>
                                    </div>
                                    <button className="form__control-icon form__password-toggle is-right button is-bare is-icon"
                                            type="button">
                                        <svg role="img" className="icon reduce">
                                            <use href="/images/sprite/sprite.svg#icon-error"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="form-auth__footer">
                                <NavLink to="/sign_in" className="form-auth__back btn is-ghost is-bare is-icon-hoverable">
                                    <svg role="img" className="icon deg270">
                                        <use href="/images/sprite/sprite.svg#icon-arrow"></use>
                                    </svg>
                                    <span className="label">Back</span>
                                </NavLink>
                                <button type="button" className="form-auth__submit btn is-primary no_icon">
                                    <span className="label is-bolder">Submit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) ;
}

export default ResetPage;