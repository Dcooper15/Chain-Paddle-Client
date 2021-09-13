import React from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainSectors = () => {
  return (
    <>
      <div>
        <Route path="/sector">
          <Navbar />
          <h5 className="sectorHeader">
            <Link to="/" style={{ color: "#d4af37", textDecoration: "none" }}>
              {"< Home"}
            </Link>
          </h5>
          <h2 className="sectorHeader">Sectors</h2>
          <div className="sectorMenu">
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/finance"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Finance
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/entertainment"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Entertainment
                  </Link>
                </h3>
              </div>
            </div>

            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/tech"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Tech
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/airline"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Airline
                  </Link>
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/oil"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Oil
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/cannabis"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Cannabis
                  </Link>
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/pharmaceutics"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Pharmaceutics
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader" style={{paddingBottom: "10px"}}>
                  <Link
                    to="/sector/energy"
                    style={{textDecoration: "none", color: "#d4af37", fontSize: "16px" }}
                  >
                    Alternative 
                    
                    Energy
                  </Link>
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/automotive"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Automotive
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/grocery"
                    style={{textDecoration: "none", color: "#d4af37" }}
                  >
                    Grocery
                  </Link>
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="column" className="financeSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/crypto"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Crypto
                  </Link>
                </h3>
              </div>
              <div class="column" className="entertainmentSect">
                <h3 className="linkHeader">
                  <Link
                    to="/sector/social"
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Social Media
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </Route>
      </div>
    </>
  );
};

export default MainSectors;
