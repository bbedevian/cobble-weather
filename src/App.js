import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'

// import {Route, Switch} from 'react-router-dom';
function App() {
  const time = new Date()
  return (
    <div className={"App" + (time.getHours() > 18 ? ' night' : ' day') }>
      <Header/>
      <HomePage />
    </div>
  );
}

export default App;
