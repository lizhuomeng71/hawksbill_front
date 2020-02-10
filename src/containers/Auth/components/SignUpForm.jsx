import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { handleSubmit } = this.props;
    const { showPassword } = this.state;
    return (
      <form
        className="form-auth-small"
        action="index.html"
      >
        <div className="form-group">
          <label
            htmlFor="signin-email"
            className="control-label sr-only"
          >
          Email
          </label>
          <input
            type="email"
            className="form-control"
            id="signin-email"
            defaultValue="user@domain.com"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="signin-password"
            className="control-label sr-only"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signin-password"
            defaultValue="thisisthepassword"
            placeholder="Password"
          />
        </div>

        <div className="form-group clearfix">
          <label
            htmlFor="remember-me"
            className="fancy-checkbox element-left"
          >
            <input
              type="checkbox"
              id="remember-me"
            />
            <span>
              Remember me
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
        >
          LOGIN
        </button>

        <div className="bottom">
          <span className="helper-text m-b-10">
            <i className="fa fa-lock" />
            <a href="page-forgot-password.html">
              Forgot password?
            </a>
          </span>
          <span>
            Don&apos;t have an account? <a href="page-register.html">Register</a>
          </span>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
