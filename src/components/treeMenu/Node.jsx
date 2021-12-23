import React, { useEffect } from "react";
import { Link } from "gatsby";

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
        <Link
          to={item.to}
          className={`customLink ${disabled ? "disabled" : ""}`}
        >
          {item.name}
        </Link>
      )}
      {!item.to && item.name}
    </button>
  );
}
