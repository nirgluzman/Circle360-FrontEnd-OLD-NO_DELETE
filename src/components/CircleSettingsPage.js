import { CircleSettingsHeader } from "../ui-components";
import { CircleSettingsMember } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function CircleSettingsPage() {
  const navigate = useNavigate();

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
    /*DeleteIcon: {
        className: "custom-btn",
    //    onClick: () => {},
      }*/
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <CircleSettingsHeader
          style={styles.center}
          overrides={CircleSettingsOverrides}
        />
        <CircleSettingsMember />
      </Flex>
    </div>
  );
}

export default CircleSettingsPage;
