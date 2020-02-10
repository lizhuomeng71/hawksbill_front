import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TaskActivity extends PureComponent {
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
          <h2>Project Activity</h2>
        </div>
        <div className="body">
          <div className="form-group">
            <textarea
              rows={2}
              className="form-control no-resize"
              placeholder="Please type what you want..."
              defaultValue=""
            />
          </div>
          <div className="post-toolbar-b">
            <button className="btn btn-warning" type="button"><i className="icon-paper-clip text-light" /></button>
            <button className="btn btn-warning" type="button"><i className="icon-camera text-light" /></button>
            <button className="btn btn-primary" type="button">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
