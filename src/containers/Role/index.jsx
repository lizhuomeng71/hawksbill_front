import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  readRoleList,
  readRole,
  createRole,
  deleteRole,
} from '../../redux/actions/roleActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import RoleList from './components/RoleList';
import RoleForm from './components/RoleForm';
import BlockHeader from '../BlockHeader';


class Role extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleCreateRole: PropTypes.func.isRequired,
    handleEditRole: PropTypes.func.isRequired,
    handleDeleteRole: PropTypes.func.isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadRole: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  };

  render() {
    const {
      list,
      item,
      onReadDepartmentList,
      departmentList,
      onReadRole,
      handleCreateRole,
      onReadRoleList,
      handleEditRole,
      handleDeleteRole,
    } = this.props;

    return (
      <Container>
        <BlockHeader title="Role" />
        <Row>
          <Col lg={12}>
            <Switch>
              <Route
                exact
                path="/role/"
                render={props => (
                  <RoleList
                    {...props}
                    onReadRoleList={onReadRoleList}
                    list={list}
                    handleDeleteRole={handleDeleteRole}
                  />
                )}
              />
              <Route
                path="/role/add"
                render={props => (
                  <RoleForm
                    {...props}
                    onSubmit={handleCreateRole}
                    onReadDepartmentList={onReadDepartmentList}
                    departmentList={departmentList}
                  />
                )}
              />
              <Route
                path="/role/:id"
                render={props => <RoleList {...props} onReadRole={onReadRole} data={item} />}
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
    list: stateProps.role.list,
    departmentList: stateProps.department.list,
    item: stateProps.role.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadRoleList() {
      return dispatch(readRoleList());
    },
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadRole(id) {
      return dispatch(readRole(id));
    },
    handleCreateRole(data) {
      return dispatch(createRole(data));
    },
    handleEditRole(data) {
      return dispatch(createRole(data));
    },
    handleDeleteRole(id) {
      return dispatch(deleteRole(id));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Role);
