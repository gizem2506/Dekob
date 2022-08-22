import React from "react";
import HomePage from "./screens/HomePage";
import MoodScreen from "./screens/MoodScreen";
import Write from "./screens/Write";
import Write2 from "./screens/Write2";
import Write3 from "./screens/Write3";
import Write4 from "./screens/Write4";
import Write5 from "./screens/Write5";
import Write6 from "./screens/Write6";
import Draw from "./screens/Draw";
import Draw2 from "./screens/Draw2";
import Draw3 from "./screens/Draw3";
import Draw4 from "./screens/Draw4";
import Draw5 from "./screens/Draw5";
import Draw6 from "./screens/Draw6";
import Draw7 from "./screens/Draw7";
import Think from "./screens/Think";
import Think2 from "./screens/Think2";
import Think3 from "./screens/Think3";
import Think4 from "./screens/Think4";
import Think5 from "./screens/Think5";
import Think6 from "./screens/Think6";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<HomePage/> } exact></Route>
            <Route path='/moods' element={<MoodScreen></MoodScreen>}></Route>
            <Route path='/write1' element={<Write></Write>}></Route>
            <Route path='/write2' element={<Write2></Write2>}></Route>
            <Route path='/write3' element={<Write3></Write3>}></Route>
            <Route path='/write4' element={<Write4></Write4>}></Route>
            <Route path='/write5' element={<Write5></Write5>}></Route>
            <Route path='/write6' element={<Write6></Write6>}></Route>
            <Route path='/draw' element={<Draw></Draw>}></Route>
            <Route path='/draw2' element={<Draw2></Draw2>}></Route>
            <Route path='/draw3' element={<Draw3></Draw3>}></Route>
            <Route path='/draw4' element={<Draw4></Draw4>}></Route>
            <Route path='/draw5' element={<Draw5></Draw5>}></Route>
            <Route path='/draw6' element={<Draw6></Draw6>}></Route>
            <Route path='/draw7' element={<Draw7></Draw7>}></Route>
            <Route path='/think' element={<Think></Think>}></Route>
            <Route path='/think2' element={<Think2></Think2>}></Route>
            <Route path='/think3' element={<Think3></Think3>}></Route>
            <Route path='/think4' element={<Think4></Think4>}></Route>
            <Route path='/think5' element={<Think5></Think5>}></Route>
            <Route path='/think6' element={<Think6></Think6>}></Route>
          </Routes>
        </div>
  </Router>
  );
}

export default App;
