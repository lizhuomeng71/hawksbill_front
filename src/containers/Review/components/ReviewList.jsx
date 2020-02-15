import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Col,
  Row,
  CardBody,
} from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';
import ReviewRow from './ReviewRow';

class ReviewList extends PureComponent {
  static propTypes = {
    reviewList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    item: PropTypes.shape({ name: PropTypes.string }),
    title: PropTypes.string,
    addLink: PropTypes.string,
    handleDeleteReview: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,

  };

  static defaultProps = {
    item: null,
    title: 'Review',
    addLink: 'review/add',
    reviewList: [],
  };

  render() {
    const {
      reviewList,
      handleDeleteReview,
      handleOnClickForAddButton,
      title,
      addLink,
    } = this.props;
    return (
      <Card>
        <ListHeader title={title} handleOnClickForAddButton={handleOnClickForAddButton} />
        <CardBody>
          <ul className="right_chat list-unstyled mb-0">
            {reviewList
              .map((item) => {
                return (
                  <ReviewRow item={item} handleDeleteReview={handleDeleteReview} key={item._id} />
                );
              })}
          </ul>
        </CardBody>
      </Card>
    );
  }
}

export default ReviewList;
