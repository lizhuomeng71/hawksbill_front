import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import DataProgressBar from '../../../../../shared/components/progressBar/DataProgressBar';

export default class TaskMain extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
  };

  static defaultProps = {
    date: '',
    img: '',
    name: '',
  };

  render() {
    const {
      img, name, date, children,
    } = this.props;
    return (
      <Card>
        <CardBody>
          <h5>iNext - One Page Responsive Template</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <DataProgressBar />
        </CardBody>
      </Card>
    );
  }
}
