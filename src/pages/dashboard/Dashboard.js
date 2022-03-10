import React from "react";
import './Dashboard.css'
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";

function Dashboard() {
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
      <div>
        <h1 className="page-title"> Announcements </h1>
        <AnnouncementCard className="card" name="BAYC" announcement={text}/>
        <AnnouncementCard className="card" name="Cool Cats" announcement={text}/>
        <AnnouncementCard className="card" name="CloneX" announcement={text}/>
        <AnnouncementCard className="card" name="Mfer" announcement={text}/>

      </div>
    );
}

export default Dashboard;
