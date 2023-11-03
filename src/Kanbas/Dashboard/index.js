import { React, useState } from "react";
import db from "../Database";  
import "./index.css";
import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
    
   
    
    return (
        <div>
          <h1>Dashboard</h1>
          <h4>published courses({courses.length})</h4>
          <input value={course.name} className="form-control, w-50" 
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
    


          <button  onClick={addNewCourse} style={{float: "inline-end", backgroundColor:"green",color:"white"}}>
        Add
      </button>
      <button onClick={updateCourse} style={{float: "inline-end", backgroundColor:"blue",color:"white"}}>
        Update
      </button>


      <div class="row row-cols-1 row-cols-md-2 g-4 newdash">
      <div className="wd-Dcustomcol">
        {/* {courses.map((course, index) => ( */}
        {courses.map((course) => (
            <div class="card">
            <img src="/iMAGE/download.png" class="card-img-top" alt="..."/>
            <div class="card-body">
            <Link key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-primary">
           
            {course.name}
          </Link><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button style={{float: "right", backgroundColor:"yellow",color:"black"}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                         <button style={{float: "right", backgroundColor:"red",color:"white"}} 
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
      </div>
    </div>))}
</div>
</div>
        </div>
      );
    }
    

export default Dashboard;
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div className="list-group">
//         {courses.map((course, index) => (
//           <Link
//             key={index}
//             to={`/Kanbas/Courses/${course._id}`}
//             className="list-group-item"
//           >
//             {course.name}
//           </Link>
//         ))}
//       </div>
// //       <pre>
// //         <code>{JSON.stringify(courses, null, 2)}</code>
// //       </pre>
// //     
// //   );
// // }

// // export default Dashboard;
