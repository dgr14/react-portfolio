import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Styles/App/App.css';

import AboutMe from './components/AboutMe/AboutMe'
import View from './components/View/View.js'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
import Footer from './components/Footer/Footer';
import ProjectExpanded from './components/Project/ProjectExpanded';
import Project from './components/Project/Project';

class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main>

          <Switch>
            <Route exact path='/home' component={View} />
            <Route path='/about' component={AboutMe} />
            <Route path='/projects' component={Project} />
            <Route path='/projectview' component={ProjectExpanded} />
          </Switch>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
