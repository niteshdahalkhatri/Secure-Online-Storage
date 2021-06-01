import React, { useRef, useState } from "react";
import * as s from "./styles/UpdateProfile.style";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account | use strong passwords");
        setTimeout(() => {
          setError("");
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <s.ProfileBackground>
        <Link to="/dashboard">
          <s.Logo />
        </Link>
        <s.LogoText>{"Email : " + currentUser.email} </s.LogoText>

        {error && <s.ErrorDisplay>{error}</s.ErrorDisplay>}
        <s.ModalContent>
          <s.ModalForm onSubmit={handleSubmit}>
            <s.ModalLabel htmlFor="email">Email Address</s.ModalLabel>
            <s.ModalInput
              ref={emailRef}
              required
              type="email"
              name="email"
              id="email"
              defaultValue={currentUser.email}
            />

            <s.ModalLabel htmlFor="password">Password</s.ModalLabel>
            <s.ModalInput
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Leave Blank to keep the same Password"
            />

            <s.ModalLabel htmlFor="ConfirmPassword">
              Confirm Password
            </s.ModalLabel>
            <s.ModalInput
              ref={passwordConfirmRef}
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              placeholder="Leave Blank to keep the same Password"
            />
            <s.ModalButton disabled={loading} type="submit">
              Update Profile
            </s.ModalButton>
          </s.ModalForm>
        </s.ModalContent>
      </s.ProfileBackground>
    </>
  );
}

export default UpdateProfile;
