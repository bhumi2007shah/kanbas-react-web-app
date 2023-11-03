import React, { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import db from "../../Database";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

//   const [modules, setModules] = useState(db.modules);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//   });
//   const addModule = (module) => {
//     setModules([
//       { ...module, _id: new Date().getTime().toString() },
//         ...modules,
//     ]);
//   };
//   const deleteModule = (moduleId) => {
//     setModules(modules.filter(
//       (module) => module._id !== moduleId));
//   };
//   const updateModule = () => {
//     setModules(
//       modules.map((m) => {
//         if (m._id === module._id) {
//           return module;
//         } else {
//           return m;
//         }
//       })
//     );
  //}


  return (
    
    <ul className="list-group">
        <li className="list-group-item">
        <input className="w-50" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
        }
        />
           <button style={{float: "inline-end", backgroundColor:"blue",color:"white"}} 
                     onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                     
Add</button>
<button style={{backgroundColor:"green",color:"white"}}  onClick={() => dispatch(updateModule(module))}>

                Update
        </button>
<br/>

        <textarea value={module.description} className="w-50"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }
        />
             

      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
          

             <h3>{module.name}</h3>
             <p>{module.description}   <button style={{backgroundColor:"red",color:"white"}}
                           onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            
            </button>
            <button style={{backgroundColor:"green",color:"white"}}
                           onClick={() => dispatch(setModule(module))}>

              Edit
            </button>
</p>
             
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;