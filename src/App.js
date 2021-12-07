import {
  Button,
  FlexibleColumnLayout,
  List,
  StandardListItem,
  Avatar,
  Label,
  Title,
  Icon,
  ThemeProvider
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import "./App.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import oMidColumn, { oMidColumnMap } from "./components";

function App() {
  const [midColumnElenent, setMidColumnElenent] = useState(
    oMidColumn[oMidColumnMap.Education]
  );

  useEffect(() => {
    const oList = document.getElementById("col1list");
    const oLayout = document.getElementById("fcl");
    const listener = oList.addEventListener("item-click", function (oEvent) {
      const sItemId = oEvent.detail.item.id;
      const sNewMidColumnElenent = oMidColumn[sItemId];
      setMidColumnElenent(sNewMidColumnElenent);

      oLayout.layout = "TwoColumnsMidExpanded";
    });

    return oList.removeEventListener("item-click", listener);
  }, []);

  return (
    <ThemeProvider>
      <FlexibleColumnLayout id="fcl" className="resume__flexible-column-layout">
        <div slot="startColumn" className="resume__start-column">
          <div className="resume__header-info">
            <Avatar
              size="XL"
              shape="Square"
              className="resume__avatar resume__margin-bottom"
            >
              <img
                src="./MartinGeorgiev.jpeg"
                alt="Martin Georgiev"
                className="resume__avatar-image"
              />
            </Avatar>
            <Title level="H1" className="resume__margin-bottom">
              Martin Georgiev
            </Title>
            <Icon
              name="horizontal-grip"
              className="resume__margin-bottom"
            ></Icon>
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
            <List id="col1list">
              <StandardListItem
                id={oMidColumnMap.Education}
                icon="study-leave"
                additional-text=">"
                additional-text-state="Information"
              >
                EDUCATION
              </StandardListItem>
              <StandardListItem
                id={oMidColumnMap.Experience}
                icon="business-card"
                additional-text=">"
                additional-text-state="Information"
              >
                WORK EXPERIENCE
              </StandardListItem>
              <StandardListItem
                id={oMidColumnMap.Skills}
                icon="activities"
                additional-text=">"
                additional-text-state="Information"
              >
                SKILLS
              </StandardListItem>
              <StandardListItem
                id={oMidColumnMap.Interests}
                icon="globe"
                additional-text=">"
                additional-text-state="Information"
              >
                INTERESTS
              </StandardListItem>
            </List>
          </div>
        </div>

        <div slot="midColumn" className="resume__mid-column">
          {midColumnElenent}
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
    </ThemeProvider>
  );
}

export default App;
