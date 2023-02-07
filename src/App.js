import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import AuthPage from "./components/AuthPage";
import DashboardPage from "./components/DashboardPage";
import JoinMyCircle from "./components/JoinMyCircle";
import SendInvitationToUser from "./components/SendInvitationToUser";
import CircleSettingsPage from "./components/CircleSettingsPage";
import UserSettingsPage from "./components/UserSettingsPage";
import UserDetailsPage from "./components/UserDetailsPage";
import UserAppSettingsPage from "./components/UserAppSettingsPage";

import { Auth, Hub } from "aws-amplify";

function App() {
  /*const myCircles = [
    {
      groupCode: 1,
      groupName: "Family",
      public: true,
      users: [
        {
          email: "nir@gmail.com",
          nickname: "Nir",
          profilePictureURL: "",
          admin: false,
        },
        {
          _id: 2,
          email: "nir@gmail.com",
          nickname: "Payal",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 3,
          email: "nir@gmail.com",
          nickName: "Anna",
          ProfileImage: "",
          admin: true,
        },
      ],
    },
    {
      _id: 2,
      groupName: "Friends",
      users: [
        {
          _id: 4,
          email: "nir@gmail.com",
          nickName: "Reagan",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 5,
          email: "nir@gmail.com",
          nickName: "Alessandra",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 6,
          email: "nir@gmail.com",
          nickName: "Ve",
          ProfileImage: "",
          admin: true,
        },
      ],
    },
    {
      _id: 3,
      groupName: "Parents",
      users: [
        {
          _id: 7,
          email: "nir@gmail.com",
          nickName: "Miki",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 8,
          email: "nir@gmail.com",
          nickName: "Dola",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 9,
          email: "nir@gmail.com",
          nickName: "Timon",
          ProfileImage: "",
          admin: true,
        },
      ],
    },
    {
      _id: 4,
      groupName: "Collegues",
      users: [
        {
          _id: 10,
          email: "nir@gmail.com",
          nickName: "Antonio",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 11,
          email: "nir@gmail.com",
          nickName: "Reddy",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 12,
          email: "nir@gmail.com",
          nickName: "Jack",
          ProfileImage: "",
          admin: true,
        },
      ],
    },
    {
      _id: 5,
      groupName: "Other",
      users: [
        {
          _id: 13,
          email: "nir@gmail.com",
          nickName: "Armin",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 14,
          email: "nir@gmail.com",
          nickName: "Stefan",
          ProfileImage: "",
          admin: false,
        },
        {
          _id: 15,
          email: "nir@gmail.com",
          nickName: "Radu",
          ProfileImage: "",
          admin: true,
        },
      ],
    },
  ];*/
  const userData ={
    email: "payal@gmail.com",
    nickname:"payal",
    profilePictureURL:"",
    location:{lat:"", lng:""},
    incognito:true,
    myGroups:[
      {
        name:"Group1", admin: true, public: true, members: [
          {
          email: "anna@gmail.com",
            accepted: true,
          },
          {
            email: "nir@gmail.com",
              accepted: true,
            }
        ]
      }]
  }
  const groupData = {
    groupCode: "ABC123",
    public: true,
    members: [
      {
        email: "payal@gmail.com", accepted: true
      },
      {
        email: "anna@gmail.com", accepted: false
      },
      {
        email: "nir@gmail.com", accepted: false
      }
    ]
  }
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
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} /> */}
        <Route
          path="/dashboard"
          element={<DashboardPage userData={userData} groupData={groupData}/>}
        />
        <Route path="/joincircle" element={<JoinMyCircle />} />
        <Route path="/sendinvite" element={<SendInvitationToUser />} />
        {/*<Route
          path="/circlesettings"
          element={<CircleSettingsPage myCircles={[]} />}
      />*/}
        <Route
          path="/circlesettings/:_id"
          element={<CircleSettingsPage userData={userData} groupData={groupData}/>}
        />
        <Route path="/usersettings" element={<UserSettingsPage />} />
        <Route path="/userdetails" element={<UserDetailsPage />} />
        <Route path="/userAppSettings" element={<UserAppSettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
