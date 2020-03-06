import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';


import MaterialRow from './MaterialRow';

class MaterialList extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadMaterialList: PropTypes.func.isRequired,
    handleDeleteMaterial: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadMaterialList } = this.props;
    onReadMaterialList();
  }

  render() {
    const { list, handleDeleteMaterial, handleOnClickForAddButton } = this.props;

    return (
      <Card>
        <ListHeader title="Material List" handleOnClickForAddButton={handleOnClickForAddButton} />
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
                  <th>Material ID</th>
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
                      <MaterialRow item={item} handleDelete={handleDeleteMaterial} />
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

export default MaterialList;
