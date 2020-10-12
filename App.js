import React from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './Api_Auth/api_key'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './navigation/navbar'
import Login from './pages/login_page'
import Dashboard from './pages/dashboard'
import New_word from './pages/new_word'
import Wordlist from './pages/word_list'

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/add_word' component={New_word}></Route>
          <Route path='/word_list' component={Wordlist}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
