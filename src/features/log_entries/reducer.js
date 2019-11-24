 //Reducer is just a javascript object that has some keys with the values that are going to be any reducers

const logEntriesReducer = (state={
    entries: [],
    loaded: true,
}, action) => {
    switch(action.type){
        case 'LOAD': 
        return action.payload

        default: 
        return state
    }
}

export default logEntriesReducer

//Next step is to replace local state in features/log_entries.