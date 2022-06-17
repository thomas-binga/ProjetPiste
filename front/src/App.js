import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUsersComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Accueil from "./components/Accueil";
import Inscription from "./components/Inscription";
import ListActionsComponent from "./components/ListActionsComponent";
import ListMissionsComponent from "./components/ListMissionsComponent";

function App() {

    return (
        <div>
            <Router>
                  <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Accueil}/>
                            <Route path="/users" component={ListUsersComponent}/>
                            <Route path="/actions" exact component={ListActionsComponent}/>
                            <Route path="/actions/byUser/:userId" children={<ListActionsComponent/>}/>
                            <Route path="/actions/byMission/:missionId" children={<ListActionsComponent/>}/>
                            <Route path="/inscription" component={Inscription}/>
                            <Route path="/missions" component={ListMissionsComponent}/>
                        </Switch>
                    </div>
                  <FooterComponent />
            </Router>
        </div>
    );

}

export default App;
