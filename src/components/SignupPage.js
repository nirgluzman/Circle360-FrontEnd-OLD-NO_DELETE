import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Alert, Button, Flex, TextField } from "@aws-amplify/ui-react";
import { Signup } from "../ui-components";
import { Auth } from "aws-amplify";

import logo from "../images/logo.png";
import { styles } from "../utils/amplifyStyles";

function SignupPage({ onSignin }) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getVerificationCode, setGetVerificationCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState(null);
  const [sucessSignup, setSucessSignup] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      setError(null);
      setGetVerificationCode(false);
      setSucessSignup(false);
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: { nickname },
        autoSignIn: { enabled: true },
      });
      setGetVerificationCode(true);
    } catch (e) {
      setError(e.message);
      console.log("error signing up:", e.code);
    }
  };

  const confirmVerificationCodeHandler = async () => {
    try {
      setError(null);
      setGetVerificationCode(false);
      await Auth.confirmSignUp(email, verificationCode);
      setSucessSignup(true);
    } catch (e) {
      setError(e.message);
      console.log("error confirming sign up", e.code);
    }
  };

  const SignupOverrides = {
    Logo: {
      src: logo,
    },

    NicknameTextField: {
      type: "text",
      onChange: (e) => setNickname(e.target.value),
    },

    EmailTextField: {
      type: "email",
      onChange: (e) => setEmail(e.target.value),
    },

    PasswordTextField: {
      type: "password",
      onChange: (e) => setPassword(e.target.value),
    },

    SignupButton: {
      onClick: () => signupHandler(),
    },
  };

  return (
    <>
      <Signup style={styles.center} overrides={SignupOverrides} />
      {error && (
        <Alert
          style={styles.signupMessages}
          variation="error"
          isDismissible={true}
        >
          {error}
        </Alert>
      )}
      {getVerificationCode && (
        <Flex
          direction="row"
          justifyContent="center"
          style={styles.signupMessages}
        >
          <TextField
            labelHidden={true}
            placeholder="Enter your verification code"
            type={"text"}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <Button
            variation="primary"
            onClick={() => confirmVerificationCodeHandler()}
          >
            Send
          </Button>
        </Flex>
      )}
      {sucessSignup && (
        <Alert
          style={styles.signupMessages}
          variation="success"
          isDismissible={true}
        >
          Signup successful
        </Alert>
      )}
    </>
  );
}

export default SignupPage;
