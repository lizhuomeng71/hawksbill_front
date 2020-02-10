/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class InputField extends PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func,
      name: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    }).isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  };

  static defaultProps = {
    placeholder: '',
    label: '',
    meta: null,
  };

  render() {
    const {
      input,
      placeholder,
      label,
      meta: { touched, error, warning },
    } = this.props;

    return (
      <div className={'form-group' + (touched && error ? 'has-danger' : '')}>
        <label>
          {label}
        </label>
        <input {...input} placeholder={placeholder} className="form-control" id={input.name} />
        {touched
        && ((error && <span className="from-control-error text-danger">{error}</span>)
        || (warning && <span>{warning}</span>))}
      </div>
    );
  }
}

const renderInputField = (props) => {
  const {
    input, label, placeholder, disabled, className, meta,
  } = props;
  return (
    <InputField
      input={input}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      meta={meta}
    />
  );
};

renderInputField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderInputField.defaultProps = {
  label: '',
  disabled: false,
  className: '',
  placeholder: '',
  meta: null,
};

export default InputField;
