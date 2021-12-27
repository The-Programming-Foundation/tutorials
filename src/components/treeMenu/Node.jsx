import React, { useCallback, useEffect, useRef } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { findCurrentNodes } from "../../utils/treeMenu/linksHelpers";
import { reconstructNodeId } from "../../utils/treeMenu/treeExpansionHelpers";

export default function Node(props) {
  const {
    item,
    disabled,
    setShow,
    show,
    showHover,
    setShowHover,
    color,
    setNodes,
  } = props;
  const nodeRef = useRef(item.id);

  function handleClick() {
    setShow(!show);
    if (item.to) {
      const lastExpandedNode = item.id.split("-").slice(0, -1).join("-");
      sessionStorage.setItem("lastExpandedNode", lastExpandedNode);
    }
  }

  useEffect(() => {
    const nodes = findCurrentNodes();
    setNodes(nodes);
  }, [show, showHover, setNodes]);
  // https://stackoverflow.com/questions/39913863/how-to-manually-trigger-click-event-in-reactjs/39914279
  // https://stackoverflow.com/questions/55995760/how-to-add-refs-dynamically-with-react-hooks
  // https://medium.com/@fitzmuzenda/create-refs-dynamically-in-react-ea2a4567b88
  useEffect(() => {
    const storedId = sessionStorage.getItem("lastExpandedNode") || null;
    if (!storedId) return;
    const idToArray = storedId.split("-");
    const nodeIds = [];
    let index = 0;
    console.log("idToarray is", idToArray, "length is", idToArray.length);

    while (index < idToArray.length && !item.to) {
      nodeIds.push(idToArray[index]);
      const currentNodeId = reconstructNodeId(nodeIds);
      console.log("joined", currentNodeId);
      const element = document.getElementById(currentNodeId);
      if (element) {
        nodeRef.current?.click();
      }
      console.log("element is", element);
      index++;
    }
  }, []);

  return (
    <button
      type="button"
      id={item.id}
      ref={nodeRef}
      className={`customNode ${color} ${!show && disabled ? "disabled" : ""}`}
      disabled={!show && disabled}
      onClick={handleClick}
      onMouseEnter={() => setShowHover(!showHover)}
      onMouseLeave={() => setShowHover(!showHover)}
    >
      {item.to && (
        <AniLink
          paintDrip
          color="#2f3032"
          duration={1}
          to={item.to}
          className={`customLink ${disabled ? "disabled" : ""}`}
        >
          {item.name}
        </AniLink>
      )}
      {!item.to && item.name}
    </button>
  );
}
