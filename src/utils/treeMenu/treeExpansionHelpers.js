export function reconstructNodeId(idToArray) {
  if (idToArray.length <= 1) return idToArray[0];
  return idToArray.join("-");
}
