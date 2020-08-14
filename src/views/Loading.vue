<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.loading();
  },
  methods: {
    ...mapActions(["loading"]),
  },
};
</script>

<style></style>
