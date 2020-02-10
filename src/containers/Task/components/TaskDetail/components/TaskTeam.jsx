import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

export default class TaskTeam extends PureComponent {
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
        <div className="header">
          <h2>Assigned Team</h2>
        </div>
        <CardBody>
          <div className="w_user">
            <img className="rounded-circle" src="../assets/images/sm/avatar4.jpg" alt="" />
            <div className="wid-u-info">
              <h5>Fidel Tonn</h5>
              <span>info@thememakker.com</span>
              <p className="text-muted m-b-0">Project Lead</p>
            </div>
            <hr />
          </div>
          <ul className="right_chat list-unstyled mb-0">
            <li className="online">
              <a href="/">
                <div className="media">
                  <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Chris Fox</span>
                    <span className="message">Sales Lead</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <a href="/">
                <div className="media">
                  <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Joge Lucky</span>
                    <span className="message">Java Developer</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a href="/">
                <div className="media">
                  <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Isabella</span>
                    <span className="message">UI UX Designer</span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a href="/">
                <div className="media mb-0">
                  <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Folisise Chosielie</span>
                    <span className="message">FrontEnd Developer</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}
