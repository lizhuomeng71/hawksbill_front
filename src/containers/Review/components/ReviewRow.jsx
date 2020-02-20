import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

class ReviewRow extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDeleteReview: PropTypes.func.isRequired,
  };

  handleDelete(e) {
    const { item, handleDeleteReview } = this.props;
    e.preventDefault();
    handleDeleteReview(item._id);
  }


  render() {
    const { item } = this.props;
    return (
      <li className="online">
        <a href="/">
          <div className="media">
            <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
            <div className="media-body">
              <span className="name">{item.assigned_user.last_name}{item.assigned_user.first_name} - {item.name }</span>
              <span className="message">{item.status}</span>
            </div>
            <div className="media-right">
              <button
                className="btn btn-sm btn-outline-danger"
                type="button"
                onClick={(e) => { this.handleDelete(e); }}
              >
                <i className="icon-trash" />
              </button>
              &nbsp;
              <a className="btn btn-sm btn-outline-primary" href="/task/5e3386f8582b9bab821f110b">
                <i className="icon-eye" />
              </a>
              &nbsp;
              <a className="btn btn-sm btn-outline-primary" href="/task/5e3386f8582b9bab821f110b">
                <i className="icon-eye" />
              </a>
            </div>


          </div>
        </a>
      </li>
    );
  }
}

export default ReviewRow;
