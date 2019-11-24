 import React from 'react'
 import {Switch, Route} from 'react-router-dom'

 import ProductList from '../features/log_entries'
 import CreateProduct from '../features/log_entries/create'
 import EditList from '../features/log_entries/details'

 export default function Router(){
     return <Switch>
         <Route exact path='/' component={ProductList} />
         <Route exact path='/log_entries/new' component={CreateProduct} />
         <Route exact path='/log_entries/details' component={EditList} />
     </Switch>
 }
