import React from "react";
import styled from "styled-components";

const ToggleBannerStyled = styled.section`
  display: flex;
  width: 100%;
  border: 1px solid black;
  padding: 0.5em 5em;
  margin: 0 2em;
  align-items: center;
  justify-content: center;
  gap: 4em;

  p {
    margin: 0;
  }

  button {
    background-color: black;
    color: white;
    padding: 1em 2em;
  }

  button:hover {
    background-color: #2f3032;
  }
`;

export default function ToggleBanner(props) {
  const { setShowTreeMenu, showTreeMenu } = props;
  return (
    <ToggleBannerStyled>
      <p>Switch to the new Tree view</p>
      <button onClick={() => setShowTreeMenu(!showTreeMenu)}>Tree Menu</button>
    </ToggleBannerStyled>
  );
}
