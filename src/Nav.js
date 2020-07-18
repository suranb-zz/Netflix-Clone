import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://occ-0-939-769.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABa3biOZIj5B3s2D9LMSrIdIHBKMTwpQdNEGch2Tl4N76my7eMfE5zrcdFNIdEwiUGmfx6BUMJf15FoW7Zl042lMfbHSG.png?r=f08"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
