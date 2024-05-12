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
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/state" element={<State/>} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/memo" element={<Memo/>} />
        <Route path="/context" element={<Context/>} />
        <Route path="/callback" element={<Callback/>} />
        <Route path="/reference" element={<Reference/>} />
        <Route path="/layouteffect" element={<LayoutEffect/>} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
