import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { ULearn } from "../../assets/svg/svg";
import { useReactPath } from "./path.hook.ts";
const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = ["home", "about", "team", "contact"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div
      className="navbarWrapper"
      style={{ background: navbg ? "rgba(255,255,255,0.4)" : "transparent" }}
    >
      <div className="navbar-left">
        <a href="#home">
          <ULearn />
        </a>
      </div>
      <div className="navbar-right">
        <div>
          {navContent.map((content, i) => (
            <a href={`#${content}`} key={i.toString() + content}>
              <p
                style={{
                  borderBottom: window.location.href.includes(`#${content}`)
                    ? "8px solid #B3B3FF"
                    : "",
                  height: "12px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
        <button>
          <a href="http://app.mulearn.org">Join µlearn</a>
        </button>
      </div>
      <div className="navbar-mobile">
        <button onClick={openMenu}>
          <ULearn />
        </button>
        {openmenu && (
          <div>
            {navContent.map((content, i) => (
              <a href={`#${content}`} key={i.toString() + content}>
                <p
                  style={{
                    borderBottom: window.location.href.includes(`#${content}`)
                      ? "4px solid #B3B3FF"
                      : "",
                    height: "12px",
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            <button>
              <a href="http://app.mulearn.org">Join µlearn</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
