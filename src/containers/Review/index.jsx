import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  readReviewList,
  readReview,
  createReview,
  deleteReview,
  changeReviewPageState,
} from '../../redux/actions/reviewActions';
import {
  readDepartmentList,
} from '../../redux/actions/departmentActions';
import {
  readPersonList,
} from '../../redux/actions/personActions';
import {
  readRoleList,
} from '../../redux/actions/roleActions';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import ReviewDetail from './components/ReviewDetail';
import BlockHeader from '../BlockHeader';

class Review extends PureComponent {
  static propTypes = {
    reviewList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    personList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    currentPageState: PropTypes.string.isRequired,
    handleCreateReview: PropTypes.func.isRequired,
    handleEditReview: PropTypes.func.isRequired,
    handleDeleteReview: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,
    onReadReviewList: PropTypes.func.isRequired,
    onReadPersonList: PropTypes.func.isRequired,
    onReadDepartmentList: PropTypes.func.isRequired,
    onReadRoleList: PropTypes.func.isRequired,
    onReadReview: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onReadReviewList } = this.props;
    onReadReviewList();
  }

  render() {
    const {
      reviewList,
      personList,
      departmentList,
      roleList,
      item,
      task,
      currentPageState,
      onReadReview,
      onReadReviewList,
      onReadPersonList,
      onReadDepartmentList,
      onReadRoleList,
      handleCreateReview,
      handleEditReview,
      handleDeleteReview,
      handleOnClickForAddButton,
    } = this.props;
    let components;
    switch (currentPageState) {
      case 'list':
        components = (
          <ReviewList
            onReadReviewList={onReadReviewList}
            reviewList={reviewList}
            handleDeleteReview={handleDeleteReview}
            handleOnClickForAddButton={handleOnClickForAddButton}
            title="Review List"
          />
        );
        break;
      case 'add':
        components = (
          <ReviewForm
            onSubmit={handleCreateReview}
            onReadReviewList={onReadReviewList}
            onReadPersonList={onReadPersonList}
            onReadDepartmentList={onReadDepartmentList}
            reviewList={reviewList}
            personList={personList}
            handleDeleteReview={handleDeleteReview}
            task={task}
            title="Review List"
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
    reviewList: stateProps.review.list,
    item: stateProps.review.item,
    currentPageState: stateProps.review.currentPageState,
    personList: stateProps.person.list,
    departmentList: stateProps.department.list,
    roleList: stateProps.role.list,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    onReadReviewList() {
      return dispatch(readReviewList());
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
    onReadReview(id) {
      return dispatch(readReview(id));
    },
    handleCreateReview(data) {
      return dispatch(createReview(data));
    },
    handleEditReview(data) {
      return dispatch(createReview(data));
    },
    handleDeleteReview(id) {
      return dispatch(deleteReview(id));
    },
    handleOnClickForAddButton() {
      return dispatch(changeReviewPageState('add'));
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Review);
