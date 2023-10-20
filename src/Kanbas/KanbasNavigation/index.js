import { Link, useLocation } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa" ;
import {TfiDashboard} from "react-icons/tfi" ;
import {FaBook} from "react-icons/fa" ;
import {BsFillCalendar3WeekFill} from "react-icons/bs";
import {HiInbox} from "react-icons/hi";
import {GoHistory} from "react-icons/go";
import {FaDesktop} from"react-icons/fa";
import {BiHelpCircle} from"react-icons/bi";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio","Help"];
  const linkToIconMap={
    Account: <FaUserAlt  id={"id1"}/>,
    Dashboard:<TfiDashboard classname="text-red "id={"id1"}/>,
    Courses:<FaBook classname="fa-user"id={"id1"}/>,
    Calendar:<BsFillCalendar3WeekFill classname="fa-user "id={"id1"}/>,
    Inbox:<HiInbox classname="fa-user"id={"id1"}/>,
    History:<GoHistory classname="fa-user "id={"id1"}/>,
    Studio:<FaDesktop classname="fa-user"id={"id1"}/>,
    Help:<BiHelpCircle classname="fa-user"id={"id1"}/>
  
  };
  const { pathname } = useLocation();
  return (
    
    <div className="sidebar" >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`   nav-link  ${pathname.includes(link) ? "active":"" } `}>
            {linkToIconMap[link] }
          {link}
        </Link>
      ))}
    </div>
   
  );
}
export default KanbasNavigation;

