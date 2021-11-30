import React from "react";
import { getNodesCoordinates } from "./linksHelpers";

const useLinks = ({ links = [], makePath } = {}) => {
  // we must use a reference since we need Node's DOM position
  // https://stackoverflow.com/a/55996413
  const ref = React.useRef();
  const [linkPositions, setLinkPositions] = React.useState(links);
  const repositionLinks = React.useCallback(
    () => setLinkPositions(getNodesCoordinates(links, ref.current, makePath)),
    [links, makePath]
  );
  console.log("INSIDE THE HOOK", linkPositions);
  // make sure to reposition links on window resize
  // to make content responsive
  // https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae
  React.useLayoutEffect(() => {
    repositionLinks();
    window.addEventListener("resize", repositionLinks);
    return () => window.removeEventListener("resize", repositionLinks);
  }, [repositionLinks]);

  return { ref, linkPositions };
};

export default useLinks;
