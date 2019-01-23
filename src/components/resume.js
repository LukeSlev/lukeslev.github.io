import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/luke-chill.png"
                alt="headshot"
                className="chill-img"
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Luke Slevinsky</h2>
            <h4 style={{ color: "grey" }}>Student Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Computer Engineering student at the University of Alberta with a
              passion for programming and problem-solving.
              <br />
              <br />
              I'm looking for a dynamic work environment where I'm challenged
              and my work has a lasting impact. My goal is to broaden my skills
              in the software industry and experience as much as I can. I am
              passionate about being a hardworking individual and am always
              looking for new opportunities to learn.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>(780) 619-8508</p>
            <h5>Email</h5>
            <p>lslevins@ualberta.ca</p>
            <h5>Website</h5>
            <p>https://lukeslev.github.io</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <Cell col={1} style={{ display: "inline-block" }}>
              <div className="resume-download">
                <a
                  href="https://drive.google.com/open?id=1RW4fdoGkFF5oRUSc7P-B0GfzDngKQsh3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-file-pdf-o" aria-hidden="true" />
                </a>
              </div>
            </Cell>
            <Cell
              col={3}
              className="resume-download"
              style={{ display: "inline-block" }}
            >
              {" "}
              Current Resume
            </Cell>

            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2020}
              schoolName="University of Alberta"
              schoolDescription="BSc. Computer Engineering Co-op"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              year={2018}
              startMonth="January"
              endMonth="August"
              jobName="Jobber"
              jobDescription="Student Software Developer for the Payments scrum team at Jobber"
            />

            <Experience
              year={2017}
              startMonth="May"
              endMonth="August"
              jobName="PCL"
              jobDescription="Business Technology Student"
            />

            <Experience
              year={2016}
              startMonth="May"
              endMonth="August"
              jobName="TELUS"
              jobDescription="Summer Student with the Core IP and Optical Development team"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <h6>Relative Experience</h6>

            <Skills skill="python" progress={100} />
            <Skills skill="java" progress={80} />
            <Skills skill="ruby" progress={90} />
            <Skills skill="c++" progress={70} />
            <Skills skill="javascript" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
