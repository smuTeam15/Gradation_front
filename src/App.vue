<template>
  <v-app>
    <v-app-bar app max-height="48px" color="#fafafa" dense>
      <v-toolbar-title @click="$router.push({ name: 'Home' })">
        <span id="title">GRADATION</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {};
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
