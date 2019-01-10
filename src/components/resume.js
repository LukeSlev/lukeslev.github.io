import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Luke Slevinsky</h2>
            <h4 style={{color: 'grey'}}>Student Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Proident nulla ad ut veniam. Enim dolore enim sit aliqua culpa nisi labore eu labore eiusmod incididunt esse elit veniam. Dolore in excepteur pariatur ad dolore nostrud magna labore dolore eiusmod elit anim.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>413 Heffernan Drive NW</p>
            <h5>Phone</h5>
            <p>(780) 619-8508</p>
            <h5>Email</h5>
            <p>lslevins@ualberta.ca</p>
            <h5>Website</h5>
            <p>https://lukeslev.github.io</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2020}
              schoolName="University of Alberta"
              schoolDescription="Enim qui nulla mollit nulla. Duis cupidatat officia aliqua do aute adipisicing sit amet quis dolore aliquip est et."
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>

            <Experience
              year={2018}
              startMonth="January"
              endMonth="August"
              jobName="Jobber"
              jobDescription="Enim qui nulla mollit nulla. Duis cupidatat officia aliqua do aute adipisicing sit amet quis dolore aliquip est et."
            />

            <Experience
              year={2017}
              startMonth="May"
              endMonth="August"
              jobName="PCL"
              jobDescription="Enim qui nulla mollit nulla. Duis cupidatat officia aliqua do aute adipisicing sit amet quis dolore aliquip est et."
            />

            <Experience
              year={2016}
              startMonth="May"
              endMonth="August"
              jobName="TELUS"
              jobDescription="Enim qui nulla mollit nulla. Duis cupidatat officia aliqua do aute adipisicing sit amet quis dolore aliquip est et."
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Skills</h2>

            <Skills
              skill="python"
              progress={100}
            />
            <Skills
              skill="java"
              progress={80}
            />
            <Skills
              skill="ruby"
              progress={90}
            />
            <Skills
              skill="c++"
              progress={70}
            />
            <Skills
              skill="javascript"
              progress={50}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
