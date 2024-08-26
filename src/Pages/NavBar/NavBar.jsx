import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <div className="main_nav_bar_outer_container">
      <div className="web_name_contaienr">Book Store</div>

      <div className="main_navigation_outer_container">
        <ul className="main_navigation_inner_container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-extrabold text-xl border-[#23BE0A] border-2 p-2 rounded-lg"
                  : "text-[#131313CC] text-xl font-extrabold border-transparent border-2 p-2"
              }
            >
              <>Home</>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/booklist"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-extrabold text-xl border-[#23BE0A] border-2 p-2 rounded-lg"
                  : "text-[#131313CC] text-xl font-extrabold border-transparent border-2 p-2"
              }
            >
              <>Listed Books</>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/readpage"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-extrabold text-xl border-[#23BE0A] border-2 p-2 rounded-lg"
                  : "text-[#131313CC] text-xl font-extrabold border-transparent border-2 p-2"
              }
            >
              <>Pages to Read</>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav_bar_btn">
        <button id="btn-1">Sing In</button>
        <button id="btn-2">Sing Up</button>
      </div>
    </div>
  );
};

export default NavBar;
