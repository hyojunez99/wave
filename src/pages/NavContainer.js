import { Link } from "react-router-dom";
import navData from "../data/navData.js";

const NavContainer = () => {
  return (
    <nav>
      <ul>
        {navData.map((item) => {
          return (
            <li key={item.id} className="main-menu">
              <Link to={item.link}>{item.title}</Link>
              {item.subMenu.length > 0 && (
                <ul className="sub-menu">
                  {item.subMenu.map((sub, idx) => {
                    return (
                      <li key={idx}>
                        <Link to={sub.link}>{sub.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavContainer;
