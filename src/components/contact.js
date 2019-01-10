import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Luke Slevinsky</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: "250px"}}
              />
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Culpa et anim veniam et cillum. Proident voluptate cillum minim qui. Laboris mollit ut sint id elit velit et excepteur exercitation. Exercitation labore incididunt excepteur aliquip ad quis magna mollit Lorem ea minim fugiat anim deserunt.
              </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (780) 619-8508
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    lslevins@ualberta.ca
                  </ListItemContent>
                </ListItem><ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    luke.slev
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
