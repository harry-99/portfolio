import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGithub,
  SiAngular,
  SiMysql,
  SiJava,
  SiTypescript,
  SiSelenium,
} from "react-icons/si";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="skills-container">
      <SkillCard icon={<AiFillHtml5 />} language="HTML" />
      <SkillCard icon={<IoLogoCss3 />} language="CSS" />
      <SkillCard icon={<IoLogoJavascript />} language="JavaScript" />
      <SkillCard icon={<BsFillBootstrapFill />} language="Bootstrap" />
      <SkillCard icon={<FaReact />} language="React.js" />
      <SkillCard icon={<SiRedux />} language="Redux" />
      <SkillCard icon={<SiAngular />} language="Angular" />
      <SkillCard icon={<SiTypescript />} language="TypeScript" />
      <SkillCard icon={<SiSelenium />} language="Selenium" />
      <SkillCard icon={<FaNodeJs />} language="Node.js" />
      <SkillCard icon={<SiExpress />} language="Express.js" />
      <SkillCard icon={<SiMysql />} language="MySQL" />
      <SkillCard icon={<SiMongodb />} language="mongoDB" />
      <SkillCard icon={<SiPython />} language="Python" />
      <SkillCard icon={<SiJava />} language="Java" />
      <SkillCard icon={<SiGithub />} language="Github" />
    </div>
  );
}
