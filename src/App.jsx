import React, { useState } from "react";
import "./App.css";
import Callback from "./Callback";
import Reference from "./Ref";
import LayoutEffect from "./LayoutEffect";
import Module from "./LayoutEffect/Module";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Memo from "./Memo";

const App = () => {
  return (
    <div>
      {/* <Module /> */}
      <Reference />
    </div>
  );
};

export default App;
