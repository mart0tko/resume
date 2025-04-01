import { Tag, Title } from "@ui5/webcomponents-react";
import "./Interests.css";

function Interests() {
  return (
    <div>
      <Title level="H1"><b>Interests</b></Title>
      <br/>
      <br/>
      <Tag className="resume__interests-Tag" color-scheme="7">Family</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Programming</Tag>
      <Tag className="resume__interests-Tag" color-scheme="6">Programming Architecture</Tag>
      <br/>
      <Tag className="resume__interests-Tag" color-scheme="7">Investing</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Cars</Tag>
      <Tag className="resume__interests-Tag" color-scheme="6">Fishing</Tag>
      <br/>
      <Tag className="resume__interests-Tag" color-scheme="7">Taekwondo</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Kickboxing</Tag>
      <Tag className="resume__interests-Tag" color-scheme="6">Fitness</Tag>
      <br/>
      <Tag className="resume__interests-Tag" color-scheme="7">Politics</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Properties</Tag>
      <Tag className="resume__interests-Tag" color-scheme="6">Music</Tag>
      <br/>
      <Tag className="resume__interests-Tag" color-scheme="7">Movies</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Friends</Tag>
      <Tag className="resume__interests-Tag" color-scheme="1">Good Food</Tag>
      <br/>
    </div>
  );
}

export default Interests;
