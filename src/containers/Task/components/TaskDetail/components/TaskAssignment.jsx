import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TaskAssignment extends PureComponent {
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
        <div className="header">
          <h2>About Clients</h2>
        </div>
        <div className="body text-center">
          <div className="profile-image m-b-15">
            <img src="../assets/images/user.png" className="rounded-circle" alt="" />
          </div>
          <div>
            <h4 className="m-b-0"><strong>Jessica</strong> Doe</h4>
            <span>Washington, d.c.</span>
          </div>
          <div className="m-t-15">
            <button className="btn btn-primary" type="button">Profile</button>
            <button className="btn btn-outline-secondary" type="button">Message</button>
          </div>
        </div>
      </div>
    );
  }
}
