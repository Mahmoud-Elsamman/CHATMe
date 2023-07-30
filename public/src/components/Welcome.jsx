import React from "react";
import { styled } from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt='Robot' />
      <h2>
        Welcome, <span>{currentUser.username}!</span>
      </h2>
      <h4>Please select a chat to start messaging.</h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 15rem;
  }
  span {
    color: #4e0eff;
  }
`;
