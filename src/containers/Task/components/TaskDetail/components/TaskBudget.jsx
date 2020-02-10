import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TaskBudget extends PureComponent {
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
      <div className="card">
        <div className="body">
          <ul className=" list-unstyled basic-list">
            <li>Cost:<span className="badge badge-primary">$16,785</span></li>
            <li>Created:<span className="badge-purple badge">14 Mar, 2018</span></li>
            <li>Deadline:<span className="badge-purple badge">22 Aug, 2018</span></li>
            <li>Priority:<span className="badge-danger badge">Highest priority</span></li>
            <li>Status<span className="badge-info badge">Working</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
