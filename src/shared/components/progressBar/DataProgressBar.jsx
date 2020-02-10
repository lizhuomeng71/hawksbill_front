import React from 'react';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

const DataProgressBar = () => (
  <div className="progress-container progress-info m-b-25">
    <span className="progress-badge">Project Status</span>
    <Progress value={70}>70%</Progress>
  </div>
);

DataProgressBar.propTypes = {
};

export default DataProgressBar;
