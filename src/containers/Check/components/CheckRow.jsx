import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

class CheckRow extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDeleteCheck: PropTypes.func.isRequired,
  };

  handleDelete(e) {
    const { item, handleDeleteCheck } = this.props;
    e.preventDefault();
    handleDeleteCheck(item._id);
  }

  handleApprove(e) {
    const { item, handleDeleteCheck } = this.props;
    e.preventDefault();
    console.log('handleApprove not implemented');
  }

  render() {
    const { item } = this.props;
    return (
      <li className="clearfix">
        <div className="media">
          <div className="media-left">
            <label className="fancy-checkbox" htmlFor={item._id}>
              <input type="checkbox" name="checkbox" className="checkbox-tick" id={item._id} />
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
          </div>
        </div>
      </li>
    );
  }
}

export default CheckRow;
