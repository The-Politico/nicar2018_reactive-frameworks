const actions = store => ({

  async getStates (state) {
    const res = await fetch('http://localhost:2222/states');
    const data = await res.json();
    return { states: data, selected: data[0].abbreviation };
  },

  changeSelected (abbreviation) {
    return { selected: abbreviation };
  }

});

export default actions;
