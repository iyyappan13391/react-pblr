
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import MiddleSearch from './components/middleSearch';
import './App.css';

import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { all } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import TalukVillageReducers from './container/homepage/reducer';
import createPostRental from './container/postrentalpage/reducers';
import GetPostRental from './container/listpage/reducers';


import rooSaga from './container/homepage/index';



const sagaMiddleware = createSagaMiddleware();



const rootReducers = combineReducers({
    TalukVillageReducers,
    createPostRental,
    GetPostRental
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rooSaga);


function App() {

    return (
        <Provider store={store}>
            <Router>
                <Header />
                <MiddleSearch />
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;