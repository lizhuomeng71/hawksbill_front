import React, { PureComponent } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createJwt,
} from '../../redux/actions/authActions';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

class Auth extends PureComponent {
  static propTypes = {
    handleCreateJwt: PropTypes.func.isRequired,
  };

  componentDidMount() {
  }

  render() {
    const {
      handleCreateJwt,
    } = this.props;

    return (
      <div id="wrapper">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="top">
                <img
                  src="../assets/images/logo-white.svg"
                  alt="Lucid"
                />
              </div>

              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <SignInForm
                      {...props}
                      onSubmit={handleCreateJwt}
                    />
                  )}
                />
                <Route
                  exact
                  path="/sign-up"
                  render={props => (
                    <SignUpForm
                      {...props}
                      onSubmit={handleCreateJwt}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(stateProps, ownProps) {
  return {
    item: stateProps.task.item,
  };
}

function mapDispatchToProps(dispatch, dispatchProps) {
  return {
    handleCreateJwt(data) {
      return dispatch(createJwt(data));
    },

  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
  };
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Auth);
