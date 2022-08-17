import React from "react";
import HomePage from "./screens/HomePage";
import MoodScreen from "./screens/MoodScreen";
import Write from "./screens/Write";
import Write2 from "./screens/Write2";
import Draw2 from "./screens/Draw2";
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
            <Route path='/draw' element={<Draw2></Draw2>}></Route>

          </Routes>
        </div>


  </Router>
  );
}

export default App;
