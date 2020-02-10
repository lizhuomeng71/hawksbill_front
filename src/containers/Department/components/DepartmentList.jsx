import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';


import DepartmentRow from './DepartmentRow';

class DepartmentList extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    handleDeleteDepartment: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadDepartmentList } = this.props;
    onReadDepartmentList();
  }

  render() {
    const {
      list,
      handleDeleteDepartment,
    } = this.props;

    return (
      <Card>
        <ListHeader title="Department List" addNewLink="/department/add" />
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
                  <th>Department ID</th>
                  <th>Phone</th>
                  <th>Join Date</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list
                  .map((item) => {
                    return (
                      <DepartmentRow
                        item={item}
                        handleDeleteDepartment={handleDeleteDepartment}
                        key={item.id}
                      />
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

export default DepartmentList;
