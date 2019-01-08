import React, { Component } from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header waterfall>
              <HeaderRow title="Title">
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search2"
                      expandable
                      expandableIcon="search"
                  />
              </HeaderRow>
              <HeaderRow>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about_me">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </HeaderRow>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about_me">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
