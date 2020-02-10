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

export default class TaskDetail extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    taskList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
    onReadTask: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const { onReadTask } = this.props;
    onReadTask(params.id);
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;
    if (params.id !== prevProps.match.params.id) {
      const { onReadTask } = this.props;
      onReadTask(params.id);
    }
  }

  render() {
    const {
      item,
    } = this.props;
    const { taskList } = this.props;
    return (
      <Row>
        <Col lg="4" md="12">
          <TaskMain item={item} />
          <TaskBudget />
          <TaskTeam />
          <TaskAssignment />
        </Col>
        <Col lg="8" md="12">
          <TaskActivity />
          <TaskTimeLine />
        </Col>
        <Col lg="12">
          <TaskList
            taskList={item.subTasks}
            title="Sub Task List"
            addLink="/task/add"
          />
        </Col>
      </Row>
    );
  }
}
