import React, { Component } from "react";

function Info(props){
    return <React.Fragment>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <a href={props.link}>{props.link}</a>
    </React.Fragment>
}

export default Info;