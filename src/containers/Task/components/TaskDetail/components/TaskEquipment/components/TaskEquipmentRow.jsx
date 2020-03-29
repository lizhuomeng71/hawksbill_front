import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

export default class TaskEquipment extends PureComponent {
  static propTypes = {
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDeleteTaskEquipment: PropTypes.func.isRequired,
  };

  handleDelete(e) {
    const { task, item, handleDeleteTaskEquipment } = this.props;
    e.preventDefault();
    handleDeleteTaskEquipment(task._id, item._id);
  }

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
            <div className="media-right">
              <button
                className="btn btn-sm btn-outline-primary"
                type="button"
                onClick={(e) => { this.handleDelete(e); }}
              >
                <i className="icon-trash" />
              </button>
            </div>
          </div>
        </a>
      </li>
    );
  }
}
