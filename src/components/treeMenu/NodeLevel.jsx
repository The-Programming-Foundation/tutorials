import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Node from "./Node";
import NodeContainer from "./NodeContainer";

const TreeLevelStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  a {
    color: white;
    text-decoration: none;
  }

  a.disabled {
    pointer-events: none;
    cursor: normal;
  }

  .children-container {
    position: absolute;
    left: 100%;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
  }

  .customNode {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f3032;
    border: none;
    color: white;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    cursor: pointer;
    transition: 300ms;
    font-size: 0.9rem;
  }

  .customLink {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .customNode:hover {
    background-color: #000000;
  }

  &.show > button {
    background-color: #1a73e8;
  }

  .black {
    background-color: #2f3032;
  }

  .grey {
    background-color: #838490;
  }

  .disabled {
    background-color: grey;
    pointer-events: none;
  }

  .disabled:hover {
    background-color: grey;
  }
`;

export default function NodeLevel(props) {
  const { item, level = 0, disabled, setDisabled, color, setNodes } = props;
  const [show, setShow] = useState(false);
  const [showHover, setShowHover] = useState(false);

  useEffect(() => {
    if (show === true) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [show, setDisabled]);

  return (
    <TreeLevelStyled className={`${show ? "show" : ""}`} key={item.id}>
      <Node
        item={item}
        disabled={disabled}
        show={show}
        setShow={setShow}
        showHover={showHover}
        setShowHover={setShowHover}
        color={color}
        setNodes={setNodes}
      />
      {show && (
        <div className="children-container">
          <NodeContainer
            data={item.children}
            level={level + 1}
            color="black"
            setNodes={setNodes}
          />
        </div>
      )}
      {!show && showHover && (
        <div className="children-container">
          <NodeContainer
            data={item.children}
            level={level + 1}
            color="grey"
            setNodes={setNodes}
          />
        </div>
      )}
    </TreeLevelStyled>
  );
}
