import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  readDepartmentList,
  readDepartment,
  createDepartment,
  deleteDepartment,
} from '../../redux/actions/departmentActions';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import DepartmentDetail from './components/DepartmentDetail';

import BlockHeader from '../BlockHeader';


class Department extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleCreateDepartment: PropTypes.func.isRequired,
    handleEditDepartment: PropTypes.func.isRequired,
    handleDeleteDepartment: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    onReadDepartment: PropTypes.func.isRequired,
  };

  render() {
    const {
      list,
      item,
      onReadDepartment,
      handleCreateDepartment,
      onReadDepartmentList,
      handleEditDepartment,
      handleDeleteDepartment,
    } = this.props;

    return (
      <Container>
        <BlockHeader title="Department" />
        <Row>
          <Col lg={12}>
            <Switch>
              <Route
                exact
                path="/department/"
                render={props => (
                  <DepartmentList
                    {...props}
                    onReadDepartmentList={onReadDepartmentList}
                    list={list}
                    handleDeleteDepartment={handleDeleteDepartment}
                  />
                )}
              />
              <Route
                path="/department/add"
                render={props => <DepartmentForm {...props} onSubmit={handleCreateDepartment} />}
              />
              <Route
                path="/department/:id"
                render={props => <DepartmentDetail {...props} onReadDepartment={onReadDepartment} item={item} />}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(stateProps, ownProps) {
  return {
    list: stateProps.department.list,
    item: stateProps.department.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadDepartment(id) {
      return dispatch(readDepartment(id));
    },
    handleCreateDepartment(data) {
      return dispatch(createDepartment(data));
    },
    handleEditDepartment(data) {
      return dispatch(createDepartment(data));
    },
    handleDeleteDepartment(id) {
      return dispatch(deleteDepartment(id));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Department);
