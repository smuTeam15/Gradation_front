<template>
  <v-card max-width="600" class="mx-auto my-3" tile outlined>
    <v-slide-group class="mx-auto" multiple show-arrows>
      <v-slide-item
        class="ma-2"
        v-for="topic in Topics"
        :key="Topics.indexOf(topic)"
        v-slot:default="{ active }"
      >
        <v-btn
          height="100"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          :topic="topic"
          @click="$router.push({ name: 'DetailTopic' })"
        >
          WEEK
          <br />
          {{ topic.category }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      topics: [
        {
          id: 1,
          topic: "Week 6",
          category: "Science",
        },
        {
          id: 2,
          topic: "Week 5",
          category: "business",
        },
        {
          id: 3,
          topic: "Week 4",
          category: "general",
        },
        {
          id: 4,
          topic: "Week 3",
          category: "health",
        },
        {
          id: 5,
          topic: "Week 2",
          category: "sports ",
        },
        {
          id: 6,
          topic: "Week 1",
          category: "technology",
        },
      ],
    };
  },
  computed: {
    ...mapState(["Topic"]),
  },
};
</script>
