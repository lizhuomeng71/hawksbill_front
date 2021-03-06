import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  readPersonList,
  readPerson,
  createPerson,
  deletePerson,
  changePersonPageState,
} from '../../redux/actions/personActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import BlockHeader from '../BlockHeader';


class Person extends PureComponent {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    handleCreatePerson: PropTypes.func.isRequired,
    handleEditPerson: PropTypes.func.isRequired,
    handleDeletePerson: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    currentPageState: PropTypes.string.isRequired,
    onReadPersonList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadPerson: PropTypes.func.isRequired,
  };

  render() {
    const {
      list,
      item,
      onReadPerson,
      handleCreatePerson,
      onReadPersonList,
      onReadDepartmentList,
      departmentList,
      onReadRoleList,
      roleList,
      handleEditPerson,
      handleDeletePerson,
      handleOnClickForAddButton,
      currentPageState,
    } = this.props;

    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <PersonList
            onReadPersonList={onReadPersonList}
            list={list}
            handleOnClickForAddButton={handleOnClickForAddButton}
            handleDeletePerson={handleDeletePerson}
          />
        );
        break;
      case 'add':
        components = (
          <PersonForm
            onReadDepartmentList={onReadDepartmentList}
            departmentList={departmentList}
            onReadRoleList={onReadRoleList}
            roleList={roleList}
            onSubmit={handleCreatePerson}
            handleDeletePerson={handleDeletePerson}
          />
        );
        break;
      default:
    }

    return (
      <Container>
        <BlockHeader title="Person" />
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
    list: stateProps.person.list,
    departmentList: stateProps.department.list,
    currentPageState: stateProps.person.currentPageState,
    roleList: stateProps.role.list,
    item: stateProps.person.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadPersonList() {
      return dispatch(readPersonList());
    },
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadRoleList(departmentId) {
      return dispatch(readRoleList(departmentId));
    },
    onReadPerson(id) {
      return dispatch(readPerson(id));
    },
    handleCreatePerson(data) {
      return dispatch(createPerson(data));
    },
    handleEditPerson(data) {
      return dispatch(createPerson(data));
    },
    handleDeletePerson(id) {
      return dispatch(deletePerson(id));
    },
    handleOnClickForAddButton() {
      return dispatch(changePersonPageState('add'));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Person);
