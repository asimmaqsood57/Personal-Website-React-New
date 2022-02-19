import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

export default function Contact() {
  return (
    <div>
      <div
        data-aos="slide-down"
        data-aos-duration="3000"
        class="container-fluid"
      >
        <h2 class="center my-4">
          <strong>Contact</strong>{" "}
        </h2>
        <div class="row">
          <div class="cols col-sm-5 my-3 mx-4 center ">
            <p>
              If you have any query regarding me or my work, then you can{" "}
              <a href="mailto:asimmaqsood57@gmail.com">
                {" "}
                <b>Email</b>{" "}
              </a>{" "}
              me without any kind of hesitation.
              <p>
                <strong>Email : </strong>{" "}
                <a
                  href="mailto:asimmaqsood57@gmail.com"
                  class="__cf_email__"
                  data-cfemail="7c1d0f1511111d0d0f131318494b3c1b111d1510521f1311"
                >
                  asimmaqsood57@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone : </strong>{" "}
                <a href="tel:+923015846975">+92-3015846975</a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
