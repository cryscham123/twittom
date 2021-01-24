import React, { useEffect,useState } from 'react';
import { authService, dbServie } from "../../fbase";
import { useHistory } from "react-router-dom";
import "./profile.scss";

const Profile = ({refreshUser,userobj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userobj.displayName);
    const getMyTwitts = async() => {
        const twitts = await dbServie.collection("twittom").where("creatorId", "==", userobj.uid).orderBy("createdAt").get();
    }
    useEffect(() => getMyTwitts,[])
    const signOut = () => {
        authService.signOut();
        history.push("/");
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        if (userobj.displayName !== newDisplayName) {
            await userobj.updateProfile({
                displayName: newDisplayName
            });
            refreshUser();
        }
    }
    const onChange = event => {
        const { target: { value } } = event;
        setNewDisplayName(value);
    }
    return (
        <div className="profile">
            <div className="profile__state">
                <img className="profile__state__img" src={userobj.photoURL} />
                <p className="profile__state__text">{userobj.displayName}</p>
                <form className="profile__updateProfile" onSubmit={onSubmit}>
                    <input className="profile__updateProfile__input" type="text" onChange={onChange} value={newDisplayName} />
                    <button className="profile__updateProfile__submit" type="submit" value="Update profile">
                        <i className="fas fa-edit"></i>
                    </button>
                </form>
            </div>
            <button className="profile__logout" onClick={signOut}>sign out</button>
        </div>
    );
};

export default Profile;