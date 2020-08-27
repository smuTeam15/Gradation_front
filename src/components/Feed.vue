<template>
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
    </v-list-item>
    <v-divider />
    <v-img :src="post.picture" height="auto"></v-img>
    <v-card-text v-text="`${post.content}`" class="pb-1"></v-card-text>

    <v-card-actions class="py-0 mt-1">
      <v-btn
        v-if="post.likesId.includes(post.likesId.find(x=>x.userId === User.userId))"
        icon
        @click="delete_like(post.likesId)"
      >
        <v-icon color="red">mdi-heart</v-icon>
      </v-btn>
      <v-btn v-else icon @click="create_like(post.id)">
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
      class="py-0 mb-2 font-weight-bold"
    >
      <span v-text="`${item.userName} `"></span>
      <span class="font-weight-regular" v-text="`${item.comment}`"></span>
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
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "woosteelz",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
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
    ...mapActions(["create_comment", "create_like", "delete_like"]),
    clear() {
      this.comment = "";
    },
  },
};
</script>

<style></style>
