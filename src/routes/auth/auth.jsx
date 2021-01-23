import React, { useState } from 'react';
import { authService, firebaseInstance } from '../../fbase';
import "./auth.scss";
import SocialLogin from './socialLogin';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [NewAccount, setNewAccount] = useState(false);
    const onChange = event => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if (NewAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            }
            else {
                data = await authService.signInWithEmailAndPassword(
                    email, password
                )
            }
        }
        catch(error) {
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev)
    return (
        <div className="login">
            <span className="login__title">Login</span>
            <form className="login__Form" onSubmit={onSubmit}>
                <div className="login__Form__email">
                    <i className="fas fa-user login__Form__email__icon"></i>
                    <input className="login__Form__email__input" name="email" type="email" placeholder="email" onChange={onChange} required value={email} />
                </div>
                <div className="login__Form__password">
                    <i className="fas fa-lock login__Form__password__icon"></i>
                    <input className="login__Form__password__input" name="password" type="password" placeholder="password" onChange={onChange} required value={password} />
                </div>
                {error && <span className="login__Form__error">{error}</span>}
                <input className="login__Form__submit" type="submit" value={NewAccount ? "Create Account" : "Sign in"} />
            </form>
            <div className="login__control">
                <button className="login__control__toggle" onClick={toggleAccount}>{NewAccount ? "...You Have Accont?" : "...You Have No Accont?"}</button>
                <button className="login__control__find">...Forgot Password?</button>
            </div>
            <SocialLogin />
        </div>
    );
};

export default Auth;