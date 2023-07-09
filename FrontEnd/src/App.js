import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import Login from "./Pages/login/Login";
import Stats from "./Pages/stats/Stats";
import SignUp from "./Pages/sign-up/SignUp";
import Settings from "./Pages/app-settings/Settings";
import Schedule from "./Pages/schedule/";
import Profile from "./Pages/profile/Profile";
import Message from "./Pages/message/";
import PrivateRoutes from "./Utils/PrivateRoutes";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/app" exact element={<PrivateRoutes />}>
            <Route path="dash-board" exact element={<Dashboard />} />
            <Route path="schedule" exact element={<Schedule />} />
            <Route path="stats" exact element={<Stats />} />
            <Route path="profile" exact element={<Profile />} />
            <Route path="message" exact element={<Message />} />
            <Route path="settings" exact element={<Settings />} />
          </Route>
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
