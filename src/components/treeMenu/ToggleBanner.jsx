import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useLocation } from "@reach/router";
import { Transition } from "react-transition-group";
import { Link } from "gatsby";

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

  a {
    background-color: white;
    color: black;
    padding: 0.2em 0.4em;
    text-decoration: none;

    &:hover {
      color: white;
      background-color: #2f3032;
    }
  }
`;

const DragMessageStyled = styled.div`
  position: absolute;
  z-index: -1;
  text-align: center;
  width: 50%;
  min-width: 400px;
  top: 150%;
  background-color: black;
  color: white;
  border-radius: 25px;
  padding: 0.5em 3em;
  ${({ status }) =>
    (status === "entering" || status === "entered") &&
    css`
      animation-name: ${boxEnterAnimation};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    `}
  ${({ status }) =>
    status === "exiting" &&
    css`
      animation-name: ${boxExitAnimation};
      animation-duration: 1s;
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

// We show the 'drag message' only once per browser 'session' / tab.
// We set 'true' in sessionStorage for that purpose.
// The returned JSX is based on the user's location: "/" or "/treemenu"
export default function ToggleBanner(props) {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true); // used by the Transition component (needs boolean)
  const [showedMessage, setShowedMessage] = useState(() => {
    // used for showing the message once per tab
    const storedValue = sessionStorage.getItem("hasSeenDragMessage");
    return Boolean(storedValue) || false;
  });

  function handleCloseMessage() {
    setShow(false);
    setTimeout(() => {
      // We need to set this after the user clicks on the "close" button,
      setShowedMessage(true); // this avoids showing the message twice
    }, 1000);
  }

  // This useEffect for the drag message
  useEffect(() => {
    // Keeps the drag message on the screen for 2 seconds
    if (pathname === "/treemenu") {
      const dragMessageTimeout = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("hasSeenDragMessage", "true");
      }, 2000);
      // This second timeout to make sure our 'drag message' is removed
      // from the screen smoothly
      const messageTimeout = setTimeout(() => {
        setShowedMessage(true);
      }, 3000);
      return () => {
        clearTimeout(dragMessageTimeout);
        clearTimeout(messageTimeout);
      };
    }

    return;
  }, [pathname]);

  // This useEffect for keeping track of the user's expanded tree
  useEffect(() => {
    if (pathname === "/treemenu") {
      sessionStorage.setItem("treeMenuOpen", "true");
    } else {
      sessionStorage.removeItem("treeMenuOpen");
    }
  }, [pathname]);

  return (
    <>
      {(pathname === "/" || pathname === "/treemenu") && (
        <ToggleBannerStyled>
          {pathname === "/treemenu" ? (
            <p>Switch to </p>
          ) : (
            <p>Switch to the new </p>
          )}

          {pathname === "/treemenu" ? (
            <Link to="/">Slider View</Link>
          ) : (
            <Link to="/treemenu">Tree View</Link>
          )}

          {pathname === "/treemenu" && !showedMessage && (
            <Transition in={show} timeout={1500} mountOnEnter unmountOnExit>
              {(status) => (
                <DragMessageStyled status={status}>
                  Drag the Tree to explore!
                  <button className="closeBtn" onClick={handleCloseMessage}>
                    Close
                  </button>
                </DragMessageStyled>
              )}
            </Transition>
          )}
        </ToggleBannerStyled>
      )}
    </>
  );
}
