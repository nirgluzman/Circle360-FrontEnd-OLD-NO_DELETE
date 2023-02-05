import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";

export default function CircleSettingsPage({ myCircles }) {
  console.log("Circles", myCircles);
  const { _id } = useParams();
  console.log("id", _id);
  const navigate = useNavigate();

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={{
            GroupName: { children: myCircles[_id - 1].groupName },
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

        {myCircles[_id - 1].users?.map((item, key) => (
          <div key={item._id}>
            <CircleSettingsMember
              key={item._id}
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
