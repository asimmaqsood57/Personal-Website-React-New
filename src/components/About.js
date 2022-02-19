import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

AOS.refresh();

export default function About() {
  return (
    <div>
      <div
        data-aos="slide-down"
        data-aos-duration="3000"
        className="container-fluid"
      >
        <h2 className="center my-4">
          <strong>Education</strong>
        </h2>
        <div className="row">
          <div className="cols col-sm-5 my-1 mx-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Matric</strong>
              </li>
              <li className="list-group-item">
                <strong>FSc (Pre-Engineering)</strong>
              </li>
              <li className="list-group-item">
                <strong>Software Engineering (In-Progress)</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
