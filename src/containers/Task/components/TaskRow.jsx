import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

class TaskRow extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
  };

  handleDelete() {
    const { item, handleDeleteTask } = this.props;
    handleDeleteTask(item._id);
  }


  render() {
    const { item } = this.props;
    return (
      <tr>
        <td className="project-title">
          <h6>
            {item.name}
          </h6>
          <small>
            <Moment format="YYYY/MM/DD">
              {item.created}
            </Moment>
          </small>
        </td>
        <td>
          <Moment format="YYYY/MM/DD">
            {item.endDate}
          </Moment>
        </td>
        <td>
          <div className="progress progress-xs">
            <div
              className="progress-bar l-slategray"
              role="progressbar"
              aria-valuenow={29}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '29%' }}
            />
          </div>
          <small>
            Completion with: 29%
          </small>
        </td>
        <td>
          <img
            src="../assets/images/xs/avatar3.jpg"
            data-toggle="tooltip"
            data-placement="top"
            title="Team Lead"
            alt="Avatar"
            className="width35 rounded"
          />
        </td>
        <td>
          <ul className="list-unstyled team-info">
            <li>
              <img
                src="../assets/images/xs/avatar2.jpg"
                data-toggle="tooltip"
                data-placement="top"
                title="Avatar"
                alt="Avatar"
              />
            </li>
            <li>
              <img
                src="../assets/images/xs/avatar3.jpg"
                data-toggle="tooltip"
                data-placement="top"
                title="Avatar"
                alt="Avatar"
              />
            </li>
          </ul>
        </td>
        <td>
          <span className="badge badge-default">InActive</span>
        </td>
        <td className="project-actions">
          <NavLink to={'/task/' + item._id} className="btn btn-sm btn-outline-primary">
            <i className="icon-eye" />
          </NavLink>
          &nbsp;
          <button className="btn btn-sm btn-outline-success" type="button">
            <i className="icon-pencil" />
          </button>
          &nbsp;
          <button className="btn btn-sm btn-outline-danger" type="button" onClick={this.handleDelete.bind(this)}>
            <i className="icon-trash" />
          </button>
        </td>
      </tr>


    );
  }
}

export default TaskRow;
