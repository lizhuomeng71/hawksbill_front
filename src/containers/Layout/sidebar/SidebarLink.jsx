import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({
  title, route,
}) => (

  <li>
    <NavLink
      to={route}
      activeClassName="active"
    >
      {title}
    </NavLink>
  </li>

);

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string,
};

SidebarLink.defaultProps = {
  route: '/',
};

export default SidebarLink;
