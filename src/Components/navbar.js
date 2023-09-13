import PropTypes from "prop-types";
import React, { Component } from "react";

export class Navbar extends Component {
  static propTypes = {};
  render() {
    let { updateValue } = this.props;

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Category
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => {
                          updateValue("Apple");
                        }}
                      >
                        Apple
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => updateValue("Tesla")}
                      >
                        Tesla
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => updateValue("business")}
                      >
                        Business-US
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => updateValue("Tech")}
                      >
                        TechCrunch
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => updateValue("bit")}
                      >
                        Bitcoin
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => updateValue("head")}
                      >
                        Headlines
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
