import React, {Component} from 'react';
import Page from './pages/Page';
import Navigation from './pages/Navigation';
import Categories from './pages/Categories';
import Catalogue from './pages/Catalogue';
import * as actions from './store/actions';

import './App.css';

import {  
  Redirect,
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';

class App extends Component{
  constructor() {
    super();
       this.user = {}
    }

    componentDidMount() {
      fetch('http://localhost:1337/users/1', {
        headers: {
          // Authorization: 'Basic ' + btoa('admin@dotcms.com:admin')
        }
      })
      .then(data => data.json()
      )
      .then(user => {
        this.setState({user:user});
        this.props.setUserSettings(user);
      });
    }
  render(){

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Page {...props} paramPage='1' />}/>
          <Route exact path="/Navigation" component={Navigation} />
          <Route exact path="/Categories" component={Categories}/>
          <Route exact path="/Catalogue/:category" component={Catalogue}/>
          <Redirect to ="/"/>
      </Switch>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = state => {
	return {
    user: state.userSettings.user,
	};
};

const mapDispatchToProps = dispatch => {
    return {
      setUserSettings: (user) => dispatch(actions.setUserSettings(user)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
