import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const Navbar = (props) => {
  // console.log(props);
  const [links, setLinks] = useState([]);
  const [configLink, setConfigLink] = useState("");
  // console.log(configLink);
  function loadData() {
    axios
      .get("environments.json")
      .then((response) => {
        setLinks(response.data.environments);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const updateEnvironment = (environment) => {
    setConfigLink(environment);
    props.changeEnvironment(environment);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-brand" href="#">
              FeatureSwitch Admin UI
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link, idx) => (
                  <li className="nav-item" key={idx}>
                    <button
                      className="nav-link"
                      onClick={() => {
                        updateEnvironment(link);
                      }}
                    >
                      {link.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
