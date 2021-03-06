import React, { Component } from 'react';   //Currently, Statefull. B/c is with, "{Component}"
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import School from './components/School/School';
import Post from './components/Post/Post';
//import Register from './components/Registration/Register';
import {Route} from 'react-router-dom';



class App extends Component {

  //Outside is for Component Logic

  //Redner JSX
  //JSX uses className, NOT <div class="">


    render() {
    return (
      <div className="App">
        <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
          <Route path="/school" component={School} />
          <Route path="/post" component={Post}/>
        <Footer />
      </div>
    );
  }
}

export default App;
