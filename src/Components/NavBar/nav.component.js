import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { links, social } from "./data.navbar";

import "./nav.style.css";
import NavCom from "../withinNav/withinNav.component";

const NavApp = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
      //   linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
      //   linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((li) => {
                const { id, url, text } = li;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((socialicon) => {
              const { id, url, icon } = socialicon;
              return (
                <li key={id}>
                  <Link to={url}>{icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div style={{ textAlign: "center" }}>
        <h3>Go back </h3>
        <Link to="/">
          <button className="btn">SHUUU!!!</button>
        </Link>
      </div>
      <footer>
        <NavCom />
      </footer>
    </>
  );
};

export default NavApp;
