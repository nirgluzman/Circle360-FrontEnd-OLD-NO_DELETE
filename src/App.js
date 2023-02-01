import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";

import { Auth, Hub } from "aws-amplify";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
