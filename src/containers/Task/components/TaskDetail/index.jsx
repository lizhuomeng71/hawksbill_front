import React, { PureComponent } from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import TaskMain from './components/TaskMain';
import TaskBudget from './components/TaskBudget';
import TaskTeam from './components/TaskTeam';
import TaskAssignment from './components/TaskAssignment';
import TaskActivity from './components/TaskActivity';
import TaskTimeLine from './components/TaskTimeLine';
import TaskList from '../TaskList';
import ReviewContainer from '../../../Review';
import CheckContainer from '../../../Check';
import EquipmentContainer from '../../../Equipment';
import MaterialContainer from '../../../Material';

export default class TaskDetail extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    subtaskList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
    onReadTask: PropTypes.func.isRequired,
    onReadTaskSubTaskList: PropTypes.func.isRequired,
    onReadReviewList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const { onReadTask, onReadTaskSubTaskList, onReadReviewList } = this.props;
    onReadTask(params.id);
    onReadTaskSubTaskList(params.id);
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;
    if (params.id !== prevProps.match.params.id) {
      const { onReadTask, onReadTaskSubTaskList, onReadReviewList } = this.props;
      onReadTask(params.id);
      onReadTaskSubTaskList(params.id);
      onReadReviewList(params.id);
    }
  }

  render() {
    const {
      item,
      subtaskList,
    } = this.props;
    console.log(subtaskList);
    return (
      <Row>
        <Col lg="4" md="12">
          <TaskActivity />
          <TaskBudget />
          <TaskTeam />
          <ReviewContainer />
          <TaskAssignment />
          <EquipmentContainer />
          <MaterialContainer />
        </Col>
        <Col lg="8" md="12">
          <TaskMain item={item} />
          <CheckContainer />
          <TaskTimeLine />
        </Col>
        <Col lg="12">
          <TaskList
            taskList={subtaskList}
            title="Sub Task List"
            addLink="/task/add"
          />
        </Col>
      </Row>
    );
  }
}
