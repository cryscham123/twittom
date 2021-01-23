import React, { useEffect, useState } from 'react';
import Twitts from '../../components/twitts/twitts';
import { dbServie } from '../../fbase';

import "./home.scss";
import Twittform from 'components/twittform/twittform';

const Home = ({userobj}) => {
    const [twitts, setTwitts] = useState([]);
    useEffect(() => {
        dbServie.collection("twittom").onSnapshot((snapshot) => {
            const twittArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setTwitts(twittArray);
        })
    }, []);
    return (
        <div className="homeGrid">
            <ul className="twitts">
                {twitts.map(twitt => <Twitts key={twitt.id} twitt={twitt} userobj={userobj} />)}
            </ul>
            <Twittform userobj={userobj} />
        </div>
    );
};

export default Home;