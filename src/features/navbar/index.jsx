import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm  } from 'redux-form'

//Dialog Styling
const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    FormField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
}));
//Form Content
function validate(values) {
  const errors = {}
  const {names, description, price} = values
  if(!names) errors.names = "required"
  if(!description) errors.description = "required"
  if(!price) errors.price = "required"
  return errors
}
function renderInput({input, label, type, meta: {touched, error}}) {
  return <div>
<label>{label}{touched && ((error && <span className="error">{error}</span>))}</label>
<div>
  <input {...input} placeholder={label} type={type}/>
</div>
  </div>
}
const renderTextArea = ({input, label, rows, meta: {touched, error}}) => {
  return <div>
<label>{label}{touched && ((error && <span className="error">{error}</span>))}</label>
<div>
  <textarea {...input} placeholder={label} rows={rows}/>
</div>
  </div>
}

//Dialogue Box Content
const SimpleDialog = props => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  // console.log(SimpleDialog)
//ReduxForm Function 
  const {handleSubmit, pristine,submitting} = props
  return ( 
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Enter Product Details</DialogTitle>
        <form  onSubmit={handleSubmit} style={{marginLeft: 10}}>
            <Field name="names"  type="text"  className={classes.formField} component = {renderInput} label="Product Name" />
          <br />
            <Field name="description" component={renderTextArea} rows={10} label="Description " />
          <br />
            <Field name="price" component="input" component = {renderInput}  type="text" label="Price " />
          <br/>
            <Button type="submit" disabled={pristine || submitting} style={{marginLeft: 60, width: 100}} color="inherit" variant="outlined" className={classes.button} >
              Add
            </Button>
        </form>
    </Dialog>
  );



}//end of simpleDialog function

// const withForm = reduxForm({form: 'logEntry'})(SimpleDialog)
// const withRedux = connect()(withForm)


//Dialogue box properties
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


//Dialog Button Code
  

  const withForm = reduxForm({form: 'SimpleDialog', validate})(SimpleDialog)
const withRedux = connect()(withForm)
export default withRouter(withRedux)


