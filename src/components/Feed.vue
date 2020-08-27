<template>
  <v-container>
    <v-card max-width="600" class="mx-auto my-3" tile outlined>
      <v-list-item class="px-4 py-1">
        <v-list-item-avatar
          class="my-0 mr-4"
          height="32px"
          width="32px"
          min-height="32px"
          min-width="32px"
        >
          <v-icon x-large v-if="post.userPicture == null">mdi-account-circle</v-icon>
          <v-img v-else :src="post.userPicture" height="32px" width="32px" />
        </v-list-item-avatar>
        <v-list-item-content class="pa-0">
          <v-list-item-title v-text="`${post.userName}`" class="subtitle-2"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-menu tile left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item @click="dialog = true">
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-title>수정</v-list-item-title>
              </v-list-item>
              <v-list-item @click="delete_post(post.id)">
                <v-list-item-icon>
                  <v-icon>mdi-delete-forever</v-icon>
                </v-list-item-icon>
                <v-list-item-title>삭제</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-img :src="post.picture" height="auto"></v-img>
      <v-card-text v-text="`${post.content}`" class="pb-1"></v-card-text>

      <v-card-actions class="py-0 mt-1">
        <v-btn
          v-if="post.likesId.includes(post.likesId.find(x=>x.userId === User.userId))"
          icon
          @click="delete_like(post)"
        >
          <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
        <v-btn v-else icon @click="create_like(post)">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text v-text="`좋아요 ${post.likesId.length}개`" class="py-0 mb-2 font-weight-bold"></v-card-text>
      <v-card-text
        v-for="item in post.comments"
        :key="post.comments.indexOf(item)"
        class="py-0 mb-2 font-weight-bold d-flex justify-space-between"
      >
        <div>
          <span v-text="`${item.userName} `"></span>
          <span class="font-weight-regular" v-text="`${item.comment}`"></span>
        </div>
        <div>
          <v-btn
            v-if="item.commentId === User.userId"
            right
            x-small
            icon
            color="red"
            @click="delete_comment({postId: post.id , commentId: item.commentId})"
          >
            <v-icon x-small>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text class="py-0 mb-1 overline">방금 전</v-card-text>
      <div class="mt-1">
        <v-divider class="mb-1"></v-divider>
        <v-textarea
          class="mb-1"
          name="input"
          rows="1"
          flat
          auto-grow
          dense
          solo
          placeholder="댓글 달기..."
          hide-details
          v-model="comment"
          @keyup.enter.exact="create_comment({ postId: post.id, comment}), clear()"
        >
          <template #append>
            <v-btn
              icon
              depressed
              small
              class="pb-1"
              @click="create_comment({ postId: post.id, comment}), clear()"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </template>
        </v-textarea>
      </div>
    </v-card>
    <!-- Post 수정용 dialog -->
    <v-dialog persistent v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <strong>포스트 수정</strong>
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
                    update_post({
                      picture,
                      content
                    }), cancel()
                  "
          >Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      picture: null,
      content: "",
      dialog: false,
      comment: "",
    };
  },
  props: {
    post: Object,
  },
  computed: {
    ...mapState(["User"]),
  },
  methods: {
    ...mapActions([
      "update_post",
      "delete_post",
      "create_comment",
      "delete_comment",
      "create_like",
      "delete_like",
    ]),
    clear() {
      this.comment = "";
    },
    cancel() {
      this.picture = null;
      this.content = "";
      this.dialog = false;
    },
  },
};
</script>

<style></style>
