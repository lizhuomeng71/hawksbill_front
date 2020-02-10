import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  readTaskList,
  readTask,
  createTask,
  deleteTask,
} from '../../redux/actions/taskActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readPersonList,
} from '../../redux/actions/personActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import BlockHeader from '../BlockHeader';

class Task extends PureComponent {
  static propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    personList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    handleCreateTask: PropTypes.func.isRequired,
    handleEditTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    onReadTaskList: PropTypes.func.isRequired,
    onReadPersonList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadTask: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadTaskList } = this.props;
    onReadTaskList();
  }

  render() {
    const {
      taskList,
      personList,
      departmentList,
      roleList,
      item,
      onReadTask,
      onReadTaskList,
      onReadPersonList,
      onReadDepartmentList,
      onReadRoleList,
      handleCreateTask,
      handleEditTask,
      handleDeleteTask,
    } = this.props;

    return (
      <Container>
        <BlockHeader title="Task" />
        <Switch>
          <Route
            exact
            path="/task/"
            render={props => (
              <TaskList
                {...props}
                onReadTaskList={onReadTaskList}
                onReadPersonList={onReadPersonList}
                taskList={taskList}
                personList={personList}
                handleDeleteTask={handleDeleteTask}
                addLink="/task/add"
                title="Task List"
              />
            )}
          />
          <Route
            path="/task/add"
            render={props => (
              <TaskForm
                {...props}
                onSubmit={handleCreateTask}
                onReadPersonList={onReadPersonList}
                personList={personList}
                onReadDepartmentList={onReadDepartmentList}
                departmentList={departmentList}
                onReadRoleList={onReadRoleList}
                roleList={roleList}
              />
            )}
          />
          <Route
            exact
            path="/task/:id"
            render={props => <TaskDetail {...props} onReadTask={onReadTask} item={item} taskList={taskList} />}
          />
        </Switch>
      </Container>
    );
  }
}

function mapStateToProps(stateProps, ownProps) {
  return {
    taskList: stateProps.task.list,
    item: stateProps.task.item,
    personList: stateProps.person.list,
    departmentList: stateProps.department.list,
    roleList: stateProps.role.list,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadTaskList() {
      return dispatch(readTaskList());
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
    onReadTask(id) {
      return dispatch(readTask(id));
    },
    handleCreateTask(data) {
      return dispatch(createTask(data));
    },
    handleEditTask(data) {
      return dispatch(createTask(data));
    },
    handleDeleteTask(id) {
      return dispatch(deleteTask(id));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Task);
