import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";
import JoinMyCircle from "./components/JoinMyCircle";
import SendInvitation from "./components/SendInvitation";
import CircleSettingsPage from "./components/CircleSettingsPage";
import UserSettingsPage from "./components/UserSettingsPage";
import UserDetailsPage from "./components/UserDetailsPage";
import UserAppSettingsPage from "./components/UserAppSettingsPage";

const LandingPageOverrides = {
  image: {
    src: logo,
  },
};

function App() {
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
      <LandingPage overrides={LandingPageOverrides} />
      <Login />
      <Signup />
      <DashboardHeader />
      <DashboardCircle />
      <JoinCircle />
      <CircleSettingsHeader />
      <CircleSettingsMember />
      <SendInvite />
      <UserSettings />
      <UserDetails />
      <UserAppSettings />
    </div>
  );
}

export default App;
