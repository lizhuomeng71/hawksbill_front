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

  handleApprove(e) {
    const { item, handleDeleteReview } = this.props;
    e.preventDefault();
    console.log('handleApprove not implemented');
  }

  handleReject(e) {
    const { item, handleDeleteReview } = this.props;
    e.preventDefault();
    console.log('handleReject not implemented');
  }


  render() {
    const { item } = this.props;
    return (
      <li className="clearfix">
        <div className="media">
          <div className="media-left">
            <label className="fancy-checkbox" htmlFor="aa">
              <input type="checkbox" name="checkbox" className="checkbox-tick" id="aa" />
              <span />
            </label>
          </div>
          <div className="media-body">
            <h6 className="sub">{item.name}</h6>
            <p className="dep">{item.description}</p>
          </div>
          <div className="media-right">
            <button
              className="btn btn-sm btn-outline-primary"
              type="button"
              onClick={(e) => { this.handleDelete(e); }}
            >
              <i className="icon-trash" />
            </button>
            &nbsp;
            <button
              className="btn btn-sm btn-outline-success"
              type="button"
              onClick={(e) => { this.handleApprove(e); }}
            >
              <i className="icon-check" />
            </button>
            &nbsp;
            <button
              className="btn btn-sm btn-outline-danger"
              type="button"
              onClick={(e) => { this.handleReject(e); }}
            >
              <i className="icon-ban" />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ReviewRow;
