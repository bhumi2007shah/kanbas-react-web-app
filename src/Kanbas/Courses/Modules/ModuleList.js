import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import db from "../../Database";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse , createModule } from "./client";
import * as client from "./client";
function ModuleList() {
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

 

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    
    <ul className="list-group">
        <li className="list-group-item">
        <input className="w-50" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
        }
        />
           <button style={{float: "inline-end", backgroundColor:"blue",color:"white"}} 
                     onClick={handleAddModule}>
                     
Add</button>
<button style={{backgroundColor:"green",color:"white"}}  
onClick={() => handleUpdateModule}>

                Update
        </button>


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
                           onClick={() => handleDeleteModule(module._id)}>

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