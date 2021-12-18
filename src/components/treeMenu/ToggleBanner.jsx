import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import { Alert, Fade } from "react-bootstrap";

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

  .customAlert {
    position: absolute;
    text-align: center;
    width: 50%;
    top: 150%;
    background-color: #2f3032;
    color: white;
    border-radius: 25px;
    padding: 0.8em 3em;

    .closeBtn {
      background-color: white;
      color: #2f3032;
      margin-left: 1em;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;

export default function ToggleBanner(props) {
  const { setShowTreeMenu, showTreeMenu } = props;
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (showTreeMenu === true) {
      let timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
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
          {showTreeMenu && show && (
            <Fade>
              <Alert className="customAlert" onClick={() => setShow(false)}>
                Drag the Tree to explore!
                <button className="closeBtn">Close</button>
              </Alert>
            </Fade>
          )}
        </ToggleBannerStyled>
      )}
    </>
  );
}
