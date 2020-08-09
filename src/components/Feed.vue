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
        <v-img :src="feed.userImage" height="32px" width="32px" />
      </v-list-item-avatar>
      <v-list-item-content class="pa-0">
        <v-list-item-title
          v-text="`${feed.username}`"
          class="subtitle-2"
        ></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-img :src="feed.postImage" height="auto"></v-img>
    <v-card-text v-text="`${feed.caption}`" class="pb-1"></v-card-text>

    <v-card-actions class="py-0 mt-1">
      <v-btn icon @click="like">
        <v-icon v-if="feed.hasBeenLiked" color="red">mdi-heart</v-icon>
        <v-icon v-else>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text
      v-text="`좋아요 ${feed.likes}개`"
      class="py-0 mb-2 font-weight-bold"
    ></v-card-text>
    <v-card-text
      v-for="comment in feed.comments"
      :key="feed.comments.indexOf(comment)"
      class="py-0 mb-2 font-weight-bold"
    >
      <span v-text="`${comment.username} `"></span
      ><span class="font-weight-regular" v-text="`${comment.comment}`"></span
    ></v-card-text>
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
      >
        <template #append>
          <v-btn
            icon
            depressed
            small
            class="pb-1"
            @click="leaveComment({ username, userImage, comment })"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </template>
      </v-textarea>
    </div>
  </v-card>
</template>

<script>
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
    feed: Object,
  },
  methods: {
    leaveComment({ username, userImage, comment }) {
      this.feed.comments.push({ username, userImage, comment });
      this.comment = "";
    },
    like() {
      this.feed.hasBeenLiked ? this.feed.likes-- : this.feed.likes++;
      this.feed.hasBeenLiked = !this.feed.hasBeenLiked;
    },
  },
};
</script>

<style></style>
