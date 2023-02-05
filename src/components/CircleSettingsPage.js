import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { myCircles } from "../App";

function CircleSettingsPage({ myCircles }) {
  console.log("Circles", myCircles);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={{
            GroupName: { children: myCircles[0].groupName },
            ProfileImage: {
              alt: "Circle360 logo",
              src: logo,
              onClick: () => navigate("/userSettings"),
            },
            BackIcon: {
              className: "custom-btn",
              onClick: () => navigate("/dashboard"),
            },
            InviteNewMemberButton: {
              className: "custom-btn",
              onClick: () => navigate("/sendinvite"),
            },
          }}
        />
        {myCircles.users?.map((item, key) => (
          <div key={item.id}>
            <CircleSettingsMember
              key={item.id}
              overrides={{
                MemberName: { children: item.nickName },
                DeleteIcon: {
                  className: "custom-btn",
                  onClick: () => alert("Deleted"),
                },
              }}
            />
          </div>
        ))}
      </Flex>
    </div>
  );
}

export default CircleSettingsPage;
