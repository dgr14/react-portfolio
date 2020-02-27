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
import ProjectPage from './components/Project/ProjectPage'
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
          {/* Main is the container that switches pages */}
            {/* <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={AboutMe} />

              <Route path='/projects' component={ProjectPage} />
              <Route path='/projectview/:project' component={ProjectExpanded} />

              <Route path='/skills' component={SkillPage} />
            </Switch> */}
            {/* Need this for react scroll */}
            <Home />
            <AboutMe />

            <ProjectPage />

            <SkillPage />

          </main>
          <Footer />
          {/* <LoadingPage /> */}
        </div>
      </Suspense>
    );
  }
}

export default App;
