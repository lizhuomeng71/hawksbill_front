import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  readMaterialList,
  readMaterial,
  createMaterial,
  deleteMaterial,
  changeMaterialPageState,
} from '../../redux/actions/materialActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import MaterialList from './components/MaterialList';
import MaterialForm from './components/MaterialForm';
import BlockHeader from '../BlockHeader';


class Material extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    handleCreateMaterial: PropTypes.func.isRequired,
    handleEditMaterial: PropTypes.func.isRequired,
    handleDeleteMaterial: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    currentPageState: PropTypes.string.isRequired,
    onReadMaterialList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadMaterial: PropTypes.func.isRequired,
  };

  render() {
    const {
      list,
      item,
      onReadMaterial,
      handleCreateMaterial,
      onReadMaterialList,
      onReadDepartmentList,
      departmentList,
      onReadRoleList,
      roleList,
      handleEditMaterial,
      handleDeleteMaterial,
      handleOnClickForAddButton,
      currentPageState,
    } = this.props;

    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <MaterialList
            onReadMaterialList={onReadMaterialList}
            list={list}
            handleOnClickForAddButton={handleOnClickForAddButton}
            handleDeleteMaterial={handleDeleteMaterial}
          />
        );
        break;
      case 'add':
        components = (
          <MaterialForm
            onReadDepartmentList={onReadDepartmentList}
            departmentList={departmentList}
            onReadRoleList={onReadRoleList}
            roleList={roleList}
            onSubmit={handleCreateMaterial}
            handleDeleteMaterial={handleDeleteMaterial}
          />
        );
        break;
      default:
    }

    return (
      <Container>
        <BlockHeader title="Material" />
        <Row>
          <Col lg={12}>
            {components}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(stateProps, ownProps) {
  return {
    list: stateProps.material.list,
    departmentList: stateProps.department.list,
    currentPageState: stateProps.material.currentPageState,
    roleList: stateProps.role.list,
    item: stateProps.material.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadMaterialList() {
      return dispatch(readMaterialList());
    },
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadRoleList(departmentId) {
      return dispatch(readRoleList(departmentId));
    },
    onReadMaterial(id) {
      return dispatch(readMaterial(id));
    },
    handleCreateMaterial(data) {
      return dispatch(createMaterial(data));
    },
    handleEditMaterial(data) {
      return dispatch(createMaterial(data));
    },
    handleDeleteMaterial(id) {
      return dispatch(deleteMaterial(id));
    },
    handleOnClickForAddButton() {
      return dispatch(changeMaterialPageState('add'));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Material);
