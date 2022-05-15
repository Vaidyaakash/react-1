import React, { useState } from "react";
import Functional from './FunctionCompo';
import ThoroughClass from './ClassCompo'
import './Style.css';

const Header = () =>{

  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(true);

  const Toggle = () => {
    setShow(!show);
  }
  const Toggles = () => {
    setShows(!shows);
  }


  return(
    <div id="body">
    <h1 className="head">Styling using Functional and Class Component</h1>

    <div className="btn">
      <button className="btn_left" onClick={Toggle}>To see styling in function Component</button>
      <button className="btn_right" onClick={Toggles}>To see styling in Class Component</button>
    </div>
    <span>
    { show && <Functional/>}
    { shows &&  <ThoroughClass/>}
    </span>
    </div>
  )
};

export default Header;