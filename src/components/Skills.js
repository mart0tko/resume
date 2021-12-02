import { RatingIndicator, Label, Title } from "@ui5/webcomponents-react";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <Title level="H1"><b>Skills</b></Title>
      <br/>
      <br/>
      <Label className="resume__skills-label">
        JavaScript: <RatingIndicator value="5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        HTML: <RatingIndicator value="5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        CSS: <RatingIndicator value="5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Git: <RatingIndicator value="5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        UI5: <RatingIndicator value="3" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Ember: <RatingIndicator value="3" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Angular: <RatingIndicator value="3" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        React: <RatingIndicator value="3" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        React Native: <RatingIndicator value="2.5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Node.js: <RatingIndicator value="2.5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Azure: <RatingIndicator value="1.5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        Docker: <RatingIndicator value="1.5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        MongoDB: <RatingIndicator value="1.5" readonly />
      </Label>
      <br/>
      <Label className="resume__skills-label">
        SQL: <RatingIndicator value="1" readonly />
      </Label>
      <br/>
    </div>
  );
}

export default Skills;
