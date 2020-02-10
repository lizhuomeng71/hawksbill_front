import React, { PureComponent } from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Loading from '../../../../shared/components/LoadingPage';
import DepartmentMain from './components/DepartmentMain';
import DepartmentBudget from './components/DepartmentBudget';
import DepartmentTeam from './components/DepartmentTeam';
import DepartmentAssignment from './components/DepartmentPerson';
import DepartmentActivity from './components/DepartmentActivity';
import DepartmentTimeLine from './components/DepartmentTimeLine';
import DepartmentList from '../DepartmentList';

export default class DepartmentDetail extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }).isRequired,
    taskList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
    onReadDepartment: PropTypes.func.isRequired,
  };

  constructor(props) {
    super();
    const { item } = props;
    this.state = {
      item,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item !== prevState.item) {
      return { item: nextProps.item };
    }
    return null;
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const { onReadDepartment } = this.props;
    onReadDepartment(params.id);
  }

  render() {
    const {
      item,
    } = this.state;
    const { taskList } = this.props;

    return (
      <Row>
        <Col lg="4" md="12">
          <DepartmentTeam item={item} />
          <DepartmentBudget />
          <DepartmentAssignment item={item} />
        </Col>
        <Col lg="8" md="12">
          <DepartmentActivity />
          <DepartmentTimeLine />
        </Col>
      </Row>
    );
  }
}
