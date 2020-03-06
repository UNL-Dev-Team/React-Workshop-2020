import React, { Component } from "react";

import Info from "./Components/Info";

class GeneralInfo extends Component {
    render() {
      return (
        <div>
          <h1>General Info</h1>
            <Info title="Name" content="Jimmy Erickson"/>
            <Info title="GitHub" link="https://github.com/JimmyErickson"/>
            <Info title="LinkedIn" link="https://www.linkedin.com/in/jimmy-erickson/"/>
         </div>
      );
    }
  }
   
  export default GeneralInfo;