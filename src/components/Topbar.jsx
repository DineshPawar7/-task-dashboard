import React from 'react';
import { RiTranslate2 } from "react-icons/ri";
import { MdOutlineDashboardCustomize, MdNotificationsActive, MdOutlineWbSunny } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


import '../styles/Topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-bar">
        <i className="icon-search" /><CiSearch />
        <input type="text" placeholder="Search (Ctrl +/)" />
      </div>
      <div className="topbar-icons">
        <i className="icon-translate"><RiTranslate2 /></i>
        <i className="icon-translate"><MdOutlineWbSunny /></i>
        <i className="icon-translate"><MdOutlineDashboardCustomize /></i>
        <i className="icon-translate"><MdNotificationsActive /></i>


    
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/175672643?v=4" alt="Profile" className="profile-pic" />
          <span className="online-status"></span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
