import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TaskTimeLine extends PureComponent {
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
          <div className="timeline-item green">
            <span className="date">Just now</span>
            <h6>iNext - One Page Responsive Template</h6>
            <span>Project Lead: <a href="/" title="Fidel Tonn">Fidel Tonn</a></span>
          </div>
          <div className="timeline-item warning">
            <span className="date">02 Jun 2018</span>
            <h6>Add Team Members</h6>
            <span>By: <a href="/" title="Fidel Tonn">Fidel Tonn</a></span>
            <div className="msg">
              <p>
                web by far While thats mock-ups and this is politics,
                are they really so different? I think the only card she has is the Lorem card.
              </p>
              <ul className="list-unstyled team-info">
                <li>
                  <img
                    src="../assets/images/xs/avatar4.jpg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chris Fox"
                    alt="Avatar"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/xs/avatar4.jpg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chris Fox"
                    alt="Avatar"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/xs/avatar4.jpg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chris Fox"
                    alt="Avatar"
                  />
                </li>
                <li>
                  <img
                    src="../assets/images/xs/avatar4.jpg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chris Fox"
                    alt="Avatar"
                  />
                </li>
              </ul>
              <div className="top_counter">
                <div className="icon"><i className="fa fa-file-word-o" /> </div>
                <div className="content">
                  <p className="mb-1">iNext project documentation.doc</p>
                  <span>Size: 2.3Mb</span>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item warning">
            <span className="date">02 Jun 2018</span>
            <h6>Task Assigned</h6>
            <span>By: <a href="/" title="Fidel Tonn">Fidel Tonn</a></span>
            <div className="msg">
              <p>
                It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              </p>
              <div className="media">
                <img className="media-object rounded width40 mr-3" src="../assets/images/xs/avatar1.jpg" alt="" />
                <div className="media-body">
                  <h6 className="mb-0">Folisise Chosielie</h6>
                  <p className="mb-0">
                    <strong>Detail:</strong> Ipsum is simply dummy text of
                      the printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className="media">
                <img className="media-object rounded width40 mr-3" src="../assets/images/xs/avatar5.jpg" alt="" />
                <div className="media-body">
                  <h6 className="mb-0">Joge Lucky</h6>
                  <p className="mb-0">
                    <strong>Detail:</strong> Ipsum is simply dummy text of the
                      printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item warning">
            <span className="date">02 Jun 2018</span>
            <h6>Add new code on GitHub</h6>
            <span>By: <a href="/" title="Fidel Tonn">Folisise Chosielie</a></span>
            <div className="msg">
              <div className="alert alert-success mb-3" role="alert">Code Update Successfully in GitHub</div>
            </div>
          </div>
          <div className="timeline-item danger">
            <span className="date">04 Jun 2018</span>
            <h6>Project Reports</h6>
            <span>By: <a href="/" title="Fidel Tonn">Fidel Tonn</a></span>
            <div className="msg">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span>Design Bug</span>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow={17}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
                <li className="mb-2">
                  <span>UI UX Design Task</span>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={83}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
                <li className="mb-2">
                  <span>Developer Task</span>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={83}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
                <li className="mb-2">
                  <span>QA (Quality Assurance)</span>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={83}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-item dark">
            <span className="date">05 Jun 2018</span>
            <h6>Project on Goinng</h6>
          </div>
        </div>
      </div>
    );
  }
}
