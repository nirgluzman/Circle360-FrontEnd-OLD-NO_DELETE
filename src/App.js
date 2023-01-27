import "./App.css";

import {
  LandingPage,
  Login,
  Signup,
  DashboardHeader,
  DashboardCircle,
  JoinCircle,
  CircleSettingsHeader,
  CircleSettingsMember,
  SendInvite,
  UserSettings,
  UserDetails,
  UserAppSettings,
} from "./ui-components";
import logo from "./images/logo.png";

const LandingPageOverrides = {
  image: {
    src: logo,
  },
};

function App() {
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
