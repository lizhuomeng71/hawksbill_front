/* eslint-disable  */
import React, { PureComponent } from 'react';
import {
  Card, CardBody,CardHeader, Col, Row, Button, ButtonToolbar,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import renderInputField from '../../../shared/components/form/InputField';
import renderSelectField from '../../../shared/components/form/SelectField';
import renderDatePickerField from '../../../shared/components/form/DatePicker';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class ReviewForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  componentDidMount() {

  }



  render() {
    const {
      handleSubmit,
      reset,
      submitting,
      match: { params },
    } = this.props;
    const priorities = [{'_key': '1', 'name': 'High'}, {'_key': '2', 'name': 'Medium'}, {'_key': '3', 'name': 'Low'}];
    const prioritiesOptions = [];
    for ( var i=0,j=priorities.length;i<j;i++ ) {
      prioritiesOptions.push( { value: priorities[i]._key, label: priorities[i].name } );
    }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <Row>
          <Col lg="12">
            <Field
              label=""
              name="name"
              component={renderInputField}
              placeholder="Review Name *"
            />
          </Col>

        </Row>
        <Row>
          <Col lg="12">
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                Submit
              </Button>
              &nbsp;
              <Button color="secondary" type="button" onClick={reset}>
                    Cancel
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      parent_task: ownProps.task._id
    }
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ReviewCreate',
  enableReinitialize : true // this is needed!!
})(ReviewForm)))
