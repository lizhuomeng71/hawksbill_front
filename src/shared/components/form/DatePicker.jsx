/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

class DatePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
    label: '',
  };

  constructor() {
    super();
    this.state = {
      startDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { onChange } = this.props;
    this.setState({
      startDate: date,
    });
    onChange(date);
  }

  render() {
    const { startDate } = this.state;
    const { placeholder, name, label } = this.props;
    return (
      <div className="form-group">
        <label>
          {label}
        </label>
        <DatePicker
          placeholderText={placeholder}
          className="form-control"
          selected={startDate}
          onChange={this.handleChange}
          name={name}
          dateFormat="yyyy/MM/d"
          dropDownMode="select"
        />
      </div>
    );
  }
}

const renderDatePickerField = (props) => {
  const { input, placeholder, label } = props;
  return <DatePickerField {...input} placeholder={placeholder} label={label} />;
};

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

renderDatePickerField.defaultProps = {
  placeholder: '',
  label: '',
};

export default renderDatePickerField;
