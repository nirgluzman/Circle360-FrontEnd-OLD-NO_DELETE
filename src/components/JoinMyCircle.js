import { JoinCircle } from "../ui-components";
import { useState } from "react";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";

export default function JoinMyCircle() {
  const navigate = useNavigate();
  const [invitationCode, setInvitationCode] = useState("");

  const JoinMyCircleOverrides = {
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
    JoinCircleField: {
      type: "text",
      onChange: (e) => setInvitationCode(e.target.value),
    },
    /*JoinButton: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    }*/
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <JoinCircle style={styles.center} overrides={JoinMyCircleOverrides} />
      </Flex>
    </div>
  );
}
