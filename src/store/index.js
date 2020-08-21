import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router/index";
import qs from "querystring"

Vue.use(Vuex);

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export default new Vuex.Store({
  state: {
    User: {
      userName: "",
      userPicture: "",
      Channel: [],
      currentChannel: null,
    },
    Posts: [],
    DailyMission: [],
    Flag: {
      isSigned: false
    }
  },
  mutations: {
    loginSuccess(state, payload) {
      state.User.userName = payload.data.userName;
      state.User.picture = payload.data.picture;
      state.User.Channel = payload.data.channelList;
      state.Flag.isSigned = true;
      router.push({ name: "Home" });
    },
    logOut(state) {
      state.User.userName = "";
      state.User.picture = "";
      state.User.Channel = [];
      state.Flag.isSigned = false;
    },
    read_channel(state, payload) {
      state.User.Channel = payload.data;
    },
    read_post(state, payload) {
      state.Posts = payload.data;
    },
    read_dailyMission(state, payload) {
      state.DailyMission = payload.data;
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
    // Channel CRUD -------------------------------
    create_channel({ dispatch }, input) {

      // console.log(input.first_picture);
      // console.log(input.second_picture);

      const forCreate = new FormData();
      forCreate.append("firstSchool", input.first_school);
      forCreate.append("secondSchool", input.second_school);
      forCreate.append("firstPicture", input.first_picture);
      forCreate.append("secondPicture", input.second_picture);
      forCreate.append("description", input.description);
      forCreate.append("category", input.category);
      // Log ------------------------
      // console.log(input.first_picture);
      // console.log(input.second_picture);
      // for (let key of forCreate.entries()) {
      //   console.log(`${key}`);
      // }
      // for (let key of forCreate.entries()) {
      //   console.log(key);
      // }
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
            console.log(res.data)
            dispatch("read_channel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    read_channel({ commit }) {
      axios
        .get("/api/v1/channel1", config)
        .then((res) => {
          if (res.status == 200) {
            // console.log("--------------------------")
            // console.log(res.data)
            commit("read_channel", res);
          }
          else if (res.status == 204) {

          }
          else if (res.status == 403) {

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
    // ---------------------------------------
    // Post CRUD -----------------------------
    create_post({ state, dispatch }, input) {

      // console.log(input.first_picture);
      // console.log(input.second_picture);

      const forCreate = new FormData();
      forCreate.append("channelId", state.User.currentChannel);
      forCreate.append("picture", input.picture);
      forCreate.append("content", input.content);
      // Log ------------------------
      // console.log(input.first_picture);
      // console.log(input.second_picture);
      // for (let key of forCreate.entries()) {
      //   console.log(`${key}`);
      // }
      // for (let key of forCreate.entries()) {
      //   console.log(key);
      // }
      // ----------------------------
      axios
        .post("/api/v1/post", forCreate, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data)
            dispatch("read_post");
          }
          else if (res.status == 204) {

          }
          else if (res.status == 403) {

          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    read_post({ state, commit }) {
      axios
        .get("/api/v1/post/" + state.User.currentChannel, config)
        .then((res) => {
          if (res.status == 200) {
            // console.log("--------------------------")
            // console.log(res.data)
            commit("read_post", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update_post({ dispatch }, input) {
      const forUpdate = new FormData();
      forUpdate.append("channelId", state.User.currentChannel);
      forUpdate.append("picture", input.picture);
      forUpdate.append("content", input.content);

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
    delete_post({ dispatch }) {
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
    // ---------------------------------------
    // Daily Mission CRUD --------------------
    create_dailyMission({ state, dispatch }, input) {

      // console.log(input.first_picture);
      // console.log(input.second_picture);

      const forCreate = new FormData();
      forCreate.append("channelId", state.User.currentChannel);
      forCreate.append("picture", input.picture);
      forCreate.append("content", input.content);

      // Log ------------------------
      // console.log(input.first_picture);
      // console.log(input.second_picture);
      // for (let key of forCreate.entries()) {
      //   console.log(`${key}`);
      // }
      // for (let key of forCreate.entries()) {
      //   console.log(key);
      // }
      // ----------------------------

      axios
        .post("/api/v1/dailymission", forCreate, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data)
            dispatch("read_dailyMission");
          }
          else if (res.status == 204) {

          }
          else if (res.status == 403) {

          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    read_dailyMission({ state, commit }) {
      axios
        .get("/api/v1/dailymission/" + state.User.currentChannel, config)
        .then((res) => {
          if (res.status == 200) {
            // console.log("--------------------------")
            // console.log(res.data)
            commit("read_dailyMission", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update_dailyMission({ dispatch }, input) {
      const forUpdate = new FormData();
      forUpdate.append("channelId", state.User.currentChannel);
      forUpdate.append("picture", input.picture);
      forUpdate.append("content", input.content);
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
    delete_dailyMission({ dispatch }) {
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
    // ---------------------------------------
    // WEEKLY TOPIC CRUD ---------------------
    create_topic({ state, dispatch }, input) {

      // console.log(input.first_picture);
      // console.log(input.second_picture);

      const forCreate = {
        channelId: state.User.currentChannel,
        content: input.content,
        title: input.title,
        category: input.category
      }

      // Log ------------------------
      // console.log(input.first_picture);
      // console.log(input.second_picture);
      // for (let key of forCreate.entries()) {
      //   console.log(`${key}`);
      // }
      // for (let key of forCreate.entries()) {
      //   console.log(key);
      // }
      // ----------------------------
      axios
        .post("/api/v1/weeklytopic", forCreate, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data)
            dispatch("read_dailyMission");
          }
          else if (res.status == 204) {

          }
          else if (res.status == 403) {

          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    read_topic({ state, commit }) {
      axios
        .get(`/api/v1/dailymission/${channel_id}` + state.User.currentChannel, config)
        .then((res) => {
          if (res.status == 200) {
            // console.log("--------------------------")
            // console.log(res.data)
            commit("read_topic", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update_topic({ dispatch }, input) {
      const forUpdate = {
        channelId: state.User.currentChannel,
        content: input.content,
        title: input.title,
        category: input.category
      };
      axios
        .put(`/api/v1/dailymission/${channel_id}`, forUpdate, config)
        .then((res) => {
          if (res.status == 200) {
            dispatch("read_channel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delete_topic({ dispatch }) {
      axios
        .delete(`/api/v1/dailymission/${channel_id}/${weeklyTopic_id}`, config)
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
