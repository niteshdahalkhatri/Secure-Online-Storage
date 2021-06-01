import React, { useRef, useState } from "react";
import * as s from "./styles/Login.styles";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to Sign in | Check your email & password");
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setLoading(false);
  }
  return (
    <>
      <s.LoginBackground>
        <s.Logo to="/">SOS</s.Logo>
        <s.LogoText>Sign in to SOS</s.LogoText>

        <s.ModalWrapper>
          {error && <s.ErrorDisplay>{error}</s.ErrorDisplay>}
          <s.ModalContent>
            <s.ModalForm onSubmit={handleSubmit}>
              <s.ModalLabel htmlFor="email">Email Address</s.ModalLabel>
              <s.ModalInput
                ref={emailRef}
                type="email"
                autoFocus
                name="email"
                id="email"
                required
              />

              <s.ModalLabel htmlFor="password">Password</s.ModalLabel>
              <s.ModalInput
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                required
              />
              <s.ModalButton disabled={loading} type="submit">
                Login
              </s.ModalButton>
            </s.ModalForm>
          </s.ModalContent>
        </s.ModalWrapper>
        <s.BottomWrapper>
          <p>
            Don't have an account?
            <s.SignUpLink to="/register">SignUp</s.SignUpLink> |
          </p>
          <s.ForgotPassLink to="/forgot-password">
            Forgot Password?
          </s.ForgotPassLink>
        </s.BottomWrapper>
      </s.LoginBackground>
    </>
  );
}

export default Login;
