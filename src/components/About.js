import React from "react";
import mypic2 from "./mypic2.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="right">
        <div className="image-container">
          <img id="dp" src={mypic2} alt="" />
        </div>
      </div>
      <div className="left">
        <h1>About Me</h1>
        <p>
          Hi, I m Hari Om a Full stack Web Developer, Freelancer and most
          importantly a Gamer in Free Time😁.
        </p>
        <p>
          Currently I am working as 'Senior SOftware Engineer' at LTIMindtree
        </p>
        <p>
          I love to learn new things, technologies which might help in solving
          day to day problems and motivate the society to do good and be good to
          others.
        </p>
        <p>
          When free I prefer to explore new places taking unexplored ways just
          to seek adventure😂
        </p>
        <p>
          Coming back to my curriculumn, I garduated in 2022, from NIT Durgapur.
          I completed my Intermediate from 'St. Michael's high school, Patna'
          and Matriculation from 'St. Mary's Academy, Patna'.
        </p>
        <p>
          And now along with the job that I am doing I am looking for better
          oppertunities to learn, develop and grow mutually with the firm or
          client
        </p>
        {/* <p>
        So first back in 2020 I initially took admission in a college, and
        decided to drop-out after a month, to do study on my own, to do
        something really big and to chase my dreams in my own way, this was a
        risk I know, but it started to work slowly and im learning new and
        latest technologies from internet, not the 60 years old stuff from
        college(pun intended). I'm not saying college is bad or like that. This
        is way i took and these are my personal openion.
      </p> */}
        {/* <p>
        Today I'm a Full Stack Web Developer with a 50k+ Subscribers YouTube
        channel and alot of freelance projects.
      </p> */}
      </div>
    </div>
  );
}
