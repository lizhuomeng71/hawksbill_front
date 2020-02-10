import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';
import RoleRow from './RoleRow';

class RoleList extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    handleDeleteRole: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadRoleList } = this.props;
    onReadRoleList();
  }

  render() {
    const { list, handleDeleteRole } = this.props;

    return (
      <Card>
        <ListHeader title="Role List" addNewLink="/role/add" />
        <div className="body">
          <div className="table-responsive">
            <table className="table table-hover js-basic-example dataTable table-custom table-striped m-b-0 c_list">
              <thead className="thead-dark">
                <tr>
                  <th>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input
                        className="select-all"
                        type="checkbox"
                        name="checkbox"
                        id="a"
                      />
                      <span />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list
                  .map((item) => {
                    return (
                      <RoleRow item={item} handleDelete={handleDeleteRole} />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    );
  }
}

export default RoleList;
