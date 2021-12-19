import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useLocation } from "@reach/router";
import { Transition } from "react-transition-group";

const boxEnterAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(30px);
    opacity: 1;
  }
`;

const boxExitAnimation = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 1;
  }
100% {
  transform: translateY(-60px);
  opacity: 0;
}
`;

const ToggleBannerStyled = styled.section`
  display: flex;
  width: 100%;
  border: 1px solid black;
  padding: 0.5em 5em;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  border-radius: 25px;
  background-color: black;
  position: relative;
  z-index: 4;

  p {
    margin: 0;
    color: white;
  }

  button {
    background-color: white;
    color: black;
    padding: 0.2em 0.4em;
    border: none;
  }

  button:hover {
    color: white;
    background-color: #2f3032;
  }
`;

const DragMessage = styled.div`
  position: absolute;
  z-index: -1;
  text-align: center;
  width: 50%;
  top: 150%;
  background-color: black;
  color: white;
  border-radius: 25px;
  padding: 0.5em 3em;
  ${({ status }) =>
    (status === "entering" || status === "entered") &&
    css`
      animation-name: ${boxEnterAnimation};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}
  ${({ status }) =>
    status === "exiting" &&
    css`
      animation-name: ${boxExitAnimation};
      animation-duration: 2s;
    `}

    .closeBtn {
    background-color: white;
    color: #2f3032;
    margin-left: 1em;

    &:hover {
      background-color: #2f3032;
      color: white;
    }
  }
`;

export default function ToggleBanner(props) {
  const { setShowTreeMenu, showTreeMenu } = props;
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (showTreeMenu === true) {
      let timer1 = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer1);
    }
    return;
  }, [showTreeMenu]);

  return (
    <>
      {pathname === "/" && (
        <ToggleBannerStyled>
          {showTreeMenu ? <p>Switch to </p> : <p>Switch to the new </p>}

          <button onClick={() => setShowTreeMenu(!showTreeMenu)}>
            {showTreeMenu ? "Slider View" : "Tree View"}
          </button>
          {showTreeMenu && (
            <Transition in={show} timeout={2000} mountOnEnter unmountOnExit>
              {(status) => (
                <DragMessage status={status}>
                  Drag the Tree to explore!
                  <button className="closeBtn" onClick={() => setShow(false)}>
                    Close
                  </button>
                </DragMessage>
              )}
            </Transition>
          )}
        </ToggleBannerStyled>
      )}
    </>
  );
}