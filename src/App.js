import './App.css';
import React from 'react';
import AppDrawer from './components/AppDrawer';
import Landing from './components/OnBoarding/Landing';
import { connect } from 'react-redux';

function App(props) {
  return (
    props.userSessionState.authenticated? <AppDrawer /> : <Landing />
  );
}


const mapStateToProps = (state) => ({
  userSessionState: state.UserSession.value
})
export default connect(mapStateToProps)(App)

