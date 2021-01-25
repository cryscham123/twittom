import React,{useState,useRef} from 'react';
import { dbServie, storageService } from '../../fbase';
import "./twitts.scss";

const Twitts = ({ twitt, userobj }) => {
    const [editting, setEditting] = useState(false);
    const [newTwitt, setNewTwitt] = useState(twitt.text);
    const [Merror, setMerror] = useState("");
    const goodRef = useRef();
    const badRef = useRef();
    const MerrorRef = useRef();
    const onModify = async(event) => {
        event.preventDefault();
        const Mok = window.confirm("Are you sure to edit?");
        if (Mok) {
            await dbServie.doc(`twittom/${twitt.id}`).update({
                text: newTwitt,
                isEditted: true,
            });
            setEditting(false);
        }
    }
    const useInput = (errorMessage, validator) => {
        const getEdit = event => {
            const { target: { value } } = event
            let willUpdate = true;
            if (validator && typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setNewTwitt(value);
                MerrorRef.current.style.opacity = 0;
            } else {
                setMerror(errorMessage);
                MerrorRef.current.style.opacity = 1;
            }
        }
        return { getEdit };
    }
    const goodBtn = async () => {
        let goods
        if (!twitt.goods.includes(userobj.uid)) {
            goodRef.current.style.color = "#1b9cfc";
            goods = [...twitt.goods, userobj.uid]
            await dbServie.doc(`twittom/${twitt.id}`).update({
                goods
            });
        } else {
            goodRef.current.style.color = "rgba(0, 0, 0, 0.5)";
            goods = [...twitt.goods].filter(item => item !== userobj.uid);
            await dbServie.doc(`twittom/${twitt.id}`).update({
                goods
            });
        }
    }
    const badBtn = async () => {
        let bads = [...twitt.bads, userobj.uid]
        if (!twitt.bads.includes(userobj.uid)) {
            badRef.current.style.color = "#1b9cfc";
            bads = [...twitt.bads, userobj.uid]
            await dbServie.doc(`twittom/${twitt.id}`).update({
                bads
            });
        } else {
            badRef.current.style.color = "rgba(0, 0, 0, 0.5)";
            bads = [...twitt.bads].filter(item => item !== userobj.uid);
            await dbServie.doc(`twittom/${twitt.id}`).update({
                bads
            });
        }
    }
    const maxLen = (value) => value.length <= 100;
    const heheh = useInput("Less Than 100 Texts Please...",maxLen)
    const onDelete = async() => {
        const ok = window.confirm("Are you sure to delete?");
        if (ok) {
            await dbServie.doc(`twittom/${twitt.id}`).delete();
            twitt.attachmentUrl && await storageService.refFromURL(twitt.attachmentUrl).delete();
        }
    }
    const toggleEditting = () => setEditting(prev => !prev);
    return (
        <li className="twitt">
            <div className="twitt__profile">
                <img className="twitt__profile__img" src={twitt.creatorPhoto} alt={userobj.uid} />
                <p className="twitt__profile__name">{twitt.creatorName}</p>
                <p className="twitt__profile__time">{twitt.displayDate}</p>
                {twitt.creatorId === userobj.uid &&
                            <div className="twitt__profile__control">
                                <button className="twitt__profile__control__edit" onClick={toggleEditting}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="twitt__profile__control__delete" onClick={onDelete}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                }
            </div>
            <div className="twitt__twitt">
                <span className="twitt__twitt__text">{twitt.text}</span>
            </div>
            {twitt.attachmentUrl && <img className="twitt__img" src={twitt.attachmentUrl} alt={twitt.createdAt} />}
            <div className="twitt__btn">
                {editting ?
                    <div className="modify">
                        <form className="twitt__editForm" onSubmit={onModify}>
                            <input
                                className="twitt__editForm__text"
                                type="text"
                                placeholder="Less than 100 texts..."
                                onChange={heheh.getEdit}
                                value={newTwitt}
                                required></input>
                            <button className="twitt__editForm__submit" type="submit">
                                <i className="fas fa-edit"></i>
                            </button>
                        </form>
                        <span className="Merror" ref={MerrorRef}>{Merror}</span>
                    </div>
                    : <></>}
                <div className="twitt__btn__good">
                    <button
                        ref={goodRef}
                        className="twitt__btn__good__btn"
                        onClick={goodBtn}
                        >
                        <i className="fas fa-thumbs-up"></i>
                    </button>
                    <span className="twitt__btn__good__count">{twitt.goods.length}</span>
                </div>
                <div className="twitt__btn__bad">
                    <button
                        ref={badRef}
                        className="twitt__btn__bad__btn"
                        onClick={badBtn}
                        >
                        <i className="fas fa-thumbs-down"></i>
                    </button>
                    <span className="twitt__btn__bad__count">{twitt.bads.length}</span>
                </div>
            </div>
            {twitt.isEditted && <span className="twitt__editmessage">(be edited)</span>}
        </li>
    );
};

export default Twitts;