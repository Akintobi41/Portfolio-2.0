import s from "./s_navbar.module.css";
import useActive from "./u_navbar";
import { Link } from "react-router-dom";

const navList = {
  Home: "/",
  Projects: "/projects",
  Resume: "/resume",
  Contact: "/contact",
};

const Navbar = () => {
  const { handleClick, toggle, setToggle } = useActive();
  return (
    <>
      <p className={s["logo-text"]}>
        <Link to="/" className={s["logo-link"]}>
          Ae .
        </Link>
      </p>
      <section
        className={s["hamburger-menu"]}
        onClick={handleClick}
      >
        <nav
          className={`${s["menu-toggle"]} ${
            toggle ? s["active"] : " "
          }`}
        ></nav>
      </section>

      <ul
        id="nav"
        className={`${s["navigation"]} ${
          toggle ? s["active"] : " "
        }`}
      >
        {Object.keys(navList).map((nav) => (
          <li key={nav} onClick={() => setToggle(false)}>
            {nav === "resume" ? (
              <a
                href={navList[nav]}
                rel="noreferrer"
                target="_blank"
              >
                {nav}
              </a>
            ) : (
              <Link to={navList[nav]}>{nav}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
