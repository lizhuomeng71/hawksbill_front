import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  readEquipmentList,
  readEquipment,
  createEquipment,
  deleteEquipment,
  changeEquipmentPageState,
} from '../../redux/actions/equipmentActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import EquipmentList from './components/EquipmentList';
import EquipmentForm from './components/EquipmentForm';
import BlockHeader from '../BlockHeader';


class Equipment extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    handleCreateEquipment: PropTypes.func.isRequired,
    handleEditEquipment: PropTypes.func.isRequired,
    handleDeleteEquipment: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    currentPageState: PropTypes.string.isRequired,
    onReadEquipmentList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadEquipment: PropTypes.func.isRequired,
  };

  render() {
    const {
      list,
      item,
      onReadEquipment,
      handleCreateEquipment,
      onReadEquipmentList,
      onReadDepartmentList,
      departmentList,
      onReadRoleList,
      roleList,
      handleEditEquipment,
      handleDeleteEquipment,
      handleOnClickForAddButton,
      currentPageState,
    } = this.props;

    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <EquipmentList
            onReadEquipmentList={onReadEquipmentList}
            list={list}
            handleOnClickForAddButton={handleOnClickForAddButton}
            handleDeleteEquipment={handleDeleteEquipment}
          />
        );
        break;
      case 'add':
        components = (
          <EquipmentForm
            onReadDepartmentList={onReadDepartmentList}
            departmentList={departmentList}
            onReadRoleList={onReadRoleList}
            roleList={roleList}
            onSubmit={handleCreateEquipment}
            handleDeleteEquipment={handleDeleteEquipment}
          />
        );
        break;
      default:
    }

    return (
      <Container>
        <BlockHeader title="Equipment" />
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
    list: stateProps.equipment.list,
    departmentList: stateProps.department.list,
    currentPageState: stateProps.equipment.currentPageState,
    roleList: stateProps.role.list,
    item: stateProps.equipment.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadEquipmentList() {
      return dispatch(readEquipmentList());
    },
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadRoleList(departmentId) {
      return dispatch(readRoleList(departmentId));
    },
    onReadEquipment(id) {
      return dispatch(readEquipment(id));
    },
    handleCreateEquipment(data) {
      return dispatch(createEquipment(data));
    },
    handleEditEquipment(data) {
      return dispatch(createEquipment(data));
    },
    handleDeleteEquipment(id) {
      return dispatch(deleteEquipment(id));
    },
    handleOnClickForAddButton() {
      return dispatch(changeEquipmentPageState('add'));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Equipment);
