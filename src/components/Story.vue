<template>
  <v-card max-width="600" class="mx-auto my-3" tile outlined>
    <v-slide-group class="mx-auto" multiple show-arrows>
      <v-slide-item class="ma-3" v-for="item in DailyMission" :key="DailyMission.indexOf(item)">
        <template v-slot:activator="{ on, attrs }">
          <div class="btn-wrapper">
            <v-btn class="button" fab icon v-on="on" :attrs="attrs">
              <v-avatar class="avatar" @click="aDialog = !aDialog">
                <v-img width="48px" height="48px" :src="item.picture" />
              </v-avatar>
            </v-btn>
          </div>
        </template>
        <v-dialog persistent v-model="aDialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Daily Mission is Here!</v-card-title>

            <v-card-text>{{ item.content }}</v-card-text>

            <v-card-actions>
              <v-btn color="red darken-1" text @click="cancel()">Cancel</v-btn>

              <v-spacer></v-spacer>

              <v-btn
                color="green darken-1"
                text
                @click="
                    cancel()
                  "
              >Post</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="pDialog" max-width="500px">
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
              <v-btn text color="grey darken-1" @click="close()">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="
                    create_post({picture, content}), close()
                  "
              >Post</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import allUsers from "@/data/allUsers.js";
import feeds from "@/data/feeds.js";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      allUsers,
      username: "wosteelz",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
      chosenFile: null,
      likes: 0,
      hasBeenLiked: false,
      caption: "",
      comments: [],
      filter: "",
      picture: null,
      content: "",
      aDialog: false,
      pDialog: false,
      feeds,
    };
  },
  computed: {
    ...mapState(["DailyMission"]),
  },
  methods: {
    ...mapActions(["create_post"]),
    cancel() {
      this.aDialog = false;
      this.pDialog = false;
    },
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
