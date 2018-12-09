import _ from "lodash";

const actions = store => ({
  updateColor: (state, color) => ({
    colors: {
      ...state.colors,
      ..._.keyBy([color], "id")
    }
  }),
  removeColor: (state, color) => ({
    colors: _.filter(state.colors, existingColor => {
      return existingColor.id !== color.id;
    })
  }),
  replaceColors: (state, colors) => ({ colors })
});

export default actions;
