import React, { useState,useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import { dbServie, storageService } from "fbase";
import "./twittform.scss";

const Twittform = ({ userobj }) => {
    const [attachment, setAttachment] = useState("");
    const [twitt, setTwitt] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
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
    }
    const useInput = (validator) => {
        const error = useRef();
        const onChange = event => {
            const { target: { value } } = event
            let willUpdate = true;
            if (validator && typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setTwitt(value);
                error.current.style.opacity = 0;
            } else {
                error.current.style.opacity = 1;
            }
        }
        return { onChange, error };
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
    const maxLen = (value) => value.length <= 120;
    const ulala = useInput(maxLen);
    return (
        <form className="twittForm" onSubmit={onSubmit}>
            {attachment &&
                <div className="twittForm__preview">
                    <button className="twittForm__preview__cancle" onClick={onclearAttachment}>
                        <i className="fas fa-times"></i>
                    </button>
                    <img className="twittForm__preview__img" src={attachment} />
                </div>
            }
            <label for="fileForm" className="twittForm__file"><i className="fas fa-paperclip"></i></label>
            <input id="fileForm" style={{display:"none"}} type="file" accept="image/*" onChange={onFileChange} />
            <div className="twittForm__message">
                <input
                    className="twittForm__message__text"
                    type="text"
                    placeholder="Less than 120 texts..."
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
            <span className="twittForm__error" ref={ulala.error}>Less Than 120 Texts Please...</span>
        </form>
    );
};

export default Twittform;