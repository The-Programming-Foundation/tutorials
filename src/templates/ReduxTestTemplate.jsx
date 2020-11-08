import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxTestTemplate = ({children}) => {
  // USAGE: https://github.com/rematch/rematch/tree/next/examples/gatsby-example
  const testModel = useSelector((state) => state.testModel);
  const otherModel = useSelector((state) => state.otherModel);
  const dispatch = useDispatch();

  return (
  <div>
    <p>Here is the count in test state: {testModel.count}</p>
    <p>Here is the flag in test state: {"" + testModel.flag}</p>
    <br/>
    <p>Here is the count in other state: {otherModel.count}</p>
    <p>Here is the flag in other state: {"" + otherModel.flag}</p>

    <div>
      {children}
    </div>

    <div>Increment the test state count below</div>
    <div>
      <button onClick={() => dispatch.testModel.increment()}>Increment</button>
      <button onClick={() => dispatch.testModel.flipFlag()}>Flip</button>
    </div>

    <div>Increment the other state count below</div>
    <div>
      <button onClick={() => dispatch.otherModel.increment()}>Increment</button>
      <button onClick={() => dispatch.otherModel.flipFlag()}>Flip</button>
    </div>
  </div>
  )
};

export default ReduxTestTemplate;
