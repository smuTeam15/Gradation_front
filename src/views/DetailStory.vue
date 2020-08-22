<template>
  <div>
    <!-- Dialog 활성화 버튼 -->
    <v-btn @click="aDialog = true" class="button" fab icon>
      <v-avatar class="avatar">
        <v-img width="48px" height="48px" :src="item.picture" />
      </v-avatar>
    </v-btn>

    <!-- 1st Dialog -->
    <v-dialog persistent v-model="aDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Daily Mission is Here!</v-card-title>

        <v-card-text>{{ item.content }}</v-card-text>

        <v-card-actions>
          <v-btn color="red darken-1" text @click="cancel()">Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="pDialog=!pDialog">Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 1st Dialog end -->

    <!-- 2nd Dialog -->
    <v-dialog persistent v-model="pDialog" max-width="500px">
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
                    create_post({picture, content}), cancel()
                  "
          >Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 2nd Dialog end-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    item: Object,
  },
  data() {
    return {
      picture: null,
      content: "",
      aDialog: false,
      pDialog: false,
    };
  },
  methods: {
    ...mapActions(["create_post"]),
    cancel() {
      this.picture = null;
      this.content = "";
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