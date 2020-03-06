import React, { Component } from "react";


function WorkExperience(props){
    return <React.Fragment>
        <h2>{props.title}</h2>
        <p>{props.dateRange}</p>
        <p>{props.description}</p>
    </React.Fragment>
}

export default WorkExperience;