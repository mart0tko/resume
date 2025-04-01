import {
  Button,
  FlexibleColumnLayout,
  List,
  ListItemStandard,
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

  // List items handler
  useEffect(() => {
    const oList = document.getElementById("col1list");
    const oLayout = document.getElementById("fcl");
    const fnListListener = oList.addEventListener("item-click", function (oEvent) {
      const sItemId = oEvent.detail.item.id;
      const sNewMidColumnElenent = oMidColumn[sItemId];
      setMidColumnElenent(sNewMidColumnElenent);

      oLayout.layout = "TwoColumnsMidExpanded";
    });

    return oList.removeEventListener("item-click", fnListListener);
  }, []);

  // Back button handler
  useEffect(() => {
    const oLayout = document.getElementById("fcl");
    const oBackBtn = document.getElementsByClassName("resume__mid-column-btn")[0];
    const fnBackBtnListener = oBackBtn.addEventListener("click", function () {
      oLayout.layout = "OneColumn";
    });

    return oBackBtn.removeEventListener("item-click", fnBackBtnListener);
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
              <ListItemStandard
                id={oMidColumnMap.Education}
                icon="study-leave"
                additional-text=">"
                additional-text-state="Information"
              >
                EDUCATION
              </ListItemStandard>
              <ListItemStandard
                id={oMidColumnMap.Experience}
                icon="business-card"
                additional-text=">"
                additional-text-state="Information"
              >
                WORK EXPERIENCE
              </ListItemStandard>
              <ListItemStandard
                id={oMidColumnMap.Skills}
                icon="activities"
                additional-text=">"
                additional-text-state="Information"
              >
                SKILLS
              </ListItemStandard>
              <ListItemStandard
                id={oMidColumnMap.Interests}
                icon="globe"
                additional-text=">"
                additional-text-state="Information"
              >
                INTERESTS
              </ListItemStandard>
            </List>
          </div>
        </div>

        <div slot="midColumn" className="resume__mid-column">
          {midColumnElenent}
          <Button className="resume__mid-column-btn" icon="nav-back" title="Go back"></Button>
        </div>
      </FlexibleColumnLayout>
    </ThemeProvider>
  );
}

export default App;
