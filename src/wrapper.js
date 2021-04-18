import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const wrapper = ({ element }) => (
	<Provider store={store}>{element}</Provider>
);

export default wrapper;
