// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";


// function AssignmentEditor() {
//   const { assignmentId } = useParams();
//   const assignment = db.assignments.find(
//     (assignment) => assignment._id === assignmentId);


//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const handleSave = () => {
//     console.log("Actually saving assignment TBD in later assignments");
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };
//   return (
//     <div>
//       <h2>Assignment Name</h2>
//       <input value={assignment.title}
//              className="form-control mb-2" />
//       <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
//             className="btn btn-danger">
//         Cancel
//       </Link>
//       <button onClick={handleSave} className="btn btn-success me-2">
//         Save
//       </button>
//     </div>
//   );
// }


// export default AssignmentEditor;
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: assignment.title, // Initialize with assignment title
    description: assignment.description, // Initialize with assignment description
    dueDate: assignment.dueDate || "", // Initialize with assignment dueDate or empty string
    availableFromDate: assignment.availableFromDate || "", // Initialize with assignment availableFromDate or empty string
    availableUntilDate: assignment.availableUntilDate || "", // Initialize with assignment availableUntilDate or empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // You can access the updated values from formData
    const updatedAssignment = {
      ...assignment,
      title: formData.name,
      description: formData.description,
      dueDate: formData.dueDate,
      availableFromDate: formData.availableFromDate,
      availableUntilDate: formData.availableUntilDate,
      
  
    };

    // TODO: Update the assignment in the database or state (depends on your setup)

    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h4>Assignment Name</h4>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <h4>Assignment Description</h4>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="form-control mb-2"
      ></textarea>
      <h4>Due</h4>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <h4>Available from</h4>
      <input
        type="date"
        name="availableFromDate"
        value={formData.availableFromDate}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <h4>Available till</h4>
      <input
        type="date"
        name="availableUntilDate"
        value={formData.availableUntilDate}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
