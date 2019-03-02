import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import firebase from './firebase'

import 'semantic-ui-css/semantic.min.css'

class Root extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/')
            }
        })
    }
    render () {
        return (
            <Switch>
            
                <Route exact path="/" component={App}> </Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            
            
            
            </Switch>
            
        )

    }
}

const RouteWithAuth = withRouter(Root)

ReactDOM.render(
    <Router>

<RouteWithAuth />
</Router>

, document.getElementById('root'));
registerServiceWorker();
