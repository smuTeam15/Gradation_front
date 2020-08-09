<template>
  <v-container>
    <v-col cols="12">
      <div class="page-body">
        <div class="story pb-1">
          <v-card>
            <div class="pa-3">
              <h1>Weekly 6 Topic</h1>
              <v-spacer />
              <h2 class="blue--text">Science</h2>
            </div>
            <v-divider></v-divider>
            <div class="pa-3">
              <h2>{{ science[3].title }}</h2>
            </div>

            <div class="px-3 pt-1">
              <h4 class="grey--text">
                {{ science[3].description }}
              </h4>
            </div>
            <div class="pa-3">
              {{ science[3].content }}
              <div class="blue--text">
                <a :href="science[3].url" class="blue--text" target="_blank"
                  >...view more</a
                >
              </div>
            </div>

            <div class="mt-1">
              <v-divider class="mb-1 py-2"></v-divider>
              <v-card-text
                v-for="comment in articleComments"
                :key="articleComments.indexOf(comment)"
                class="py-0 mb-2 font-weight-bold"
                ><span v-text="`${comment.username} `"></span
                ><span
                  class="font-weight-regular"
                  v-text="`${comment.comment}`"
                ></span
              ></v-card-text>
              <v-divider></v-divider>
              <v-textarea
                class="mb-1 py-2"
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
        </div>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import articles from "@/data/articles.js";
import science from "@/data/science.js";
import articleComments from "@/data/articleComments.js";

export default {
  data() {
    return {
      articles,
      articleComments,
      science,
      username: "woosteelz",
      userImage: "",
      comment: "",
    };
  },
  methods: {
    leaveComment({ username, userImage, comment }) {
      this.articleComments.push({ username, userImage, comment });
      this.comment = "";
    },
  },
};
</script>
