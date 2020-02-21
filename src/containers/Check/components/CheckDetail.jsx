import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

class ReviewDetail extends PureComponent {
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
      <li className="online">
        <a href="/">
          <div className="media">
            <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
            <div className="media-body">
              <span className="name">{item.assigned_user.last_name}{item.assigned_user.first_name} - {item.name}</span>
              <span className="message">{item.status}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

export default ReviewDetail;
