<template>
  <v-card max-width="600" class="mx-auto my-3" tile outlined>
    <v-slide-group class="mx-auto" multiple show-arrows>
      <v-slide-item
        class="ma-3"
        v-for="user in allUsers"
        :key="allUsers.indexOf(user)"
      >
        <div class="btn-wrapper">
          <v-btn class="button" fab icon>
            <v-avatar class="avatar" @click.stop="user.dialog = true">
              <v-img width="48px" height="48px" :src="user.src" />
            </v-avatar>
          </v-btn>
          <v-dialog v-model="user.dialog" max-width="290">
            <v-card>
              <v-card-title class="headline"
                >Daily Mission is Here!</v-card-title
              >

              <v-card-text>
                {{ user.detail }}
              </v-card-text>

              <v-card-actions>
                <v-btn color="red darken-1" text @click="user.dialog = false">
                  Cancel
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  color="green darken-1"
                  text
                  @click="
                    user.dialog = false;
                    dialog = true;
                  "
                >
                  Post
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import allUsers from "@/data/allUsers.js";
import feeds from "@/data/feeds.js";
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
      dialog: false,
      feeds,
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
      allUsers.dialog = false;
      var reader = new FileReader();
      var postImage =
        "https://healthy-kids.com.au/wp-content/uploads/2013/12/10Doubledeckersandwiches.jpg";
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
