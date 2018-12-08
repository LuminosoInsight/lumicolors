const actions = store => ({
  addColor: state => ({ colors: {} }),
  updateColors: (state, colors) => ({ colors })
});

export default actions;
