import React from 'react';
import './Styles/App.css';
import View from './components/View.js'
import Nav from './components/Nav.js'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SideDrawer />
      <main>
        <View />
      </main>
      
    </div>
  );
}

export default App;
