import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class EquipmentRow extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleDelete: PropTypes.func.isRequired,
  };


  handleDelete() {
    const { item, handleDelete } = this.props;
    handleDelete(item._key);
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
          <img
            src="/assets/images/xs/avatar1.jpg"
            className="rounded-circle avatar"
            alt="a"
          />
        </td>
        <td>
          <h6 className="mb-0">{item.name}</h6>
          <span>{item.email}</span>
        </td>
        <td>
          <span>{item.department ? item.department.name : '' }</span>
        </td>
        <td>
          <span>{item.role ? item.role.name : '' }</span>
        </td>
        <td>24 Jun, 2015</td>
        <td>Web Designer</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            title="Edit"
          >
            <i className="fa fa-edit" />
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

export default EquipmentRow;
