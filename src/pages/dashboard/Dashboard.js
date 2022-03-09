import React from "react";
import './Dashboard.css'
import AnnouncementCard from "../../components/AnnouncementCard";
function Dashboard() {
    return (
      <div>
        <h1 className="page-title"> Announcements </h1>
        <AnnouncementCard className="card" name="BAYC" announcement="Announcement #1"/>
        <AnnouncementCard className="card" name="BAYC" announcement="Announcement #1"/>
        <AnnouncementCard className="card" name="BAYC" announcement="Announcement #1"/>

      </div>
    );
}

export default Dashboard;
