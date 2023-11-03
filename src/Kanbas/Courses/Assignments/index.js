// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import db from "../../Database";


// function Assignments() {
//   const { courseId } = useParams();
//   const assignments = db.assignments;
//   const courseAssignments = assignments.filter(
//     (assignment) => assignment.course === courseId);
//   return (
//     <div>
//       <h2>Assignments for course {courseId}</h2>
//       <div className="list-group">
//         {courseAssignments.map((assignment) => (
//           <Link
//             key={assignment._id}
//             to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
//             className="list-group-item">
//             {assignment.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Assignments;
import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import db from "../../Database";
import AssignmentEditor from "./AssignmentEditor"; // Import the AssignmentEditor component

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  // State for tracking whether to show the AssignmentEditor
  const [showEditor, setShowEditor] = useState(false);

  // Function to toggle the AssignmentEditor visibility
  const toggleEditor = () => setShowEditor(!showEditor);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleDelete = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    // Delete the assignment from your data (e.g., db or state)
    // TODO: Implement your delete logic here
    setShowDialog(false);
  };

  const cancelDelete = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
          
        ))}
         {/* <button className="btn btn-danger ms-2" >
              Delete
            </button> */}
      </div>
    </div>
  );
}
//     <div>
//       <h2>Assignments for course {courseId}</h2>

//       {showEditor ? (
//         <AssignmentEditor
//           courseId={courseId}
//           toggleEditor={toggleEditor}
//           assignments={assignments}
//         />
//       ) : (
//         <button onClick={toggleEditor}>+ Add Assignment</button>
//       )}

//       <div className="list-group">
//         {courseAssignments.map((assignment) => (
//           <Link
//             key={assignment._id}
//             to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
//             className="list-group-item"
//           >
//             {assignment.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

export default Assignments;
