import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';
import TaskRow from './TaskRow';

class TaskList extends PureComponent {
  static propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    item: PropTypes.shape({ name: PropTypes.string }),
    title: PropTypes.string,
    addLink: PropTypes.string.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
  };

  static defaultProps = {
    item: null,
    title: '',
    taskList: [],
  };

  render() {
    const {
      taskList,
      item,
      handleDeleteTask,
      title,
      addLink,
    } = this.props;
    return (
      <Row>
        <Col lg={12}>
          <Card>
            <ListHeader title={title} addNewLink={addLink} />
            <div className="body">
              <div className="table-responsive">
                <table className="table table-hover js-basic-example dataTable table-custom table-striped m-b-0 c_list">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Deadline</th>
                      <th>Prograss</th>
                      <th>Lead</th>
                      <th>Team</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList
                      .map((eachItem) => {
                        return (
                          <TaskRow item={eachItem} handleDeleteTask={handleDeleteTask} key={eachItem.id} />
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TaskList;
