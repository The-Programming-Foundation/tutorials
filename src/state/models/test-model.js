import {createModel} from "@rematch/core";

export const testModel = createModel({
	state: {
    count: 0,
    flag: false,
	},
	reducers: {
    increment: state => {
      return {...state, count: state.count + 1};
    },
    flipFlag: state => {
      return {...state, flag: !state.flag};
    }
  }
});

export const otherModel = createModel({
	state: {
    count: 0,
    flag: false,
	},
	reducers: {
    increment: state => {
      return {...state, count: state.count + 1};
    },
    flipFlag: state => {
      return {...state, flag: !state.flag};
    }
  }
});
