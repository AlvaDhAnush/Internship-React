import React from "react";
// import Madegoal from "./Madegoal";
// import Missedgoal from "./Missedgoal";

const Demo = (props) => {

    const a =10;

//   const bool = false;
//   if (bool) {
//     return <Madegoal />;
//   }
//   return <Missedgoal />;
    const handleClick = (x, y) => {
      alert(x + y);
    };
    return (
      <div>
        <h1>new component {props.para}</h1>
        {a===10 && <h4>{props.para}</h4>}
        <button onClick={() => handleClick(10, 50)}>Click Here</button>
      </div>
    );
};

export default Demo;
