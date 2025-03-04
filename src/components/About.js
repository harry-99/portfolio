import React from "react";
import mypic2 from "./mypic2.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
          Hello! I’m Hari Om, a passionate and dedicated full stack developer
          with over 3 years of experience in building dynamic and responsive web
          applications. My expertise spans across both front-end and back-end
          technologies, allowing me to create seamless and efficient user
          experiences.
        </p>
        <p>
          On the front-end, I specialize in HTML, CSS, JavaScript, and modern
          frameworks and libraries like React and Angular. I enjoy crafting
          intuitive and visually appealing interfaces that enhance user
          engagement and satisfaction.
        </p>
        <p>
          On the back-end, I have extensive experience with Python, Node.js,
          Express, and databases such as MongoDB and SQL. I excel in designing
          robust and scalable server-side applications, ensuring optimal
          performance and security.
        </p>
        <p>
          Currently I am working as 'Senior Software Engineer' at LTIMindtree.
          My current assignment is a generative AI application, where users can
          select models and create genAI application of their choice as per
          their need.
        </p>
        <p>
          I thrive in collaborative environments and have a proven track record
          of working effectively with cross-functional teams to deliver
          high-quality projects on time. My problem-solving skills and attention
          to detail enable me to tackle complex challenges and continuously
          improve my coding practices.
        </p>
        <p>
          When I’m not coding, you can find me exploring the latest tech trends,
          contributing to open-source projects, or enjoying outdoor activities
          like hiking and cycling, and sometimes gaming.
        </p>
        <p>Let’s connect and create something amazing together!</p>
      </div>
      <div className="right">
        <div className="image-container">
          <img id="dp" src={mypic2} alt="" />
        </div>
      </div>
    </div>
  );
}
