import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from "react-mdl";

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
              <CardTitle style={{color: "black", height: "176px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluhQ7hcOF2e41pr4ETWSAFWEOX6XoF5avCPlNUYGqPqfLS2IL3Q) center / cover"}}>
                Rails Project
              </CardTitle>
              <CardText>
                Voluptate sunt in eu irure labore consequat incididunt culpa magna velit ex fugiat. Magna minim proident mollit Lorem pariatur duis et do exercitation reprehenderit deserunt voluptate. Fugiat culpa exercitation sit ex non ex proident velit cillum laboris esse. Officia dolor aute officia ad esse adipisicing in irure nulla cillum qui est minim nostrud.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'white'}}>
                <IconButton name='share'/>
              </CardMenu>
            </Card>
          </div>
        );
      case 1:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png) center / cover"}}>
                Python Project
              </CardTitle>
              <CardText>
                Voluptate sunt in eu irure labore consequat incididunt culpa magna velit ex fugiat. Magna minim proident mollit Lorem pariatur duis et do exercitation reprehenderit deserunt voluptate. Fugiat culpa exercitation sit ex non ex proident velit cillum laboris esse. Officia dolor aute officia ad esse adipisicing in irure nulla cillum qui est minim nostrud.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'white'}}>
                <IconButton name='share'/>
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://cdn3.iconfinder.com/data/icons/programming/100/database-512.png) center / cover"}}>
                Python Project
              </CardTitle>
              <CardText>
                Voluptate sunt in eu irure labore consequat incididunt culpa magna velit ex fugiat. Magna minim proident mollit Lorem pariatur duis et do exercitation reprehenderit deserunt voluptate. Fugiat culpa exercitation sit ex non ex proident velit cillum laboris esse. Officia dolor aute officia ad esse adipisicing in irure nulla cillum qui est minim nostrud.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'white'}}>
                <IconButton name='share'/>
              </CardMenu>
            </Card>
          </div>
        );
      case 2:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://assets.materialup.com/uploads/2b2b82c5-02ea-4f12-ba53-e4d824b6cefc/preview) center / cover"}}>
                C++ Project
              </CardTitle>
              <CardText>
                Voluptate sunt in eu irure labore consequat incididunt culpa magna velit ex fugiat. Magna minim proident mollit Lorem pariatur duis et do exercitation reprehenderit deserunt voluptate. Fugiat culpa exercitation sit ex non ex proident velit cillum laboris esse. Officia dolor aute officia ad esse adipisicing in irure nulla cillum qui est minim nostrud.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'white'}}>
                <IconButton name='share'/>
              </CardMenu>
            </Card>
          </div>
        );
      case 3:
        return(
          <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
              <CardTitle style={{color: "black", height: "176px", background: "url(https://github.com/tymoorej/Collabify/blob/uiRedesign/public/colllabify-logo.png?raw=true) center / cover"}}>
                Android Project
              </CardTitle>
              <CardText>
                Voluptate sunt in eu irure labore consequat incididunt culpa magna velit ex fugiat. Magna minim proident mollit Lorem pariatur duis et do exercitation reprehenderit deserunt voluptate. Fugiat culpa exercitation sit ex non ex proident velit cillum laboris esse. Officia dolor aute officia ad esse adipisicing in irure nulla cillum qui est minim nostrud.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: 'white'}}>
                <IconButton name='share'/>
              </CardMenu>
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
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} riple>
          <Tab>Rails</Tab>
          <Tab>Python</Tab>
          <Tab>C++</Tab>
          <Tab>Android</Tab>
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
