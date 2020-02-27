import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarTopLink = ({
  title, route, iconClass,
}) => (

  <li>
    <NavLink
      to={route}
      activeClassName="active"
    >
      <i className={iconClass} />
      {title}
    </NavLink>
  </li>

);

SidebarTopLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string,
  iconClass: PropTypes.string,
};

SidebarTopLink.defaultProps = {
  route: '/',
  iconClass: 'icon-globe',
};

export default SidebarTopLink;
