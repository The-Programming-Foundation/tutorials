import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { makePath } from "../../utils/treeMenu/linksHelpers";
import useLinks from "../../utils/treeMenu/useLinks";

const SvgContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  path {
    stroke: grey;
    stroke-width: 2;
  }
`;

export default function LinkContainer(props) {
  const { nodes } = props;
  const [links, setLinks] = useState([]);
  const { ref, linkPositions } = useLinks({ links, makePath });

  // when this return statment runs, and the map fn runs, we should not have any null value
  useEffect(() => {
    setLinks(nodes);
  }, [nodes]);

  return (
    <SvgContainer ref={ref} id="svg-container">
      {linkPositions &&
        linkPositions.length > 0 &&
        linkPositions.map((link, i) => (
          <path d={link.pathValue} key={i} stroke="black" strokeWidth="2" />
        ))}
    </SvgContainer>
  );
}
