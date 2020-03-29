import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

export default class TaskMaterial extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
  };


  render() {
    const {
      item,
    } = this.props;
    return (
      <li className="online">
        <a href="/">
          <div className="media">
            <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
            <div className="media-body">
              <span className="name">{item.name}</span>
              <span className="message">Sales Lead</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
