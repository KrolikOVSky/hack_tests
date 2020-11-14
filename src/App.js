import React from 'react'
import Tests from "./components/Tests";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditTests from "./components/EditTests";


export default class App extends React.Component {
    render() {
        return (

            <Router>
                <Switch>
                    <div>
                        <Tests/>
                        <Route exact path="/results" component={EditTests} />
                    </div>
                </Switch>
            </Router>
        );
    }
}