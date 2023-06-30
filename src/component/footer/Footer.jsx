import React from 'react'
import "./footer.css"
import { Icon } from '../../ui'
import { NavLink } from 'react-router-dom'

const links = ["About", "Rent", "Delivery", "Where to ride", "Contacts"];
const Footer = () => {
  const renderNavLinks = () => {
    return links.map((el, index) => {
      const linkPath = el.replaceAll(" ", "-").toLowerCase();
      const activeClassName = "footer-link active";
      const linkClassName = ({ isActive }) =>
        isActive ? activeClassName : "footer-link";

      return (
        <li key={`${el}_${index}`} className="footer-nav_item">
          <NavLink className={linkClassName} to={`/bike/${linkPath}`}>
            {el}
          </NavLink>
        </li>
      );
    });
  };
  return (
    <footer className='footer'>
      <div className='footer-wrapper page-width'>
        <div className="footer-item footer-logo">
          <NavLink to="/bike">
            <Icon type={"logo"} />
          </NavLink>
        </div>
        <nav className="footer-item footer-nav">
          <ul className='footer-nav_list'>
            {renderNavLinks()}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer