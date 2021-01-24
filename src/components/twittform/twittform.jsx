import React, { useState,useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import { dbServie, storageService } from "fbase";
import "./twittform.scss";

const Twittform = ({ userobj }) => {
    const errorRef = useRef();
    const [attachment, setAttachment] = useState("");
    const [twitt, setTwitt] = useState("");
    const [error, setError] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
        if (twitt === "") {
            setError("At Least 1 Type...");
            errorRef.current.style.opacity = 1;
            return;
        }
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userobj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const twittobj = {
            text: twitt,
            createdAt: Date.now(),
            creatorId: userobj.uid,
            creatorName: userobj.displayName,
            creatorPhoto: userobj.photoURL,
            attachmentUrl
        }
        await dbServie.collection("twittom").add(twittobj);
        setTwitt("");
        setAttachment("");
        window.scroll({bottom:0,behavior:"smooth"});
    }
    const useInput = (validator) => {
        const onChange = event => {
            const { target: { value } } = event
            let willUpdate = true;
            if (validator && typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setTwitt(value);
                errorRef.current.style.opacity = 0;
            } else {
                setError("Less Than 100 Texts Please...");
                errorRef.current.style.opacity = 1;
            }
        }
        return { onChange };
    }
    const onFileChange = event => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
        reader.onloadend = finishedEvent => {
            const { currentTarget: { result } } = finishedEvent;
            setAttachment(result);
        }
    }
    const onclearAttachment = () => setAttachment("");
    const maxLen = (value) => value.length <= 100;
    const ulala = useInput(maxLen);
    return (
        <form className="twittForm" onSubmit={onSubmit}>
            {attachment &&
                <div className="twittForm__preview">
                    <button className="twittForm__preview__cancle" onClick={onclearAttachment}>
                        <i className="fas fa-times"></i>
                    </button>
                <img className="twittForm__preview__img" src={attachment} alt={userobj.uid}/>
                </div>
            }
            <label htmlFor="fileForm" className="twittForm__file"><i className="fas fa-paperclip"></i></label>
            <input id="fileForm" style={{display:"none"}} type="file" accept="image/*" onChange={onFileChange} />
            <div className="twittForm__message">
                <input
                    className="twittForm__message__text"
                    type="text"
                    placeholder="Less than 100 texts..."
                    maxLength={120}
                    onChange={ulala.onChange}
                    value={twitt}
                />
                <button
                    className="twittForm__message__submit"
                    type="submit"
                    value="twitt"
                >
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
            <span className="twittForm__error" ref={errorRef}>{error}</span>
        </form>
    );
};

export default Twittform;