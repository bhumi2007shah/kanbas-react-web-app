import logo from './logo.svg';
import {Link} from "react-router-dom";

// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas/index"
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
   return (
      <HashRouter>
      <div>
   <Routes>
      <Route path="/" element={<Navigate to="Kanbas"/>}/>
      <Route path="/Labs/*"   element={<Labs/>}/>
      <Route path="/hello"    element={<HelloWorld/>}/>
      <Route path="/kanbas/*" element={<Kanbas/>}/>
    </Routes>

   
      </div>
    </HashRouter>

   );
}
export default App;
