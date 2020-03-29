import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import TaskMaterialRow from './components/TaskMaterialRow';
import TaskMaterialForm from './components/TaskMaterialForm';
import {
  changeTaskMaterialMode,
} from '../../../../../../redux/actions/uiActions';
import {
  createTaskMaterial,
  deleteTaskMaterial,
} from '../../../../../../redux/actions/taskActions';
import {
  readMaterialList,
} from '../../../../../../redux/actions/materialActions';


class TaskMaterial extends PureComponent {
  static propTypes = {
    handleClickTaskMaterialModeAdd: PropTypes.func.isRequired,
    handleCreateTaskMaterial: PropTypes.func.isRequired,
    handleDeleteTaskMaterial: PropTypes.func.isRequired,
    onReadMaterialList: PropTypes.func.isRequired,
    taskMaterialMode: PropTypes.string.isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    materialList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  };

  static defaultProps = {
    materialList: [],
  };

  componentDidMount() {
    const { task, onReadMaterialList } = this.props;
    onReadMaterialList();
  }

  render() {
    const {
      task,
      materialList,
      taskMaterialMode,
      handleClickTaskMaterialModeAdd,
      handleCreateTaskMaterial,
      handleDeleteTaskMaterial,
    } = this.props;

    let components;
    switch (taskMaterialMode) {
      case 'list':
        components = (
          <Button
            className="btn btn-info"
            type="button"
            onClick={handleClickTaskMaterialModeAdd}
          >
            Add New
          </Button>
        );
        break;
      case 'add':
        components = (
          <TaskMaterialForm
            onSubmit={handleCreateTaskMaterial}
            task={task}
            materialList={materialList}
            title="Material List"
          />
        );
        break;
      default:
    }

    return (
      <Card>
        <div className="header">
          <h2>Assigned Team</h2>
        </div>
        <CardBody>
          <ul className="right_chat list-unstyled mb-0">
            {task.materials && task.materials
              .map((item) => {
                return (
                  <TaskMaterialRow
                    item={item}
                    task={task}
                    key={item._id}
                    handleDeleteTaskMaterial={handleDeleteTaskMaterial}
                  />
                );
              })}
          </ul>
          {components}
        </CardBody>
      </Card>
    );
  }
}


function mapStateToProps(stateProps, ownProps) {
  return {
    taskMaterialMode: stateProps.ui.taskMaterialMode,
    task: stateProps.task.item,
    materialList: stateProps.material.list,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadMaterialList() {
      return dispatch(readMaterialList());
    },
    handleClickTaskMaterialModeAdd() {
      return dispatch(changeTaskMaterialMode('add'));
    },
    handleCreateTaskMaterial(data) {
      return dispatch(createTaskMaterial(data));
    },
    handleDeleteTaskMaterial(data) {
      return dispatch(deleteTaskMaterial(data));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TaskMaterial);
