import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./api/auth/firebase";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const signInFunc = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      setCurrentUser({
        name: data.user.displayName,
        email: data.user.email,
      });
    });
  };

  const onCheckIsAuth = () => {
    console.log(auth);
  };
  const onSignOut = () => {
    setCurrentUser({});
    auth.signOut();
  };

  return (
    <>
      <div>
        <h1>{currentUser.name}</h1>
      </div>
      <div>
        <button onClick={signInFunc}>SignIn</button>
      </div>
      <div>
        <button onClick={onCheckIsAuth}>Check</button>
      </div>
      <div>
        <button onClick={onSignOut}>SignOut</button>
      </div>
    </>
  );
}

export default App;
