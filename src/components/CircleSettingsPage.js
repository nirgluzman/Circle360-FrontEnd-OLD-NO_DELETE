import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function CircleSettingsPage({ userData, groupData }) {
  const [groupName, setGroupName] = useState("");
  const { _id } = useParams();
  console.log("id", _id);
  const navigate = useNavigate();

  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        {myCircles.length !== 0 ? (
          <CircleSettingsHeader
            style={styles.center}
            overrides={{
              GroupField: {
                placeholder: myCircles[_id - 1].groupName,
                onChange: (e) => setGroupName(e.target.value),
              },
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
              EditIcon: {
                className: "custom-btn",
                // onClick: () => navigate("/sendinvite"),
              },
            }}
          />
        ) : (
          <CircleSettingsHeader
            style={styles.center}
            overrides={{
              GroupField: { placeholder: "group" },
            }}
          />
        )}

        {myCircles[_id - 1].users ? (
          myCircles[_id - 1].users.map((item, key) => (
            <div key={item._id}>
              <CircleSettingsMember
                key={item._id}
                overrides={{
                  MemberName: { placeholder: item.nickName },
                  DeleteIcon: {
                    className: "custom-btn",
                    onClick: () => alert("Deleted"),
                  },
                }}
              />
            </div>
          ))
        ) : (
          <h1>No users in this group</h1>
        )}
      </Flex>
    </div>
  );
}
// {myCircle.length ? (sdfdgggsdg) : (hghghg())}
//{myCircle ? myCirclemap((data)=>()) : ()}
