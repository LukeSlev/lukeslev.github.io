import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab:0 };
  }

  toggleCategories() {
    switch(this.state.activeTab) {
      case 0:
      return(
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(https://github.com/tymoorej/Collabify/blob/uiRedesign/public/colllabify-logo.png?raw=true) center / cover"}}>
              Collabify
            </CardTitle>
            <CardText>
              Spotify party playlist collaboration app! Create playlist with your friends to play off of the hosts phone.
            </CardText>
            <CardActions border>
              <a href="https://github.com/tymoorej/Collabify" target="_blank" rel="noopener noreferrer">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
      case 1:
      return(
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "black", height: "176px", background: "url(https://github.com/LukeSlev/BotSpotr/blob/master/client/src/logo.png?raw=true) center / cover"}}>
              BotSpotr
            </CardTitle>
            <CardText>
              Have you ever wondered how some tweets seem to go viral for no reason at all? With all the talk of bots in the news it can be difficult to be sure what is true and what isn't... This is where BotSpotr comes in! BotSpotr is a Viral Tweet Analyzer! Place in your tweet url and see the likelihood that tweet was retweeted by bots!
            </CardText>
            <CardActions border>
              <a href="https://github.com/LukeSlev/BotSpotr" target="_blank" rel="noopener noreferrer">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
      case 2:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png) center / cover"}}>
                SQL Mini Store
              </CardTitle>
              <CardText>
                A mini-store application that deals with databases using python and SQLite3
              </CardText>
              <CardActions border>
                <a href="https://github.com/LukeSlev/SQL-Mini-Store" target="_blank" rel="noopener noreferrer">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );
      case 3:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://assets.materialup.com/uploads/2b2b82c5-02ea-4f12-ba53-e4d824b6cefc/preview) center / cover"}}>
                s(Arduino)ku
              </CardTitle>
              <CardText>
                Play Sudoku on your Arduino! Attempt to solve a randomly generated sudoku puzzle or have the python server solve it for you! You can even input your own board to be solved.
              </CardText>
              <CardActions border>
                <a href="https://github.com/LukeSlev/SudokuOnArduino" target="_blank" rel="noopener noreferrer">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );

        case 4:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluhQ7hcOF2e41pr4ETWSAFWEOX6XoF5avCPlNUYGqPqfLS2IL3Q) center / cover"}}>
                Rails API
              </CardTitle>
              <CardText>
                Rails API was built for the purpose of completing Shopify's Winter 2019 Developer Intern Challenge
              </CardText>
              <CardActions border>
                <a href="https://github.com/LukeSlev/Shopify-2019-Rails-API" target="_blank" rel="noopener noreferrer">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );

      default:
        break;
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} riple="true">
          <Tab>Android</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>C++</Tab>
          <Tab>Rails</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
