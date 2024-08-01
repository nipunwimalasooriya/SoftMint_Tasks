// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";

import Body from "./components/Body";

function App() {
  return (
    <div className="bg-zinc-900 ">
      <Navbar />
      <ProfileHeader />
      <Tabs />
      <div className="px-[240px] mx-auto p-4 bg-zinc-900">
        <Body />

      </div>
    </div>
  );
}

export default App;
