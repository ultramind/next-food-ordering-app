import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import React, { useState } from "react";

const register = () => {
  const [tab, setTab] = useState("card");
  return (
    <Layout>
      <section
        className="hero-section about checkout gap"
        style={{ backgroundImage: "url(assets/img/background-3.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text pricing-table">
                <h2
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  Register
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={500}
                >
                  Become our member by registering with us...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* checkout-order */}
      <section className="gap">
        <div className="container">
          <div className="row">
            <div
              className="offset-xl-3 col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="checkout-form"
              >
                <h4>User information</h4>

                <div className="row mb-2">
                  <div className="col-lg-12">
                    <input type="text" name="E-mail" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="E-mail" placeholder="Phone" />
                  </div>
                </div>
                <label className="checkbox-one">
                  I agreed on the terms and condition
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <button className="button-price mb-2">Register</button>
                <h6 className="two text-center mt-2">or login with provider</h6>

                <center>
                  <button className="button demo-block full">
                    Login with google
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default register;
