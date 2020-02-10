import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class PersonRow extends PureComponent {
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
        </td>
        <td>
          <h6 className="mb-0">{item.name}</h6>
        </td>
        <td>
          <h6 className="mb-0">{item.department.name}</h6>
        </td>
        <td>Web Designer</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            title="Edit"
          >
            <i className="fa fa-edit" />
          </button>
          <button className="btn btn-sm btn-outline-danger" type="button" onClick={this.handleDelete.bind(this)}>
            <i className="icon-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default PersonRow;
