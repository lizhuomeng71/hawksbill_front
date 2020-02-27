import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Container,
} from 'reactstrap';
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
import CheckForm from './components/CheckForm';
import BlockHeader from '../BlockHeader';
import ListHeader from '../../shared/components/ListHeader';
import CheckRow from './components/CheckRow';

class Check extends PureComponent {
  static propTypes = {
    checkList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    currentPageState: PropTypes.string.isRequired,
    handleCreateCheck: PropTypes.func.isRequired,
    handleEditCheck: PropTypes.func.isRequired,
    handleDeleteCheck: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    onReadCheckList: PropTypes.func.isRequired,
    onReadCheck: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadCheckList } = this.props;
    onReadCheckList();
  }

  render() {
    const {
      checkList,
      item,
      task,
      currentPageState,
      onReadCheck,
      onReadCheckList,
      handleCreateCheck,
      handleEditCheck,
      handleDeleteCheck,
      handleOnClickForAddButton,
    } = this.props;

    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <Button
            className="btn btn-info"
            type="button"
            onClick={handleOnClickForAddButton}
          >
            Add New
          </Button>
        );
        break;
      case 'add':
        components = (
          <CheckForm
            onSubmit={handleCreateCheck}
            checkList={checkList}
            handleDeleteCheck={handleDeleteCheck}
            task={task}
            title="Check List"
          />
        );
        break;
      default:
    }
    return (
      <Card>
        <ListHeader title="Check List" />
        <CardBody>
          <ul className="list-unstyled">
            {checkList
              .map((checkItem) => {
                return (
                  <CheckRow item={checkItem} handleDeleteCheck={handleDeleteCheck} key={checkItem._id} />
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
    task: stateProps.task.item,
    checkList: stateProps.check.list,
    item: stateProps.check.item,
    currentPageState: stateProps.check.currentPageState,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadCheckList() {
      return dispatch(readCheckList());
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
      console.log('"Clicked"');
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
