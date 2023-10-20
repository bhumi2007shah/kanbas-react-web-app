import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home ", "Modules", "Assignments", "Piazza","Zoom Meetings","Assignments","Quizzes","Grades","People","Panopto","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className=" sidebar-c " style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={` nav-link-c text-red  ${pathname.includes(link) && "active"}`} 
        
          >
        
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;

