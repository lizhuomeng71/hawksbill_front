import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


class PersonRow extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDeleteDepartment: PropTypes.func.isRequired,
  };

  handleDelete() {
    const { item, handleDeleteDepartment } = this.props;
    handleDeleteDepartment(item._id);
  }

  render() {
    const { item } = this.props;

    return (
      <tr>
        <td className="width45">
          <label className="fancy-checkbox" htmlFor="a">
            <input
              className="checkbox-tick"
              type="checkbox"
              id="a"
              name="checkbox"
            />
            <span />
          </label>
        </td>
        <td>
          <h6 className="mb-0">{item.name}</h6>
        </td>
        <td>
          <span>LA-0215</span>
        </td>
        <td>
          <span>+ 264-625-2583</span>
        </td>
        <td>24 Jun, 2015</td>
        <td>Web Designer</td>
        <td>
          <NavLink to={'/department/' + item._id} className="btn btn-sm btn-outline-primary">
            <i className="icon-eye" />
          </NavLink>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger js-sweetalert"
            title="Delete"
            data-type="confirm"
            onClick={this.handleDelete.bind(this)}
          >
            <i className="icon-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default PersonRow;
