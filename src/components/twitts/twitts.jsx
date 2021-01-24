import React,{useState} from 'react';
import { dbServie, storageService } from '../../fbase';
import "./twitts.scss";

const Twitts = ({ twitt, userobj }) => {
    const [editting, setEditting] = useState(false);
    const [newTwitt, setNewTwitt] = useState(twitt.text);
    const getEdit = event => {
        const { target: { value } } = event;
        setNewTwitt(value);
    }
    const onModify = async(event) => {
        event.preventDefault();
        await dbServie.doc(`twittom/${twitt.id}`).update({
            text: newTwitt
        });
        setEditting(false);
    }
    const onDelete = async() => {
        const ok = window.confirm("Are you sure to delete?");
        if (ok) {
            await dbServie.doc(`twittom/${twitt.id}`).delete();
            await storageService.refFromURL(twitt.attachmentUrl).delete();
        }
    }
    const toggleEditting = () => setEditting(prev => !prev);
    return (
        <li className="twitt">
            <div className="twitt__profile">
                <img className="twitt__profile__img" src={twitt.creatorPhoto}/>
                <p className="twitt__profile__name">{twitt.creatorName}</p>
                {twitt.creatorId == userobj.uid &&
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
            {twitt.attachmentUrl && <img className="twitt__img" src={twitt.attachmentUrl} width="50px" height="50px" />}
            <div className="twitt__btn">
            {editting ?
                    <form className="twitt__editForm" onSubmit={onModify}>
                        <input
                            className="twitt__editForm__text"
                            type="text"
                            placeholder="Less than 100 texts..."
                            onChange={getEdit}
                            value={newTwitt}
                            required></input>
                        <button className="twitt__editForm__submit" type="submit">
                            <i className="fas fa-edit"></i>
                        </button>
                    </form>
                    :<></>}
                <button className="twitt__btn__good">
                    <i className="fas fa-thumbs-up"></i>
                </button>
                <button className="twitt__btn__bad">
                    <i className="fas fa-thumbs-down"></i>
                </button>
            </div>
        </li>
    );
};

export default Twitts;