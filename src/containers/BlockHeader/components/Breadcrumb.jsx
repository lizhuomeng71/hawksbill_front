import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Breadcrumb extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    console.log(title);
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">
            <i className="icon-home" />
          </a>
        </li>
        <li className="breadcrumb-item">Person</li>
        <li className="breadcrumb-item active">Person List</li>
      </ul>
    );
  }
}
export default Breadcrumb;
