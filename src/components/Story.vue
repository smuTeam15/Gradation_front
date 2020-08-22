<template>
  <v-card max-width="600" class="mx-auto my-3" tile outlined>
    <v-slide-group class="mx-auto" multiple show-arrows>
      <v-slide-item
        class="ma-3 btn-wrapper pa-1"
        v-for="item in DailyMission"
        :key="DailyMission.indexOf(item)"
      >
        <DetailStory :item="item"></DetailStory>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DetailStory from "@/views/DetailStory.vue";

export default {
  components: {
    DetailStory,
  },
  computed: {
    ...mapState(["DailyMission"]),
  },
};
</script>

<style>
.btn-wrapper {
  background: linear-gradient(to right, red, orange);
  border-radius: 70%;
  animation: spin 1s linear infinite;
  padding: 2px;
}
.button {
  background: #fff;
  border-radius: 70%;
}
</style>
