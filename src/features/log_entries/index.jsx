// react components of projects will be here

import React from 'react'

import {connect} from 'react-redux'

import { getLogEntries } from '../../api/log_entries' //calling index file

import LogEntryTable from './table'
import SimpleDialogDemo from '../navbar/navbutton'


class LogEntries extends React.Component {

    componentDidMount() {
        const {persistLogEntries} = this.props 
        getLogEntries().then(json => persistLogEntries({
            entries: json,
            loaded: true
        }))
    }
    render() {
       const { entries, loaded } = this.props
       return <div>
           <SimpleDialogDemo />
           <h1>Products</h1>
           <LogEntryTable entries={entries} loaded={loaded} />
           </div> 
    }
}

function mapStateToProps(state) {
    return {
        entries: state.logentries.entries,
        loaded: state.logentries.loaded,
    }
}

function mapDispatchToProps(dispatch){     
   return {
       persistLogEntries: (payload) => {
           dispatch({ type: 'LOAD', payload})
       }
   }  
}

export default connect(mapStateToProps, mapDispatchToProps)(LogEntries)

//Next to features/table.jsx