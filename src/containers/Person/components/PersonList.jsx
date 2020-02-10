import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';


import PersonRow from './PersonRow';

class PersonList extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadPersonList: PropTypes.func.isRequired,
    handleDeletePerson: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadPersonList } = this.props;
    onReadPersonList();
  }

  render() {
    const { list, handleDeletePerson } = this.props;

    return (
      <Card>
        <ListHeader title="Person List" addNewLink="/person/add" />
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
                  <th>Person ID</th>
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
                      <PersonRow item={item} handleDelete={handleDeletePerson} />
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

export default PersonList;
