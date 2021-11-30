export function makePath(start, end) {
  // only builds the 'd' attr value
  // Builds the 'd' attribute's value with the result
  // of the math to have a link that goes from MIDDLE to MIDDLE
  // on the parent and child
  // needs improvement for each line to start/end in the middle of the node
  const { x: sX, y: sY, width: sWidth, height: sHeight } = start;
  const { x: eX, y: eY, width: eWidth, height: eHeight } = end;

  const [startX, startY] = [
    Math.floor(sX + sWidth / 2),
    Math.floor(sY + sHeight / 2),
  ];
  const [endX, endY] = [
    Math.floor(eX + eWidth / 2),
    Math.floor(eY + eHeight / 2),
  ];

  return `M ${startX},${startY} L ${endX},${endY}`;
}

export function getNodesCoordinates(links, el, pathMaker) {
  // this function finds the elements on the page by Id
  // and calls getBoundingClientRect
  console.log("INSIDE HELPER AT THE TOP", links);
  const container = el.getBoundingClientRect();

  const linksArr = links.map((link) => {
    if (link.id.length > 1) {
      const splitId = link.id.split("-");
      const parentId = splitId.slice(0, -1).join("-");
      const childId = link.id;
      console.log("INSIDE the map", link);
      const parentNode = document.getElementById(parentId);
      const childNode = document.getElementById(childId);
      console.log("CHILD NODE", childNode);
      if (childNode === null) return [];
      const parentRect = parentNode?.getBoundingClientRect();
      const childRect = childNode?.getBoundingClientRect();
      console.log("CHILD RECT", childRect);
      parentRect.x = parentRect.x - container.x;
      parentRect.y = parentRect.y - container.y;
      childRect.x = childRect.x - container.x;
      childRect.y = childRect.y - container.y;

      if (parentRect && childRect) {
        return { pathValue: makePath(parentRect, childRect) };
      }
    }

    return [];
  });

  const filteredArr = linksArr.filter((link) => !Array.isArray(link));
  console.log("INSIDE HELPER BOTTOM LINKS ARE", filteredArr);

  return filteredArr;
}

export function findCurrentNodes() {
  const container = document.getElementsByClassName("customNode");

  const toArray = Array.from(container).map((node) => ({
    id: node.id,
    name: node.innerText,
  }));

  return toArray;
}
