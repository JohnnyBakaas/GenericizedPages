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
      <div
        className={
          showNav
            ? [styles["nav-menue"], styles["nav-menue-show"]].join(" ")
            : styles["nav-menue"]
        }
      >
        {pages.map((e, i) => (
          <NavLink key={i} to={e.name} className={styles["nav-element"]}>
            <h1>{e.name}</h1>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;

const validateData = (data: string) => {
  if (data.includes(".")) return false;
  if (data.includes("a")) return false;
  if (data.includes("z")) return false;
  if (data.includes("x")) return false;
  if (data.includes("nei")) return false;
  return true;
};

const validateDataDry = (data: string) => {
  const notAlowed = [".", "a", "z", "x", "nei"];
  for (let i = 0; i < notAlowed.length; i++) {
    if (data.includes(notAlowed[i])) return false;
  }
  return true;
};
