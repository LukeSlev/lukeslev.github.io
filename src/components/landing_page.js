import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="padding" />
            <img
              src="/images/luke-slevinsky-headshot.png"
              alt="headshot"
              className="headshot-img"
            />

            <div className="banner-text">
              <h1>Software Developer Student</h1>

              <hr/>

              <p>Python | Ruby on Rails | Java | C++</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* GMail */}
                <a href="mailto:lslevins@ualberta.ca">
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
