import React, { useRef, useState } from "react";
import * as s from "./styles/Login.styles";
import * as f from "./styles/ForgotPassword.style";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your mail inbox for password reset");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch {
      setError("Failed to reset the password");
    }

    setLoading(false);
  }

  return (
    <>
      <s.LoginBackground>
        <s.Logo to="/">SOS</s.Logo>
        <s.LogoText>Sign in to SOS</s.LogoText>

        <f.ModalWrapper>
          {error && <s.ErrorDisplay>{error}</s.ErrorDisplay>}
          {message && <f.MessageDisplay>{message}</f.MessageDisplay>}
          <f.ModalContent>
            <s.ModalForm onSubmit={handleSubmit}>
              <f.ModalLabel htmlFor="email">Email Address</f.ModalLabel>
              <f.ModalInput
                ref={emailRef}
                type="email"
                autoFocus
                name="email"
                id="email"
                required
              />
              <s.ModalButton disabled={loading} type="submit">
                Reset
              </s.ModalButton>
            </s.ModalForm>
          </f.ModalContent>
        </f.ModalWrapper>
        <s.BottomWrapper>
          <p>
            Don't have an account?
            <s.SignUpLink to="/register">SignUp</s.SignUpLink> |{" "}
            <s.ForgotPassLink to="/login">Login</s.ForgotPassLink>
          </p>
        </s.BottomWrapper>
      </s.LoginBackground>
    </>
  );
}

export default Login;
