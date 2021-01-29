import React, { useEffect, useState } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "SetupFirebase";

function App() {
  const [init, setInint] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        console.log("loggedIn User", user);
      } else {
        setUserObj(null);
      }
      setInint(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    console.log("refreshUser: ", user);
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initailizing..."
      )}
      {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;