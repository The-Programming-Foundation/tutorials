import { createRef } from "react";

// This code is taken from the package use-dynamic-refs
// https://github.com/fitzmode/use-dynamic-refs/blob/master/src/index.tsx

const map = new Map();

function setRef(key) {
  if (!key) throw new Error("useDynaRefs needs a key");
  const ref = createRef();
  map.set(key, ref);
  return ref;
}

function getRef(key) {
  if (!key) throw new Error("useDynaRefs needs a key");
  return map.get(key);
}

export default function useDynaRefs() {
  return [getRef, setRef];
}
