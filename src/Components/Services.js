import React from "react";
import services from "../images/services.gif";
import services1 from "../images/services1.gif";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <div className="services"></div>
      <div className="services1 container">
        <img src={services} alt="" />

        <div className="services1-text">
          <h2>Our Services</h2>
          <p>
            At Education Consultancy, we leverage the expertise and firsthand
            experiences of current university students to provide personalized
            guidance and support to fellow students seeking to achieve their
            academic goals and aspirations. Our services are designed to connect
            you with knowledgeable peers who can offer valuable insights and
            assistance throughout your educational journey.
          </p>
        </div>
      </div>
      <div className="services2 container">
        <div className=" services2-text">
          <h3>University Selection</h3>

          <p>
            Connect with current university students who can provide firsthand
            insights into different universities and programs. Whether you're
            considering Ivy League institutions, prestigious universities in the
            USA or UK, or other foreign education destinations, our student
            advisors are here to share their experiences and help you find the
            perfect fit for your educational needs.
          </p>
          <h3> Scholarship Assistance</h3>

          <p>
            Gain valuable guidance and support from students who have
            successfully secured scholarships. Our student advisors can offer
            insights into scholarship opportunities, application processes, and
            tips for crafting compelling applications. Let our experienced peers
            help you navigate the scholarship landscape and maximize your
            chances of success.
          </p>
        </div>
        <img src={services1} alt="" />
      </div>
      <div className="services3 container">
        <img src="" alt="" />
        <div className="services3-text">
          <h3> Additional Services</h3>

          <p>
            In addition to our core services, our student advisors offer a range
            of additional support options tailored to meet your specific needs,
            including:
          </p>

          <div className="inner">
            <div className="inner1" data-aos="fade-right"
    data-aos-duration="1000">
              <h5>Application Support:</h5>
              <p>
                Receive assistance with application essays, interviews, and
                documentation from students who have successfully navigated the
                application process themselves.
              </p>
            </div>
            <div className="inner2" data-aos="fade-up"
    data-aos-duration="1000">
              <h5>Standardized Test Preparation:</h5>
              <p>
                Access resources and advice from students who have excelled on
                standardized tests such as the SAT, ACT, GRE, and TOEFL.
              </p>
            </div>
            <div className="inner3"
            data-aos="fade-left"
            data-aos-duration="1000">
              <h5>Extracurricular Planning:</h5>
              <p>
                Get guidance on identifying and pursuing extracurricular
                activities that align with your interests and enhance your
                college applications, based on the experiences of our student
                advisors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services4 container">
        <h2>Get Started Today!</h2>

        <p>
          Connect with our team of student advisors and embark on your
          educational journey with confidence. Whether you're in need of
          university selection assistance, scholarship guidance, or additional
          support, Education Consultancy is here to help you succeed. Contact us
          today to learn more and get started on the path to achieving your
          academic goals.
        </p>
      </div>
    </>
  );
};
