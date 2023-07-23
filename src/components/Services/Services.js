import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
          I have extensive experience in developing web applications using the MERN stack (MongoDB, Express, React and Node.js), as well as performing data analysis using Python and various libraries. I can create responsive and user-friendly front-end interfaces, as well as robust and scalable back-end solutions. I am proficient in HTML, CSS, JavaScript, Bootstrap, and other web technologies. I am also skilled in using tools such as Git, GitHub, VS Code. I am passionate about learning new skills and technologies to enhance my portfolio and deliver high-quality services to my clients.
          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>MERN Stack</h3>
              <p>
              I have developed several projects using the MERN stack, such as a social media platform, a blog site, and a e-commerce store. I am passionate about learning new technologies and creating user-friendly and responsive web interfaces
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Front-End Development</h3>
              <p>
              I have a strong knowledge of HTML, CSS, JavaScript, and various frameworks and libraries such as React, Bootstrap, and jQuery. I am proficient in using web development tools such as Git, VS Code, and Chrome DevTools.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Data Analysis</h3>
              <p>
              I have strong skills in Python, SQL, R, and various data visualization tools. I have successfully delivered data-driven solutions for clients in various domains, such as e-commerce, healthcare, and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
