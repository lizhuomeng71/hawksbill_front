/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SelectField extends PureComponent {
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
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
    }),
  };

  static defaultProps = {
    options: [{}],
    placeholder: '',
    meta: null,
  };

  render() {
    const {
      input,
      options,
      placeholder,
      meta: { touched, error, warning },
    } = this.props;

    return (
      <div className={'form-group' + (touched && error ? 'has-danger' : '')}>
        <label>
          {placeholder}
        </label>
        <select {...input} className="form-control">
          <option>{placeholder}</option>
          {options.map(
            (option) => {
              return (<option value={option._key} key={option._key}>{option.name}</option>);
            },
          )}
        </select>
        {touched
        && ((error && <span className="from-control-error text-danger">{error}</span>)
        || (warning && <span>{warning}</span>))}
      </div>
    );
  }
}


const renderSelectField = (props) => {
  const {
    input, label, placeholder, disabled, className, meta, options,
  } = props;
  return (
    <SelectField
      input={input}
      label={label}
      options={options}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      meta={meta}
    />
  );
};

renderSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderSelectField.defaultProps = {
  label: '',
  options: [{}],
  disabled: false,
  className: '',
  placeholder: '',
  meta: null,
};

export default renderSelectField;
