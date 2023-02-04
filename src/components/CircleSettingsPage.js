import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function CircleSettingsPage() {
  const navigate = useNavigate();
  const myCircleMembers = [
    { _id: 1, nickName: "Nir", ProfileImage: "", admin: false },
    { _id: 2, nickName: "Payal", ProfileImage: "", admin: false },
    { _id: 3, nickName: "Anna", ProfileImage: "", admin: true },
  ];

  const CircleSettingsOverrides = {
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/userSettings"),
    },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },

    // EditIcon:{
    //     className: "custom-btn",
    //     onClick: () => navigate("/dashboard"),
    //   },
    InviteNewMemberButton: {
      className: "custom-btn",
      onClick: () => navigate("/sendinvite"),
    },
    DeleteIcon: {
      className: "custom-btn",
      onClick: () => alert("Deleted"),
    },
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={CircleSettingsOverrides}
        />
        {myCircleMembers?.map((item, key) => (
          <div key={item.id}>
            <CircleSettingsMember
              key={item.id}
              overrides={
                (CircleSettingsOverrides,
                { MemberName: { children: item.nickName } })
              }
            />
          </div>
        ))}
      </Flex>
    </div>
  );
}

export default CircleSettingsPage;
