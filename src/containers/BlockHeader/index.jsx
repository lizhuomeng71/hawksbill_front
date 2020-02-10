import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Breadcrumb from './components/Breadcrumb';
import HeaderChart from './components/HeaderChart';
import Title from './components/Title';

class BlockHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className="block-header">
        <Row>
          <Col lg={6} md={8} sm={12}>
            <Title title={title} />
            <Breadcrumb />
          </Col>
          <HeaderChart />
        </Row>
      </div>
    );
  }
}

export default BlockHeader;
