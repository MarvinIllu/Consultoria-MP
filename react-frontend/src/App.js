import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFiscaliaComponent from './components/ListFiscaliaComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateFiscaliaComponent from './components/CreateFiscaliaComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListFiscaliaComponent}></Route>
                          <Route path = "/list-fiscalias" component = {ListFiscaliaComponent}></Route>
                           <Route path = "/add-fiscalia/:id" component = {CreateFiscaliaComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
