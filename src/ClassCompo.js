import React, { Component } from "react";


class ThoroughClass extends Component {
    render(){
        return (
            <div className="c_right" style={{display:'inline-block'}}>
            <h1>This is Created using Class Component</h1>
            <p id="pare_1">This is done using through external CSS</p>
            <p id="pare_2" style={{color:"rgb(50, 193, 218)"}}>This is done using through inline CSS</p>
        </div>
        )
    }
}

export default ThoroughClass;