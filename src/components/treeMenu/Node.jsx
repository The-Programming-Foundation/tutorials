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
    }
    console.log("clicked node id parent", lastExpandedNode);
    sessionStorage.setItem("lastExpandedNode", lastExpandedNode);
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

      if (currentNodeId === item.id) {
        const currentRef = getRef(item.id);
        currentRef.current.click();
        console.log("currentREF is", currentRef);
      }
      index++;
    }
  }, []);

  return (
    <button
      type="button"
      id={item.id}
      ref={setRef(item.id)}
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
