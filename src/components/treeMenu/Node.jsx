import React, { useEffect } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { findCurrentNodes } from "../../utils/treeMenu/linksHelpers";
import { reconstructNodeId } from "../../utils/treeMenu/treeExpansionHelpers";
import useDynaRefs from "../../utils/treeMenu/useDynaRefs";

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
  const [getRef, setRef] = useDynaRefs();

  function handleClick() {
    setShow(!show);
    let lastExpandedNode = item.id;
    if (item.to) {
      lastExpandedNode = lastExpandedNode.split("-").slice(0, -1).join("-");
      sessionStorage.setItem("lastExpandedNode", lastExpandedNode);
    } else {
      const storedItem = sessionStorage.getItem("lastExpandedNode") || null;
      if (storedItem) {
        sessionStorage.removeItem("lastExpandedNode");
      }
    }
  }

  useEffect(() => {
    const nodes = findCurrentNodes();
    setNodes(nodes);
  }, [show, showHover, setNodes]);

  // This useEffect will run only on first render and check if we have "lastExpandedNode" in storage.
  // If we do, that means we can expand the tree where the user left off,
  // Otherwise we exit early.
  useEffect(() => {
    const storedId = sessionStorage.getItem("lastExpandedNode") || null;
    if (!storedId) return;
    const idToArray = storedId.split("-");
    const nodeIds = [];
    let index = 0;

    while (index < idToArray.length) {
      nodeIds.push(idToArray[index]);
      const currentNodeId = reconstructNodeId(nodeIds);
      sessionStorage.setItem("lastExpandedNode", storedId);

      if (currentNodeId === item.id) {
        const currentRef = getRef(item.id);
        currentRef.current.click();
      }
      index++;
    }
  }, [getRef, item.id]);

  return (
    <button
      type="button"
      id={item.id}
      ref={setRef(item.id)}
      className={`customNode ${color} ${!show && disabled ? "disabled" : ""}`}
      disabled={!show && disabled}
      onClick={handleClick}
      onMouseOver={() => setShowHover(true)}
      onMouseOut={() => setShowHover(false)}
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
