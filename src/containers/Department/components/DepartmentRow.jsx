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
