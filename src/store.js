import createStore from "redux-zero";

const initialState = {
  colors: {
    0: {
      id: 0,
      hex: "#04aade"
    }
  }
};
const store = createStore(initialState);

export default store;
