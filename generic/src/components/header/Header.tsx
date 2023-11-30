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
  const [firstRender, setFirstRender] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
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
          className={
            showNav
              ? [styles["hamburger-wrapper"], styles["hamburger-close"]].join(
                  " "
                )
              : styles["hamburger-wrapper"]
          }
          onClick={() => {
            setFirstRender(false);
            setShowNav((pre) => !pre);
          }}
        >
          <div className={styles["hamburger-bar"]}></div>
          <div className={styles["hamburger-bar"]}></div>
          <div className={styles["hamburger-bar"]}></div>
        </div>
      </div>
      <div
        className={
          firstRender
            ? [styles["nav-menue"], styles["nav-menue-first-render"]].join(" ")
            : showNav
            ? [styles["nav-menue"], styles["nav-menue-show"]].join(" ")
            : styles["nav-menue"]
        }
        onClick={() => setShowNav(false)}
      >
        {pages.map((e, i) => (
          <NavLink key={i} to={e.name} className={styles["nav-element"]}>
            <h2>{e.name}</h2>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
