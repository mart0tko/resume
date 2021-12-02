import { Title, Link } from "@ui5/webcomponents-react";
import "./Education.css";

function Education() {
  return (
    <div>
      <Title level="H1"><b>Education</b></Title>
      <br/>
      <br/>
      <Title level="H3" className="resume__education-label">
        <b>School: </b>High School of Computers & Technologies - Pravets
      </Title>
      <Title level="H3" className="resume__education-label">
        <b>University: </b>Sofia University - B.S. Textile Technology and Engineering
      </Title>
      <Title level="H3" className="resume__education-label">
        <b>SoftUni: </b>JS Web Developer <Link className="resume__education-link" target="_blank" href="https://softuni.bg/certificates/details/51087/2917249b">Diploma</Link>
      </Title>
    </div>
  );
}

export default Education;
