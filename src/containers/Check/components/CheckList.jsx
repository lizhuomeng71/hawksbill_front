import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Col,
  Row,
  CardBody,
} from 'reactstrap';
import ListHeader from '../../../shared/components/ListHeader';
import CheckRow from './CheckRow';

class CheckList extends PureComponent {
  static propTypes = {
    checkList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    item: PropTypes.shape({ name: PropTypes.string }),
    title: PropTypes.string,
    addLink: PropTypes.string,
    handleDeleteCheck: PropTypes.func.isRequired,
    handleOnClickForAddButton: PropTypes.func.isRequired,

  };

  static defaultProps = {
    item: null,
    title: 'Check',
    addLink: 'check/add',
    checkList: [],
  };

  render() {
    const {
      checkList,
      handleDeleteCheck,
      handleOnClickForAddButton,
      title,
      addLink,
    } = this.props;
    return (
      <Card>
        <ListHeader title={title} handleOnClickForAddButton={handleOnClickForAddButton} />
        <CardBody>
          <ul className="list-unstyled">
            {checkList
              .map((item) => {
                return (
                  <CheckRow item={item} handleDeleteCheck={handleDeleteCheck} key={item._id} />
                );
              })}
          </ul>
        </CardBody>
      </Card>
    );
  }
}

export default CheckList;
