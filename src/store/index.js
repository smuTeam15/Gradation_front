import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    DataString: null,
  },
  mutations: {},
  actions: {
    getData() {
      axios
        .get("http://169.63.212.7:8000/api/public")
        .then((res) => {
          DataString = res;
          console.log(DataString);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
