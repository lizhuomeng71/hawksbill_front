import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HeaderChart extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <div className="col-lg-6 col-md-4 col-sm-12 text-right">
        <div className="bh_chart hidden-xs">
          <div className="float-left m-r-15">
            <small>Visitors</small>
            <h6 className="mb-0 mt-1">
              <i className="icon-user" /> 1,784
            </h6>
          </div>
          <span className="bh_visitors float-right">2,5,1,8,3,6,7,5</span>
        </div>
        {title}
        <div className="bh_chart hidden-sm">
          <div className="float-left m-r-15">
            <small>Visits</small>
            <h6 className="mb-0 mt-1">
              <i className="icon-globe" /> 325
            </h6>
          </div>
          <span className="bh_visits float-right">10,8,9,3,5,8,5</span>
        </div>
        <div className="bh_chart hidden-sm">
          <div className="float-left m-r-15">
            <small>Chats</small>
            <h6 className="mb-0 mt-1">
              <i className="icon-bubbles" /> 13
            </h6>
          </div>
          <span className="bh_chats float-right">1,8,5,6,2,4,3,2</span>
        </div>
      </div>
    );
  }
}

export default HeaderChart;
