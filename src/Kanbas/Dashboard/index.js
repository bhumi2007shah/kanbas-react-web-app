import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div >
      <h1>Dashboard</h1>
      <hr/>
      <h4>published courses({courses.length})</h4>
      <div class="row row-cols-1 row-cols-md-2 g-4 newdash">
      <div className="wd-Dcustomcol">
        {courses.map((course, index) => (
            <div class="card">
            <img src="/iMAGE/download.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="btn btn-primary"
          >
            {course.name}
          </Link><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
        ))}
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
