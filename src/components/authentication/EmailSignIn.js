import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase";
import { useFolder } from "../../hooks/useFolder";

const Container = styled.section`
  background: rgba(12, 17, 23);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;
const Logo = styled(Link)`
  color: rgb(231, 230, 221);
  font-size: 8rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  margin-top: -8rem;
  margin-bottom: 1rem;
`;
const Span = styled.span`
  color: rgb(231, 230, 221);
  width: 80rem;
  font-size: 3rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 300;
  margin: 1rem 0;
  text-align: justify;
  display: inline;

  a {
    display: inline;
    color: blue;
    margin-left: 1rem;
    text-decoration: underline;
  }
  p {
    display: inline;
    color: blue;
    margin-left: 1rem;
    margin-right: 1rem;
    text-decoration: underline;
  }
`;

function EmailSignIn() {
  const { emailSignIn } = useAuth();
  const { users } = useFolder();
  const email = window.localStorage.getItem("emailForSignIn");
  function sendLink() {
    const user = users.find((user) => user.email === email);
    emailSignIn(email, {
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
    })
      .then(() => {
        database.users.doc(user.id).update({
          verified: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Container>
        <Logo to="/">SOS</Logo>
        <Span>
          Send Sign in Link to email ? <p onClick={sendLink}>Send link</p>.
          Without sending the sign in link, you will not be able to access your
          account. Please check your mail for the sign in link after sending it.
          If You did not received any email,
          <a href="/contact-us">Contact Us.</a>
        </Span>
      </Container>
    </>
  );
}

export default EmailSignIn;
