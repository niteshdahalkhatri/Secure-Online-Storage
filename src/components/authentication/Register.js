import React, { useRef, useState } from "react";
import * as s from "./styles/Login.styles";
import * as r from "./styles/Register.style";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const TimeOut = (err) => {
    return (
      setError(err),
      setTimeout(() => {
        setError("");
      }, 2000)
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return TimeOut("Passwords do not match");
    }
    if (passwordRef.current.value.length <= 6) {
      return TimeOut("Passwords length is small");
    }

    try {
      setError("");
      setLoading(true);
      const cred = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      await database.users.add({
        uid: cred.user.uid,
        email: emailRef.current.value,
      });
      history.push("/dashboard");
    } catch {
      TimeOut("Failed to create an account | Use strong password");
    }

    setLoading(false);
  }
  return (
    <>
      <s.LoginBackground>
        <r.Logo to="/">SOS</r.Logo>
        <s.LogoText>Sign up to SOS</s.LogoText>
        <r.RegisterModalWrapper>
          {error && <s.ErrorDisplay>{error}</s.ErrorDisplay>}
          <s.ModalContent>
            <s.ModalForm onSubmit={handleSubmit}>
              <s.ModalLabel htmlFor="email">Email Address</s.ModalLabel>
              <s.ModalInput
                ref={emailRef}
                required
                type="email"
                autoFocus
                name="email"
                id="email"
              />

              <s.ModalLabel htmlFor="password">Password</s.ModalLabel>
              <s.ModalInput
                ref={passwordRef}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password should be more than 6 characters"
              />

              <s.ModalLabel htmlFor="ConfirmPassword">
                Confirm Password
              </s.ModalLabel>
              <s.ModalInput
                ref={passwordConfirmRef}
                required
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
              />
              <r.RegisterModalButton disabled={loading} type="submit">
                Register
              </r.RegisterModalButton>
            </s.ModalForm>
          </s.ModalContent>
        </r.RegisterModalWrapper>
        <s.BottomWrapper>
          <p>
            Already have an account?
            <s.SignUpLink to="/login"> Login</s.SignUpLink>
          </p>
        </s.BottomWrapper>
      </s.LoginBackground>
    </>
  );
}

export default Register;
