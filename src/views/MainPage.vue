<template>
  <v-container>
    <v-col cols="12">
      <div class="page-body">
        <!-- DAILY MISSION 영역 -->
        <div class="story pb-1">
          <Story />
        </div>
        <!-- DAILY MISSION 영역 끝 -->

        <!-- TOPIC 영역 -->
        <div class="topic pb-1">
          <Topic />
        </div>
        <!-- TOPIC 영역 끝-->

        <!-- FEED 영역 -->
        <div class="feed my-3">
          <Feed v-for="post in Posts" :key="Posts.indexOf(post)" :post="post" />
        </div>
        <!-- FEED 영역 끝 -->
        <v-app-bar app max-height="48px" color="white" dense bottom>
          <strong class="mx-5">Copyright © GRADATION service team. All rights reserved.</strong>
          <v-speed-dial
            v-model="fab"
            fixed
            bottom
            right
            direction="top"
            open-on-hover
            transition="slide-y-reverse-transition"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="dialog = !dialog"
                  fab
                  dark
                  small
                  color="green"
                  v-on="on"
                  :attrs="attrs"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>포스트 작성</span>
            </v-tooltip>

            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="$router.push({ name: 'MainSetting' })"
                  fab
                  dark
                  small
                  color="indigo"
                  v-on="on"
                  :attrs="attrs"
                >
                  <v-icon>mdi-settings</v-icon>
                </v-btn>
              </template>
              <span>설정</span>
            </v-tooltip>
          </v-speed-dial>

          <!-- Post 작성용 dialog -->
          <v-dialog persistent v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <strong>포스트 작성</strong>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <div class="pa-3" outlined>
                  <v-file-input
                    v-model="picture"
                    chips
                    accept="image/*"
                    placeholder="Pick an image"
                    prepend-icon="mdi-camera"
                    counter
                    show-size
                  ></v-file-input>
                </div>
                <div class="pa-3">
                  <v-textarea v-model="content" outlined name="input-7-4" placeholder="내용 입력..."></v-textarea>
                </div>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="grey darken-1" @click="cancel()">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="
                    create_post({
                      picture,
                      content
                    }), cancel()
                  "
                >Post</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-app-bar>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import Feed from "@/components/Feed.vue";
import Story from "@/components/Story.vue";
import Topic from "@/components/Topic.vue";
import feeds from "@/data/feeds.js";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Feed,
    Story,
    Topic,
  },
  data() {
    return {
      picture: null,
      content: "",
      caption: "",
      comments: [],
      filter: "",
      dialog: false,
      fab: false,
      feeds,
      topics: [
        {
          id: 1,
          topic: "COVID - 19",
        },
        {
          id: 2,
          topic: "COVID - 19",
        },
        {
          id: 3,
          topic: "COVID - 19",
        },
        {
          id: 4,
          topic: "COVID - 19",
        },
      ],
    };
  },
  computed: {
    ...mapState(["Posts", "DailyMission"]),
  },
  methods: {
    ...mapActions(["create_post", "read_post", "update_post", "delete_post"]),
    cancel() {
      this.picture = null;
      this.content = "";
      this.dialog = false;
    },
  },
};
</script>

<style>
.rounded-card {
  border-radius: 50px;
}
</style>
