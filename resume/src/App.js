import {
  Button,
  FlexibleColumnLayout,
  List,
  Avatar,
  Label,
  Title,
  Icon,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import "./App.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const oMidColumnMap = {
  education: "education",
  experience: "experience",
  skills: "skills",
  languages: "languages",
  interests: "interests"
}

function App() {
  const [midColumnState, setMidColumnState] = useState("test");

  useEffect(() => {
    const oList = document.getElementById("col1list");
    const oLayout = document.getElementById("fcl");
    const listener = oList.addEventListener("item-click", function (oEvent) {
      const sItemId = oEvent.detail.item.id;
      const sNewMidColumnState = oMidColumnMap[sItemId];
      setMidColumnState(sNewMidColumnState);
      console.log(oMidColumnMap[sItemId], midColumnState, "A");
      oLayout.layout = "TwoColumnsMidExpanded";
    });

    return oList.removeEventListener("item-click", listener);
  }, []);

  return (
    <FlexibleColumnLayout id="fcl" className="resume__flexible-column-layout">
      <div slot="startColumn" className="resume__start-column">
        <div className="resume__header-info">
          <Avatar size="XL" className="resume__avatar resume__margin-bottom">
            <img
              src="./MartinGeorgiev.jpeg"
              alt="Martin Georgiev"
              className="resume__avatar-image"
            />
          </Avatar>
          <Title level="H1" className="resume__margin-bottom">
            Martin Georgiev
          </Title>
          <Icon name="horizontal-grip" className="resume__margin-bottom"></Icon>
          <Title level="H4" className="resume__margin-bottom">
            JavaScript Developer
          </Title>
          <Label className="resume__margin-bottom">
            <b>Email:</b> m.georgievv@gmail.com
          </Label>
          <Label className="resume__margin-bottom">
            <b>Phone:</b> +359890117331
          </Label>
        </div>
        <div className="resume__header-list">
          <List id="col1list" className="resume__list">
            <ui5-li
              id={oMidColumnMap.education}
              className="resume__list-item"
              icon="study-leave"
              additional-text=">"
              additional-text-state="Information"
            >
              EDUCATION
            </ui5-li>
            <ui5-li
              id={oMidColumnMap.experience}
              className="resume__list-item"
              icon="business-card"
              additional-text=">"
              additional-text-state="Information"
            >
              WORK EXPERIENCE
            </ui5-li>
            <ui5-li
              id={oMidColumnMap.skills}
              className="resume__list-item"
              icon="activities"
              additional-text=">"
              additional-text-state="Information"
            >
              SKILLS
            </ui5-li>
            <ui5-li
              id={oMidColumnMap.languages}
              className="resume__list-item"
              icon="world"
              additional-text=">"
              additional-text-state="Information"
            >
              LANGUAGES
            </ui5-li>
            <ui5-li
              id={oMidColumnMap.interests}
              className="resume__list-item"
              icon="globe"
              additional-text=">"
              additional-text-state="Information"
            >
              INTERESTS
            </ui5-li>
          </List>
        </div>
      </div>

      <div slot="midColumn">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
      </div>
      <div slot="endColumn">
        <div className="colHeader">
          <Button design="Emphasized">Edit</Button>
        </div>

        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod..."
        </p>
      </div>
    </FlexibleColumnLayout>
  );
}

export default App;
