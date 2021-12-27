import React, { useState, useRef } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

import NodeContainer from "./NodeContainer";
import LinkContainer from "./LinkContainer";
import data from "../../data/menuItems.json";

const TreeContainer = styled.div`
  height: 70vh;
  width: 100%;
  overflow: hidden;
  padding: 0 4em;
`;

const TreeMenuWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2em;

  .level-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;
  }

  #svg-container {
    position: absolute;
    width: 95%;
    height: 100%;
    z-index: -1;
  }

  path {
    stroke: grey;
    stroke-width: 2;
  }
`;

export default function TreeMenu() {
  const [nodes, setNodes] = useState([]);
  const [cursorStyle, setCursorStyle] = useState("grab");

  const nodeRef = useRef(null);

  return (
    <TreeContainer>
      <Draggable
        nodeRef={nodeRef}
        bounds={{ left: 0, right: 0, top: -600, bottom: 600 }}
        onDrag={() => setCursorStyle("grabbing")}
        onStop={() => setCursorStyle("grab")}
        positionOffset={{ x: 0, y: "-30%" }}
      >
        <TreeMenuWrapper ref={nodeRef} style={{ cursor: cursorStyle }}>
          <LinkContainer nodes={nodes} />
          <div className="level-wrapper" id="node-container">
            <NodeContainer data={data} setNodes={setNodes} />
          </div>
        </TreeMenuWrapper>
      </Draggable>
    </TreeContainer>
  );
}
