import {useEffect} from "react";
import {NavLink} from "react-router-dom";

function SignUpPage() {
    useEffect(() => {
        document.title = "Sign Up Page 👻 👾  🤠 "
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
                            <div className="form-auth__title">Registration</div>
                            <div className="form-auth__controls">
                                <div className="form__item">
                                    <div className="form__control-group">
                                        <svg role="img" className="form__control-icon is-left icon">
                                            <use href="/images/sprite/sprite.svg#icon-id"></use>
                                        </svg>
                                        <input type="text"
                                               className="form__control is-border-st has-icon-left"
                                               placeholder="Name" />
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
                                <div className="form__item">
                                    <div className="form__control-group">
                                        <svg role="img" className="form__control-icon is-left icon">
                                            <use href="/images/sprite/sprite.svg#icon-id"></use>
                                        </svg>
                                        <input type="text"
                                               className="form__control is-border-st has-icon-left"
                                               placeholder="Surname" />
                                            <div className="form_notice mt-1s">
                                                <span className="reduce">Field cannot be empty</span>
                                            </div>
                                            <button className="form__control-icon form__password-toggle is-right button is-bare is-icon"
                                                    type="button">
                                                <svg role="img" className="icon reduce">
                                                    <use
                                                        href="/images/sprite/sprite.svg#icon-error"></use>
                                                </svg>
                                            </button>
                                    </div>
                                </div>
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
                                        <div className="form_notice mt-1s">
                                            <span className="success">Field cannot be empty</span>
                                            <span className="reduce">Password length is at least 8 characters</span>
                                        </div>
                                    </form>

                                </div>

                                <div className=" form__item">
                                    <div className="auth-methods__title small">Your birthday *</div>
                                    <div className="form__row">
                                        <div className="form_item">
                                            <div className="form__control-group">
                                                <input min="1" max="31"
                                                       type="number" className="form__control" name="DayBday" />
                                            </div>
                                        </div>
                                        <div className="form_item">
                                            <div className="form__control-group">

                                                <select className="form__control">
                                                    <option>January</option>
                                                    <option>February</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form_item">
                                            <div className="form__control-group">
                                                <input min="1910" max="2100"
                                                       type="number" className="form__control" name="YearBday" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-danger text-secondary reduce" >incorrect field birthday</div>
                                <div  className="text-danger text-secondary reduce">You must not be under 18 years old</div>
                            </div>
                            <div className="form-auth__footer">
                                <div className="form-auth__links flex">
                                    <span className="form-auth__link label d-none d-sm-block">already registered?</span>
                                    <NavLink to="/sign_in" className="form-auth__link label is-bolder">Sign in</NavLink>
                                </div>
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

export default SignUpPage;