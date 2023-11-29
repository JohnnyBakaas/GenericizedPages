import { ReactNode, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

export type HeaderProps = {
  pageName: string;
  logo?: string | ReactNode;
  pages: { name: string }[];
};

const Header = ({ pageName, logo, pages }: HeaderProps) => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
    console.log(location.pathname);
  }, [location]);

  return (
    <header className={styles.wrapper}>
      <div className={styles["logo-wrapper"]}>
        <NavLink to={"/"} className={styles["nav-link-logo-wrapper"]}>
          {logo ? (
            typeof logo == "string" ? (
              <img src={logo} alt={logo} className={styles["logo"]} />
            ) : (
              logo
            )
          ) : (
            <h1>{pageName}</h1>
          )}
        </NavLink>
        <div
          className={styles["hamburger-wrapper"]}
          onClick={() => setShowNav((pre) => !pre)}
        >
          <div className={styles["hamburger-bar"]}></div>
          <div className={styles["hamburger-bar"]}></div>
          <div className={styles["hamburger-bar"]}></div>
        </div>
      </div>
      <div style={showNav ? {} : { display: "none" }}>
        {pages.map((e, i) => (
          <NavLink
            key={i}
            to={e.name}
            className={
              e.name == location.pathname
                ? styles["nav-element"]
                : [styles["nav-element"], styles["nav-element-selected"]].join(
                    " "
                  )
            }
          >
            <h1>{e.name}</h1>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
