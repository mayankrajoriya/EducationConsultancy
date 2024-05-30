import React from "react";
import "./About.css";
import about1 from "../images/about1.png";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-text container">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="container about-1">
        <div className="about-1-text">
          <h2>
            About Education Consultancy
          </h2>
          <p>
            At Education Consultancy, we're driven by a passionate team
            committed to empowering individuals to pursue their educational
            dreams with confidence. With a deep understanding of the challenges
            and opportunities within the higher education landscape, our
            dedicated team works tirelessly to provide personalized guidance and
            support to students and parents alike, specializing in Ivy League
            universities, USA education, UK education, and foreign education
            options.
          </p>
        </div>
        <div>
          <img src={about1} alt="about" />
        </div>
      </div>
      <div className="about-2 container">
        <div className=" container about-2-section-1">
          <div>
            <img src={about2} alt="" />
          </div>
          <div className="section-1-text">
            <h2> Our Mission</h2>

            <p>
              Our mission is to democratize access to higher education by
              connecting students with the resources, support, and expertise
              they need to make informed decisions about their academic futures.
              We believe in fostering a culture of empowerment and inclusivity,
              ensuring that every individual has the opportunity to pursue their
              passions and achieve their full potential through education,
              regardless of their background or circumstances.
            </p>
          </div>
        </div>
        <div className=" container about-2-section-2">
          <div>
            <img src={about3} alt="about3" />
          </div>
          <div>
            <h2> What Sets Us Apart</h2>
            <h5>- Student-Centric Approach:</h5>
            <p>
              Our approach revolves around the needs of students, prioritizing
              their unique goals and aspirations. We understand that each
              student's journey is different, and our team is dedicated to
              providing personalized support tailored to their individual needs.
            </p>
            <h5>- Community of Experts:</h5>{" "}
            <p>
              Education Consultancy is fueled by a community of knowledgeable
              peers and mentors who are passionate about sharing their insights
              and experiences. By connecting students with current university
              students, we foster a supportive environment where individuals can
              learn from each other and thrive together.
            </p>
            <h5>- Innovative Solutions:</h5>{" "}
            <p>
              We are committed to staying at the forefront of innovation in
              higher education consulting. Our team continuously explores new
              ways to enhance the student experience, leveraging technology and
              best practices to deliver exceptional service and support.
            </p>
          </div>
        </div>
      </div>
      <div className="about-3 container">
        <h2> Get in Touch</h2>
        <p>
          Whether you're a student embarking on your educational journey or a
          parent seeking guidance for your child, our team is here to help.
          Contact us today to learn more about how Education Consultancy can
          support you in achieving your academic goals, whether at an Ivy League
          institution, a prestigious university in the USA or UK, or any other
          foreign education destination.
        </p>
      </div>
    </>
  );
};

export default About;
