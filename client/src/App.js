import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';

import store from './store';
import './App.css';

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Departments from "./components/Department/departmentOperations"

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Route path='/' exact component={Nav}/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/' exact component={Footer}/>

                    <Route path='/departments' exact component={Nav}/>
                    <Route path='/departments' exact component={Departments}/>
                    <Route path='/departments' exact component={Footer}/>

                    <Route path='/products' exact component={Nav}/>
                    <Route path='/products' exact component={Products}/>
                    <Route path='/products' exact component={Footer}/>

                    <Route path='/promotions' exact component={Nav}/>
                    <Route path='/promotions' exact component={Promotions}/>
                    <Route path='/promotions' exact component={Footer}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
