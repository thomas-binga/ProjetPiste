import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUsersComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import Accueil from "./components/Accueil";
import ListActionsComponent from "./components/ListActionsComponent";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {Accueil}/>
                        <Route path = "/users" component = {ListUsersComponent}/>
                        <Route path = "/actions" component = {ListActionsComponent}/>
                        <Route path = "/users/create" component = {CreateUserComponent}/>
                        <Route path = "/add-user/:id" component = {CreateUserComponent}/>
                        <Route path = "/view-user/:id" component = {ViewUserComponent}/>
                          {/* <Route path = "/update-user/:id" component = {UpdateuserComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
