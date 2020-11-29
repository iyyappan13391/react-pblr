import React from 'react';
import Searchomesection from './dashboard/searchhomesection';
import Detailsindividual from './details/detailsindividual';
import Listhouse from './list/listhouse';
import PostRental from './createRental/postrental';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const MiddleSearch = () => {

   

  return ( 
          <>

         <Switch>
            <Route exact path="/list">
               <Listhouse />
            </Route>
            <Route path="/details">
               <Detailsindividual/>
            </Route>
            <Route path="/postrental">
               <PostRental/>
            </Route>
            <Route path="/">
               <Searchomesection />
            </Route>
         </Switch>
          </>
         )

    }

    export default MiddleSearch;
    