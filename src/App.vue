<template>
  <v-app>
    <v-app-bar app max-height="48px" color="#fafafa" dense>
      <v-toolbar-title @click.exact="$router.push({ name: 'Home' })">
        <span id="title">GRADATION</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu v-if="Flag.isSigned" tile offset-y bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-img v-if="User.userPicture != null " :src="User.userPicture"></v-img>
            <v-icon x-large v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logOut()">
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-else icon disabled>
        <v-icon x-large>mdi-account-circle</v-icon>
      </v-btn>
      <span class="body-2" v-if="Flag.isSigned">{{User.userName}} 님 환영합니다.</span>
      <span class="body-2" v-else>로그인이 필요합니다.</span>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      baseURL: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapState(["User", "Flag"]),
  },
  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
#app {
  background: linear-gradient(
    0deg,
    rgba(129, 173, 209, 1) 0%,
    rgba(251, 239, 246, 1) 100%
  );
}
#title {
  font-family: "Monoton", cursive;
  background: linear-gradient(
    90deg,
    rgba(129, 173, 209, 1) 0%,
    rgb(255, 162, 202) 100%
  );
  background-clip: text;
  color: transparent;
  font-size: 1.5rem;
}
</style>
