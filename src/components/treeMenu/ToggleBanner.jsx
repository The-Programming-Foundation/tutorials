import React from "react";

export default function ToggleBanner(props) {
  const { setShowTreeMenu, showTreeMenu } = props;
  return (
    <div>
      <button onClick={() => setShowTreeMenu(!showTreeMenu)}>
        Toggle tree menu
      </button>
    </div>
  );
}
