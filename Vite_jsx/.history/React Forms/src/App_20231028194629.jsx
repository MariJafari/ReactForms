// import Validate from "./components/Validate/Validate";
// import Dropdown from "./components/Dropdown/Dropdown";
// import Checkbox from "./components/Checkbox/Checkbox";
// import Multiple from "./components/Multiple/Multiple";
// import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
// import Controlled from "./components/Controlled/Controlled";
// import ReactHookForm from "./components/ReactHookForm/Example";




// const App = () => {
//  return (
//  <div>
// {<Controlled />}
//  {<Dropdown />}
// { <Checkbox /> }
// { <Multiple /> }
// { <Validate /> }
//  {<Uncontrolled />}
// <ReactHookForm />
//  </div>
//  );
// };
// export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Controlled from "./components/Controlled/Controlled"
import ControlledComponent from "./ControlledComponent";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<ControlledComponent />, document.getElementById("root"));
