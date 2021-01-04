import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Search />
        </div>
      </React.Fragment>
      
    )
  }
}

export default App;