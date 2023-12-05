import logo from './logo.svg';
import {Link} from "react-router-dom";

// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas/index"
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
   const screen = "Labs";

   return (
      <HashRouter>
      <div>
   <Routes>
      <Route path="/" element={<Navigate to="Project"/>}/>
      <Route path="/project/*" element={<Project />} />

      <Route path="/Labs/*"   element={<Labs/>}/>
      <Route path="/hello"    element={<HelloWorld/>}/>
      <Route path="/kanbas/*" element={<Kanbas/>}/>
    </Routes>

   
      </div>
    </HashRouter>

   );
}
export default App;
