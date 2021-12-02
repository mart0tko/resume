import { Title, Label, Icon, Link } from "@ui5/webcomponents-react";
import "./Experience.css";

function Experience() {
  return (
    <div className="resume__experience">
      <Title level="H1" className="resume__margin">
        Experience
      </Title>
      {/* Fourth */}
      <div className="resume__experience-section resume__margin">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> JavaScript Developer
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> Fourth
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 03/2021 - Ongoing
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>
              Front End development of menu cycle platform with Ember.js.
              <Link
                target="_blank"
                href="https://www.fourth.com/recipe-nutrition-menu-engineering/"
              >
                Product Page
              </Link>
            </li>
            <li>Development and maintenance of Internal Statistics Infrastructure. Docker container with Node.js REST API, Node.js job runner, UI5 Front End client, MongoDB database.</li>
            <li>Developing Web Components with HTML, CSS and JavaScript.</li>
            <li>
              Used technologies: Scrum, Ember.js, JavaScript, HTML, CSS, Git, Rally.
            </li>
          </ul>
        </Label>
      </div>
      {/* SAP */}
      <div className="resume__experience-section resume__margin">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> JavaScript Developer
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> SAP
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 06/2019 - 02/2021
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>
              Front End UI5 Framework development.
              <Link
                target="_blank"
                href="https://github.com/SAP/openui5/commits?author=Martotko"
              >
                GitHub
              </Link>
            </li>
            <li>Development and maintenance of Internal Statistics Infrastructure. Docker container with Node.js REST API, Node.js job runner, UI5 Front End client, MongoDB database.</li>
            <li>Developing Web Components with HTML, CSS and JavaScript.</li>
            <li>
              Used technologies: Scrum, Node.js, Docker, MongoDB, JavaScript, HTML, CSS, Git, Jira.
            </li>
          </ul>
        </Label>
      </div>
      {/* Propy */}
      <div className="resume__experience-section resume__margin">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> JavaScript Developer
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> Propy
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 09/2018 - 05/2019
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>
              Developing crypto properties trading and listing platforms with Angular.
              <Link
                target="_blank"
                href="https://propy.com"
              >
                Propy
              </Link>
            </li>
            <li>
              Used technologies: Angular, JavaScript, HTML, CSS, Webpack, Git, Jira, Scrum, TypeScript.
            </li>
          </ul>
        </Label>
      </div>
      {/* Hakomo */}
      <div className="resume__experience-section resume__margin">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> Front End Developer
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> Hakomo
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 11/2017 - 09/2018
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>Developing outsourcing projects</li>
            <li>
              Developed a lot of features with Ionic and Angularjs for US
              laundry company.
            </li>
            <li>Developed a MVC React Native Bank trading application.</li>
            <li>
              Developed a bug tracking system application with React Native.
            </li>
            <li>
              Used technologies: Ionic, AngularJS, JavaScript, HTML, CSS, Grunt,
              Python, React Native, Git.
            </li>
          </ul>
        </Label>
      </div>
      {/* EGT */}
      <div className="resume__experience-section resume__margin">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> JavaScript Developer
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> EGT Interactive
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 04/2017 - 11/2017
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>Developing Online Casino Games.</li>
            <li>Using TypeScript to develop game engines.</li>
            <li>
              Used technologies: TypeScript, JavaScript, HTML, CSS, Git, Grunt.
            </li>
          </ul>
        </Label>
      </div>
      {/* BOR */}
      <div className="resume__experience-section">
        <Label className="resume__experience-title resume__margin">
          <b>Position:</b> Senior Marketing Research Project Manager
        </Label>
        <Label className="resume__experience-company resume__margin">
          <b>Company:</b> Bulgarian Online Research
        </Label>
        <Label className="resume__experience-date resume__margin">
          <Icon name="date-time" /> 07/2013 - 04/2017
        </Label>
        <Label className="resume__experience-description">
          <b>Duties: </b>
          <ul>
            <li>Leading Marketing Research Projects.</li>
            <li>Collaborating with other departments.</li>
            <li>Helping young colleagues.</li>
          </ul>
        </Label>
      </div>
    </div>
  );
}

export default Experience;
