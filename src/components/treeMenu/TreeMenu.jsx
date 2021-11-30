import React, { useState } from "react";
import styled from "styled-components";

import NodeContainer from "./NodeContainer";
import LinkContainer from "./LinkContainer";
import data from "../../data/menuItems.json";

const TreeMenuWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 70vh;
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

  return (
    <TreeMenuWrapper>
      <LinkContainer nodes={nodes} />
      <div className="level-wrapper" id="node-container">
        <NodeContainer data={data} setNodes={setNodes} />
      </div>
    </TreeMenuWrapper>
  );
}
