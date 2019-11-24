import React from 'react'
// import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

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

function renderTextArea({input, label, rows, meta: {touched, error}}) {
    return <div>
<label>{label}{touched && ((error && <span className="error">{error}</span>))}</label>
<div>
    <textarea {...input} placeholder={label} rows={rows}/>
</div>
    </div>
}

function LogEntryForm(props) {
    const {handleSubmit, submitting, valid} = props
    return <form onSubmit={handleSubmit}>
        <Field name="names" component={renderInput} type="text" label="Product Name" />
        <Field name="description" component={renderTextArea} rows={10} label="Description " />
        <Field name="price" component={renderInput} type="text" label="Price " />
        <div>
            <button
            type="submit"
            disabled={!valid || submitting}>Save</button>
            <button type="button"
            onClick={() => props.history.push("/")}>Cancel</button>
        </div>
    </form>
}

const withForm = reduxForm({form: 'logEntry', validate})(logEntryForm)
const withRedux = connect()(withForm)

export default withRouter(withRedux)