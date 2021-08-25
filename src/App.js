import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Technology from './Technology';
import Education from './Education';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
          <header className='row'>
            <div className='col-sm-12'>
              <Header/>
            </div>
          </header>
          <main className='row'>
            <div className='col-sm-12'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Technology" component={Technology} />
              <Route exact path="/Education" component={Education} />
            </Switch>
            </div>
          </main>
          <footer className='row'>
            <div className='col-sm-12'>
              <Footer/>
            </div>
          </footer>
      </div>
    </Router>
    </>
  );
}

export default App;
