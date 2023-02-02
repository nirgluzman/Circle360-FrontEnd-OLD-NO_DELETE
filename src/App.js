import "./App.css";

import {
  LandingPage,
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
  Logo: {
    src: logo,
  },
};

function App() {
  return (
    <div className="App">
      <LandingPage overrides={LandingPageOverrides} />

      <Signup overrides={LandingPageOverrides} />
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
