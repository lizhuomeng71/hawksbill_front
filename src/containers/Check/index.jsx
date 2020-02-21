import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  readCheckList,
  readCheck,
  createCheck,
  deleteCheck,
  changeCheckPageState,
} from '../../redux/actions/checkActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readPersonList,
} from '../../redux/actions/personActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import CheckList from './components/CheckList';
import CheckForm from './components/CheckForm';
import CheckDetail from './components/CheckDetail';
import BlockHeader from '../BlockHeader';

class Check extends PureComponent {
  static propTypes = {
    checkList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    personList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    currentPageState: PropTypes.string.isRequired,
    handleCreateCheck: PropTypes.func.isRequired,
    handleEditCheck: PropTypes.func.isRequired,
    handleDeleteCheck: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    onReadCheckList: PropTypes.func.isRequired,
    onReadPersonList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadCheck: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadCheckList } = this.props;
    onReadCheckList();
  }

  render() {
    const {
      checkList,
      personList,
      departmentList,
      roleList,
      item,
      task,
      currentPageState,
      onReadCheck,
      onReadCheckList,
      onReadPersonList,
      onReadDepartmentList,
      onReadRoleList,
      handleCreateCheck,
      handleEditCheck,
      handleDeleteCheck,
      handleOnClickForAddButton,
    } = this.props;
    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <CheckList
            onReadCheckList={onReadCheckList}
            checkList={checkList}
            handleDeleteCheck={handleDeleteCheck}
            handleOnClickForAddButton={handleOnClickForAddButton}
            title="Check List"
          />
        );
        break;
      case 'add':
        components = (
          <CheckForm
            onSubmit={handleCreateCheck}
            onReadCheckList={onReadCheckList}
            onReadPersonList={onReadPersonList}
            onReadDepartmentList={onReadDepartmentList}
            checkList={checkList}
            personList={personList}
            handleDeleteCheck={handleDeleteCheck}
            task={task}
            title="Check List"
          />
        );
        break;
      default:
    }
    return components;
  }
}

function mapStateToProps(stateProps, ownProps) {
  return {
    task: stateProps.task.item,
    checkList: stateProps.check.list,
    item: stateProps.check.item,
    currentPageState: stateProps.check.currentPageState,
    personList: stateProps.person.list,
    departmentList: stateProps.department.list,
    roleList: stateProps.role.list,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadCheckList() {
      return dispatch(readCheckList());
    },
    onReadPersonList() {
      return dispatch(readPersonList());
    },
    onReadDepartmentList() {
      return dispatch(readDepartmentList());
    },
    onReadRoleList(id) {
      return dispatch(readRoleList(id));
    },
    onReadCheck(id) {
      return dispatch(readCheck(id));
    },
    handleCreateCheck(data) {
      return dispatch(createCheck(data));
    },
    handleEditCheck(data) {
      return dispatch(createCheck(data));
    },
    handleDeleteCheck(id) {
      return dispatch(deleteCheck(id));
    },
    handleOnClickForAddButton() {
      return dispatch(changeCheckPageState('add'));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Check);
