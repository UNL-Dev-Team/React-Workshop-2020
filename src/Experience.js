import React, { Component } from "react";
import Project from "./Components/Project";
import WorkExperience from "./Components/WorkExperience";
 
class Experience extends Component {
  render() {
    return (
      <div>
        <h1>Work Experience</h1>
            <WorkExperience title="Herbie Husker" dateRange="01/2019-01/2020" description="I was basically just being awesome and showing up at a bunch of events with a costume on."/>
            <WorkExperience title="Lil Red" dateRange="01/2020-01/2021" description="I was basically just being sort of awesome and showing up at a bunch of events with a blow-up costume on."/>
        <h1>Personal Projects</h1>
            <Project title="Super-duper awesome machine" description="It does super awesome stuff"/>
            <Project title="Second Awesome machine" description="Like the first but less awesome"/>
      </div>
    );
  }
}
 
export default Experience;