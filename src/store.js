import {init} from "@rematch/core";
import {models} from "./state/models";

export const store = init({
	models,
});
