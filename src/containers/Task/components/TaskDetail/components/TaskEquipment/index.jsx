import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import TaskEquipmentRow from './components/TaskEquipmentRow';
import TaskEquipmentForm from './components/TaskEquipmentForm';
import {
  changeTaskEquipmentMode,
} from '../../../../../../redux/actions/uiActions';
import {
  createTaskEquipment,
  deleteTaskEquipment,
} from '../../../../../../redux/actions/taskActions';
import {
  readEquipmentList,
} from '../../../../../../redux/actions/equipmentActions';

class TaskEquipment extends PureComponent {
  static propTypes = {
    handleClickTaskEquipmentModeAdd: PropTypes.func.isRequired,
    handleCreateTaskEquipment: PropTypes.func.isRequired,
    handleDeleteTaskEquipment: PropTypes.func.isRequired,
    onReadEquipmentList: PropTypes.func.isRequired,
    taskEquipmentMode: PropTypes.string.isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    equipmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  };

  static defaultProps = {
    equipmentList: [],
  };

  componentDidMount() {
    const { task, onReadEquipmentList } = this.props;
    onReadEquipmentList();
  }

  render() {
    const {
      task,
      equipmentList,
      taskEquipmentMode,
      handleClickTaskEquipmentModeAdd,
      handleCreateTaskEquipment,
      handleDeleteTaskEquipment,
    } = this.props;

    let components;
    switch (taskEquipmentMode) {
      case 'list':
        components = (
          <Button
            className="btn btn-info"
            type="button"
            onClick={handleClickTaskEquipmentModeAdd}
          >
            Add New
          </Button>
        );
        break;
      case 'add':
        components = (
          <TaskEquipmentForm
            onSubmit={handleCreateTaskEquipment}
            task={task}
            equipmentList={equipmentList}
            title="Equipment List"
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
            {task.equipments && task.equipments
              .map((item) => {
                return (
                  <TaskEquipmentRow
                    item={item}
                    task={task}
                    key={item._id}
                    handleDeleteTaskEquipment={handleDeleteTaskEquipment}
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
    taskEquipmentMode: stateProps.ui.taskEquipmentMode,
    task: stateProps.task.item,
    equipmentList: stateProps.equipment.list,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadEquipmentList() {
      return dispatch(readEquipmentList());
    },
    handleClickTaskEquipmentModeAdd() {
      return dispatch(changeTaskEquipmentMode('add'));
    },
    handleCreateTaskEquipment(data) {
      return dispatch(createTaskEquipment(data));
    },
    handleDeleteTaskEquipment(taskId, equipmentId) {
      return dispatch(deleteTaskEquipment(taskId, equipmentId));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TaskEquipment);
