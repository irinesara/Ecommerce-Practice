import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from './compo/login';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}
export default App;