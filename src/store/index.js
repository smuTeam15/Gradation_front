import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index";
import imageToBase64 from "image-to-base64";

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
    loginSuccess(state, payload) {
      state.User.userName = payload.data.userName;
      state.User.picture = payload.data.userName;
      state.User.Channel = payload.data.Channel;
      state.Flag.isSigned = true;
      router.push({ name: "Home" });
    },
    logOut(state) {
      state.User.userName = "";
      state.User.userName = "";
      state.Flag.isSigned = false;
    },
    read_channel(state, payload) {
      state.User.Channel = payload.data.Channel;
    }
  },
  actions: {
    loading({ commit }) {
      axios
        .get("/v1/login", config)
        .then((res) => {
          // if (res.status == 200) {
          if (res.data.userName != null) {
            commit("loginSuccess", res);
          }
          // }
          else {
            router.push({ name: "SignIn" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    create_channel({ dispatch }, input) {
      const formData = new FormData();
      formData.append("firstPicture", input.first_picture);
      formData.append("secondPicture", input.second_picture);

      const forCreate = {
        firstSchool: input.first_school,
        secondSchool: input.second_school,
        formData,
        description: input.description,
        category: input.category
      }

      // Log ------------------------
      console.log(forCreate);
      for (let key of formData.entries()) {
        console.log(key);
      }
      // ----------------------------
      axios
        .post("/api/v1/channel", forCreate, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((res) => {
          if (res.status == 200) {
            dispatch("read_channel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    read_channel({ commit }) {
      axios
        .get("/api/v1/channel", config)
        .then((res) => {
          if (res.status == 200) {
            commit("read_channel", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update_channel({ dispatch }, input) {
      const forUpdate = {
        firstSchool: input.first_school,
        secondSchool: input.second_school,
        firstPicture: input.first_picture,
        secondPicture: input.second_picture,
        description: input.description,
        category: input.category
      };
      axios
        .put(`"/api/v1/channel/${channel_id}"`, forUpdate, config)
        .then((res) => {
          if (res.status == 200) {
            dispatch("read_channel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delete_channel({ dispatch }) {
      axios
        .delete(`"/api/v1/channel/${channel_id}"`, config)
        .then((res) => {
          if (res.status == 200) {
            dispatch("read_channel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
