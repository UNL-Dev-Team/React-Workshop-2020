import React, { Component } from "react";

function Project(props){
    return <React.Fragment>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.description}
            </p>
        </React.Fragment>;
}

export default Project;