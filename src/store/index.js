import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index";


Vue.use(Vuex);

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export default new Vuex.Store({
  state: {
    User: {
      userName: "",
      userPicture: "",
      Channel: []
    },
    Flag: {
      isSigned: false
    }
  },
  mutations: {
    loginSuccess({ state }, payload) {
      state.User.userName = payload.data.userName;
      state.User.picture = payload.data.userName;
      state.Flag.isSigned = true;
      router.push({ name: "Home", params: { id: state.User.userName } });
    },
    logOut({ state }) {
      state.User.userName = "";
      state.User.userName = "";
      state.Flag.isSigned = false;
    }
  },
  actions: {
    naver({ commit }) {
      axios
        .get("/oauth2/authorization/naver", config)
        .then((res) => {
          if (res.status == 200) {
            axios
              .get("/")
              .then((res) => {
                if (res.status == 200) {
                  commit("loginSuccess", res);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    google({ commit }) {
      axios
        .get("/oauth2/authorization/google", config)
        .then((res) => {
          if (res.status == 200) {
            axios
              .get("/")
              .then((res) => {
                if (res.status == 200) {
                  commit("loginSuccess", res);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loading({ commit }) {
      axios
        .get("http://ec2-3-34-35-157.ap-northeast-2.compute.amazonaws.com:8080/v1/login", config)
        .then((res) => {
          if (res.data.userName != null) {
            commit("loginSuccess", res);
          }
          else {
            router.push({ name: "SignIn" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
