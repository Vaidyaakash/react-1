import React from "react";

const Functional = () => {
    return (
        <div className="f_back" style={{display:'inline-block'}}>
            <h1>This is Created using Functional Component</h1>
            <p id="para_1">This is done using through external CSS</p>
            <p id="para_2" style={{color:'orangered'}}>This is done using through inline CSS</p>
        </div>
    )
}

export default Functional;