import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Styles/App/App.css';

import AboutMe from './components/AboutMe/AboutMe'
import Home from './components/Home/Home.js'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'
import Footer from './components/Footer/Footer';
import ProjectExpanded from './components/Project/ProjectExpanded';
import Project from './components/Project/Project';
import SkillPage from './components/Skills/SkillPage';
import LoadingPage from './components/LoadingPage/LoadingPage'

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
      <Suspense fallback={<LoadingPage />}>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <main>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={AboutMe} />

              <Route path='/projects' component={Project} />
              <Route path='/projectview' component={ProjectExpanded} />

              <Route path='/skills' component={SkillPage} />
            </Switch>

          </main>
          <Footer />
          {/* <LoadingPage /> */}
        </div>
      </Suspense>
    );
  }
}

export default App;