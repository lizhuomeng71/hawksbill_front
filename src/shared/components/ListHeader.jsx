import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


class ListHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    addNewLink: PropTypes.string.isRequired,
  };

  render() {
    const { title, addNewLink } = this.props;

    return (
      <div className="header">
        <h2>{title}</h2>
        <ul className="header-dropdown">
          <li>
            <NavLink
              className="btn btn-info"
              to={addNewLink}
            >
              Add New
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListHeader;
