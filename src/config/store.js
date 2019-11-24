import { createStore, combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import logEntriesReducer from '../features/log_entries/reducer'

const rootReducer = combineReducers({
    form: formReducer,   
    logentries: logEntriesReducer,
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

//now configure src/index.js/ so that src/app.js can access