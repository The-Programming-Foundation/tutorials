import React, { useState } from "react";

import NodeLevel from "./NodeLevel";

export default function NodeContainer(props) {
  const { data, setNodes, level = 0, color = "black" } = props;
  const [disabled, setDisabled] = useState(false);

  if (!data || !data.length) return null;

  return (
    <>
      {data.map((item) => (
        <NodeLevel
          key={item.id}
          item={item}
          level={level}
          disabled={disabled}
          setDisabled={setDisabled}
          color={color}
          setNodes={setNodes}
        />
      ))}
    </>
  );
}
