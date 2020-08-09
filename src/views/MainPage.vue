<template>
  <v-container fill-height>
    <v-col cols="12">
      <div class="page-body">
        <!-- STORY 영역 -->
        <div class="story pb-1">
          <Story></Story>
        </div>
        <!-- STORY 영역 끝 -->

        <!-- TOPIC 영역 -->
        <div class="topic pb-1">
          <Topic />
        </div>
        <!-- TOPIC 영역 끝-->

        <!-- FEED 영역 -->
        <div class="feed my-3">
          <Feed v-for="feed in feeds" :key="feeds.indexOf(feed)" :feed="feed" />
        </div>
        <!-- FEED 영역 끝 -->
        <v-app-bar app max-height="48px" color="white" dense bottom>
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
            <v-btn @click="dialog = !dialog" fab dark small color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
              @click="$router.push({ name: 'MainSetting' })"
              fab
              dark
              small
              color="indigo"
            >
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </v-speed-dial>

          <!-- Feed 작성용 dialog -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <strong>피드 작성</strong>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <div class="pa-3" outlined>
                  <v-file-input
                    v-model="chosenFile"
                    chips
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an image"
                    prepend-icon="mdi-camera"
                    counter
                    show-size
                  ></v-file-input>
                </div>
                <div class="pa-3">
                  <v-textarea
                    v-model="caption"
                    outlined
                    name="input-7-4"
                    placeholder="내용 입력..."
                  ></v-textarea>
                </div>
              </v-card-text>
              <v-divider />
              <v-card-actions>
                <v-btn text color="grey darken-1" @click="dialog = false"
                  >Cancel</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="
                    posting({
                      username,
                      userImage,
                      chosenFile,
                      likes,
                      hasBeenLiked,
                      caption,
                      comments,
                      filter,
                    })
                  "
                  >Post</v-btn
                >
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

export default {
  components: {
    Feed,
    Story,
    Topic,
  },
  data() {
    return {
      username: "wosteelz",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
      chosenFile: null,
      likes: 0,
      hasBeenLiked: false,
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
  methods: {
    posting({
      username,
      userImage,
      chosenFile,
      likes,
      hasBeenLiked,
      caption,
      comments,
      filter,
    }) {
      this.dialog = false;
      var reader = new FileReader();
      var postImage =
        "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg";
      reader.readAsArrayBuffer(this.chosenFile);
      reader.onload = () => {
        // postImage = reader.result;
      };
      feeds.unshift({
        username,
        userImage,
        postImage,
        likes,
        hasBeenLiked,
        caption,
        comments,
        filter,
      });
      this.chosenFile = null;
      this.caption = null;
    },
  },
};
</script>

<style>
.rounded-card {
  border-radius: 50px;
}
</style>
