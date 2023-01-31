import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";

import { Auth, Hub } from "aws-amplify";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((sess) => {
        console.log("logged in", sess);
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("not logged in");
        setLoggedIn(false);
      });
  };

  const onSignin = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    assessLoggedInState();
  }, []);

  Hub.listen("auth", (data) => {
    switch (data.payload.event) {
      case "signIn":
        console.log("Auth Hub: user signed in");
        break;
      case "signUp":
        console.log("Auth Hub: user signed up");
        break;
      case "signOut":
        console.log("Auth Hub: user signed out");
        break;
      case "signIn_failure":
        console.log("Auth Hub: user sign in failed");
        break;
      case "configured":
        console.log("Auth Hub: the Auth module is configured");
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage onSignin={onSignin} />} />
        <Route path="/signup" element={<SignupPage onSignin={onSignin} />} />
      </Routes>
    </div>
  );
}

export default App;
