import React from 'react';
import { authService, firebaseInstance } from '../../fbase';
import "./socialLogin.scss";

const SocialLogin = () => {
    const getAccount = async(event) => {
        let provider;
        const { target: { name } } = event;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
    }
    return (
        <div className="socialLogin">
            <button name="google" className="socialLogin__google" onClick={getAccount}>
                <i className="fab fa-google"></i>
            </button>
            <button name="github" className="socialLogin__github" onClick={getAccount}>
                <i className="fab fa-github"></i>
            </button>
        </div>
    );
};

export default SocialLogin;