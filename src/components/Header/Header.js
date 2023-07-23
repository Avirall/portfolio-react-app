import React from 'react';
import Typical from 'react-typical';
import "./Header.css";
import profile0img from "../../assets/profile.png";
const Header = () => {
  return (
    <div className='header-container'>
        {/* header content */}
        <div className='header-content'>
            <h1> Hi! I'm </h1>
            <h2 className='fullname'>Aviral Singh</h2>
            <h2>
                I'm a {""}
                <Typical
                
                steps={['Front End Developer',1000,'React End Developer',1000,'MERN Stack Developer',1000,'Data Analyst',1000,]} 
                loop={Infinity}
                wrapper='b'
                />
            </h2>
            <p>
            I am a data analyst and MERN stack developer with experience in Java, Python and front-end technologies. I have a strong background in data analysis, visualization and reporting, as well as web development using MongoDB, Express, React and Node.js. I am proficient in using various tools and frameworks such as pandas, matplotlib, JavaScipt, Bootstrap and numpy. I am passionate about finding insights from data and creating user-friendly web applications that deliver value to clients and users.
            </p>
            <div className='header-payment-container'>
              <button>Hire Me</button>
              <i className='fa-brands fa-paypal'></i>
              <i className='fa-brands fa-cc-visa'></i>
              <i className='fa-brands fa-cc-mastercard'></i>
              <i className='fa-brands fa-cc-amex'></i>
            </div>
        </div>
        {/* Image container */}
       <div className='profile-img-container'>
        <img src={profile0img} alt='profile img' />
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        </div> 
    </div>
  )
}

export default Header