import { Label, Link } from "@ui5/webcomponents-react";
import "./Education.css";

function Education() {
  return (
    <div>
      <h1 className="resume__education-title">Education</h1>
      <br/>
      <br/>
      <p level="H3" className="resume__education-label">
        <b>School: </b>High School of Computers & Technologies - Pravets
      </p>
      <p level="H3" className="resume__education-label">
        <b>University: </b>Sofia University - B.S. Textile Technology and Engineering
      </p>
      <p level="H3" className="resume__education-label">
        <b>SoftUni: </b>JS Web Developer <Link className="resume__education-link" target="_blank" href="https://softuni.bg/certificates/details/51087/2917249b">Diploma</Link>
      </p>
    </div>
  );
}

export default Education;
