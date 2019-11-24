//Api  helpers will be here 
// import fetch from 'isomorphic-fetch'

require('es6-promise').polyfill()

export default function api(method, path, data){
    return fetch(`http://localhost:3030/addItem`, {
        method: method.toUpperCase(), //this stmt will make methods[for eg: get] to [GET] automatically
        mode: 'cors',// we are setting our mode to cors because cors is handling our CROSS BROWSER SCRIPTING PROTECTION.
        headers: new Headers({
            'Accept': 'application/json',//what server will accept
            'Content-Type': 'application/json',//how we are sending to server
            'Access-Control-Allow-Origin': window.location.origin,
        }),
        body: JSON.stringify(data)
    }).then(response => response.json())
}

//in api(method, path, data):- 
//method indicates the get, put, post delete method
//path indicates path n the server that we are going to GO TO the endpoint
//data indicates  in the case of post, put and delete a data key 

//Next to api/log_entries/index.js where we are going to specify all of our call to our server