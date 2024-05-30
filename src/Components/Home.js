import React, { useEffect, useRef } from "react";
import "./Home.css";
import choose from "../images/choose.jpg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Welcome to EducationConsultancy"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="home">
        <div
          className="container home-text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>
          <p>
            At Education Consultancy, we understand the importance of making
            informed decisions about higher education. Our platform connects you
            with current university students who serve as your personal guides
            and experts, offering valuable insights and support to navigate the
            complexities of the academic world.
          </p>
          <a href="#explore">
            <button className="btn btn-light">Explore More</button>
          </a>
        </div>
      </div>
      <div className="home-2" id="explore">
        <h2> How We Can Help You:</h2>
        <div className="cards">
          <div
            className="card-body card-1"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h5 className="card-title">1. Expert Connections:</h5>
            <p className="card-text">
              Connect directly with current university students who are studying
              in your field of interest or at your desired institution. Benefit
              from their firsthand experiences, insights, and advice to make
              informed decisions about your educational future.
            </p>
          </div>

          <div
            className="card-body card-2"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <h5 className="card-title">2. Personalized Support:</h5>
            <p className="card-text">
              Receive personalized guidance tailored to your specific needs and
              aspirations. Whether you have questions about academic programs,
              campus culture, scholarship opportunities, or extracurricular
              activities, our student experts are here to help.
            </p>
          </div>

          <div
            className="card-body card-3"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <h5 className="card-title">3. Scholarship Assistance:</h5>
            <p className="card-text">
              Explore scholarship options and receive guidance on the
              application process from our team of student experts. Gain
              insights from students who have successfully secured scholarships,
              learn from their experiences, strategies, and tips to craft
              winning scholarship applications.
            </p>
          </div>
        </div>
      </div>
      <div className="home-3 container">
      <div
          className="home-3-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Why Choose Us?</h2>
          <h5>Real-World Insights:</h5>
          <p>
            Access firsthand information from students actively engaged in
            university life, ensuring that you receive relevant and up-to-date
            advice.
          </p>
          <h5> Peer-to-Peer Support:</h5>
          <p>
            Benefit from the perspective of peers who understand the challenges
            and opportunities of higher education and can provide empathetic
            support.
          </p>
          <h5>Personalized Guidance: </h5>
          <p>
            Receive tailored advice and recommendations to help you achieve your
            academic and career goals effectively.
          </p>
        </div>
        <div className="home3-img" >
          <img
            src={choose}
            alt="img"
          />
        </div>
      </div>
      <div className="home-4 container">
        <h2>Get Started Today!</h2>
        <p>
          Embark on your educational journey with confidence by connecting with
          our student experts. Whether you're exploring university options,
          seeking scholarship opportunities, or navigating the admissions
          process, Education Consultancy is here to support you every step of
          the way.
        </p>
      </div>
    </div>
  );
};

export default Home;
