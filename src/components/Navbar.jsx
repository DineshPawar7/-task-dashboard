import { useState } from "react";
import "../styles/Navbar.css";
import { FaEnvelopeOpen } from "react-icons/fa";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";
import { CiMail, CiCalendarDate, CiDeliveryTruck  } from "react-icons/ci";
import { IoChatbubblesOutline, IoBookOutline } from "react-icons/io5";
import { TbLayoutKanban } from "react-icons/tb";
import { MdOutlineShoppingCart, MdNavigateNext } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ icon: Icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <div
        className="dropdown-button"
        onClick={toggleDropdown}
      >
        <Icon className="navbar-icons" />
        {title}
        {isOpen ? (
          <RiArrowDropDownLine className="dropdown-icon" />
        ) : (
          <MdNavigateNext className="dropdown-icon" />
        )}
      </div>
      <ul className={`submenu ${isOpen ? "show" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

const Navbar = () => {
  const dropdownItems = ["CRM", "E-commerce", "Logistics", "Academy"];

  return (
    <div className="navbar">
      <div className="navbar-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>Vuexy</h2>
      </div>
      <ul className="menu">
        <Dropdown icon={FaEnvelopeOpen} title="Dashboard" items={dropdownItems} />
        <Dropdown icon={BsLayoutSidebar} title="Layouts" items={dropdownItems} />
        <Dropdown icon={IoMdCopy} title="Front Pages" items={dropdownItems} />
      </ul>
      <div className="navbar-footer">
        <h4>Apps and Pages</h4>
        <ul>
          <li>
            <CiMail className="navbar-icons" />
            Email
          </li>
          <li>
            <IoChatbubblesOutline className="navbar-icons" />
            Chat
          </li>
          <li>
            <CiCalendarDate className="navbar-icons" />
            Calendar
          </li>
          <li>
            <TbLayoutKanban className="navbar-icons" />
            Kanban
          </li>
          <Dropdown icon={MdOutlineShoppingCart} title="Ecommerce" items={dropdownItems} />
          <Dropdown icon={IoBookOutline} title="Academy" items={dropdownItems} />
          <Dropdown icon={CiDeliveryTruck} title="Logistics" items={dropdownItems} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
