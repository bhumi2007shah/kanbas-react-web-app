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
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio","Help" ];
  const linkToIconMap={
    Account: <FaUserAlt classname="fa-user nav-link-i"/>,
    Dashboard:<TfiDashboard classname="text-red "/>,
    Courses:<FaBook classname="fa-user"/>,
    Calendar:<BsFillCalendar3WeekFill classname="fa-user "/>,
    Inbox:<HiInbox classname="fa-user"/>,
    History:<GoHistory classname="fa-user "/>,
    Studio:<FaDesktop classname="fa-user"/>,
    Help:<BiHelpCircle classname="fa-user"/>
  };
  const { pathname } = useLocation();
  return (
    <div className="sidebar   " >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`sidebar   nav-link  ${pathname.includes(link) ? "active":"" } `}>
            {linkToIconMap[link] }
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

