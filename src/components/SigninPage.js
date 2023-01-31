import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Signin } from "../ui-components";
import { Auth } from "aws-amplify";

import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";

function SigninPage({ onSignin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinHandler = async () => {
    try {
      const user = await Auth.signIn(email, password);
      navigate("/dashboard");
      onSignin();
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const SigninOverrides = {
    Logo: {
      src: logo,
    },

    EmailTextField: {
      type: "email",
      onChange: (e) => setEmail(e.target.value),
    },

    PasswordTextField: {
      type: "password",
      onChange: (e) => setPassword(e.target.value),
    },

    SigninButton: {
      onClick: () => signinHandler(),
    },

    SignupButton: {
      onClick: () => navigate("/signup"),
    },
  };

  return (
    <div>
      <Signin style={styles.center} overrides={SigninOverrides} />
    </div>
  );
}

export default SigninPage;
