//Here We Will Be Specifying all of our calls to server

import api from '../'//redirect to api/index.js file

export function getLogEntries(){
    return api('get', 'log_entries')
}

export function createLogEntry(values){
    return api('post', 'log_entries', {...values})
}

//Next to features/log_entries/index.jsx where we are going to create simple component which is going to display those log_entries in our app