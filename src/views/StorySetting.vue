<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="page-body">
          <div class="story pb-1">
            <div class="pa-3">
              <h1>Daily Mission Setting</h1>
            </div>

            <div class="pa-3">
              <h2>Post Daily Mission</h2>
            </div>

            <div class="pa-3">
              <v-text-field
                label="Input Daily Missoin"
                hide-details="auto"
              ></v-text-field>
            </div>

            <div class="pa-3" align="end">
              <v-btn color="primary" class="white--text">Update</v-btn>
            </div>

            <div class="pa-3">
              <h2>Delete Daily Mission</h2>
            </div>

            <!-- STORY 영역 -->
            <v-card max-width="830" class="mx-auto my-3" tile outlined>
              <v-slide-group class="mx-auto" multiple show-arrows>
                <v-slide-item
                  class="ma-3"
                  v-for="user in allUsers"
                  :key="allUsers.indexOf(user)"
                >
                  <v-hover v-slot:default="{ hover }">
                    <div class="btn-wrapper">
                      <v-btn class="button" fab icon>
                        <v-avatar class="avatar" size="48" @click="link">
                          <v-img :src="user.src"> </v-img>
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out black v-card--reveal white--text"
                              style="height: 100%;"
                            >
                              <v-icon>
                                mdi-delete
                              </v-icon>
                            </div>
                          </v-expand-transition>
                        </v-avatar>
                      </v-btn>
                    </div>
                  </v-hover>
                </v-slide-item>
              </v-slide-group>
            </v-card>
          </div>
          <!-- STORY 영역 끝 -->
          <div class="px-5 pt-5 d-flex justify-end">
            <h2>Auto Recommend</h2>
            <v-spacer></v-spacer>
            <div class="pb-3">
              <v-switch input-value="true"></v-switch>
            </div>
          </div>
          <div class="text--disabled pl-5">
            *해당 항목을 활성화하게 되면 Daily Mission이 매일 자동으로
            업데이트됩니다!
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import allUsers from "@/data/allUsers.js";

export default {
  props: {
    //allUsers: Array,
  },
  methods: {
    link() {},
  },
  data() {
    return {
      overlay: false,
      allUsers,
    };
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
