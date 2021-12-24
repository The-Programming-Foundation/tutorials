import React, { useEffect } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { findCurrentNodes } from "../../utils/treeMenu/linksHelpers";

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

  useEffect(() => {
    const nodes = findCurrentNodes();
    setNodes(nodes);
  }, [show, showHover, setNodes]);

  return (
    <button
      type="button"
      id={item.id}
      className={`customNode ${color} ${!show && disabled ? "disabled" : ""}`}
      disabled={!show && disabled}
      onClick={() => setShow(!show)}
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
