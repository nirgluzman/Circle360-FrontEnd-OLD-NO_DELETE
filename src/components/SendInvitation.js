import { useState } from "react";
import { SendInvite } from "../ui-components";
import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";
import { Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function SendInvitation() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const SendInvitationOverrides = {
    EmailTextField: {
      type: "email",
      onChange: (e) => setEmail(e.target.value),
    },
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    SendInviteButton: {
      className: "custom-btn",
      onClick: () => alert("added"),
    },
    BackIcon: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    },
    /*JoinButton: {
      className: "custom-btn",
      onClick: () => navigate("/dashboard"),
    }*/
  };
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <SendInvite style={styles.center} overrides={SendInvitationOverrides} />
      </Flex>
    </div>
  );
}
