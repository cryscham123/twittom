import React, { useEffect, useState } from 'react';
import Approuter from "./router";
import {authService} from "../fbase"
import "./app.scss";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userobj, setUserobj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setUserobj({
          displayName: user.displayName || `Visitor.${user.uid.slice(0,3)}`,
          uid: user.uid,
          photoURL: user.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [])
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserobj({
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL ,
      updateProfile: (args) => user.updateProfile(args),
    });
  }
  return (
    <>
      {init ? <Approuter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userobj={userobj} /> : "initializing..."}
      </>
  );
}

export default App;
