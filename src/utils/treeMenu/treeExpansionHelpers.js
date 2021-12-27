export function reconstructNodeId(idToArray) {
  console.log("array received by helper", idToArray);
  if (idToArray.length <= 1) return idToArray[0];
  return idToArray.join("-");
}
