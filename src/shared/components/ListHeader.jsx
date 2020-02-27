import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';


class ListHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    addNewLink: PropTypes.string.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
  };

  render() {
    const { title, addNewLink, handleOnClickForAddButton } = this.props;

    return (
      <div className="header">
        <h2>{title}</h2>
        <ul className="header-dropdown">
          <li>
            <Button
              className="btn btn-info"
              onClick={handleOnClickForAddButton}
            >
              Add New
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListHeader;
