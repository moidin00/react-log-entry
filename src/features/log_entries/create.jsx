import React from 'react'

import { connect } from 'react-redux'

import { createLogEntry } from '../../api/log_entries'

import LogEntryForm from  '../navbar'

function submitForm(values, props) {
    const { persistLogEntry } = props
    createLogEntry(values).then(json => {
        persistLogEntry({ entries: json })
    })
}

function CreateLogEntry(props) {
    return <div>
        <h1>Add Your Products</h1>

        <LogEntryForm onSubmit={values => submitForm(values, props)}/>
    </div>
}


function mapStateToProps(state) {
    return {
            logEntry: state.logEntries.entry,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        persistLogEntry: payload => dispatch({type: 'LOAD', payload})
    }
   }

export default connect(mapStateToProps, mapDispatchToProps)(CreateLogEntry)