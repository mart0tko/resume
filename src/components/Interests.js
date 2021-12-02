import { Badge, Title } from "@ui5/webcomponents-react";
import "./Interests.css";

function Interests() {
  return (
    <div>
      <Title level="H1"><b>Interests</b></Title>
      <br/>
      <br/>
      <Badge className="resume__interests-badge" color-scheme="7">Family</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Programming</Badge>
      <Badge className="resume__interests-badge" color-scheme="6">Programming Architecture</Badge>
      <br/>
      <Badge className="resume__interests-badge" color-scheme="7">Investing</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Cars</Badge>
      <Badge className="resume__interests-badge" color-scheme="6">Fishing</Badge>
      <br/>
      <Badge className="resume__interests-badge" color-scheme="7">Taekwondo</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Kickboxing</Badge>
      <Badge className="resume__interests-badge" color-scheme="6">Fitness</Badge>
      <br/>
      <Badge className="resume__interests-badge" color-scheme="7">Politics</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Properties</Badge>
      <Badge className="resume__interests-badge" color-scheme="6">Music</Badge>
      <br/>
      <Badge className="resume__interests-badge" color-scheme="7">Movies</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Friends</Badge>
      <Badge className="resume__interests-badge" color-scheme="1">Good Food</Badge>
      <br/>
    </div>
  );
}

export default Interests;
