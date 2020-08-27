<template>
  <v-container fluid grid-list-md>
    <v-row dense wrap justify="start" align="start">
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" x="12">
        <template v-for="item in User.Channel">
          <v-card
            :key="User.Channel.indexOf(item)"
            @click="enterChannel(item.id)"
            class="mx-auto"
            max-width="300"
            max-height="350"
          >
            <div class="my-1 d-flex justify-end">
              <v-img class="ma-2" width="100" height="150" contain :src="item.firstPicture"></v-img>
              <v-img class="ma-2" width="100" height="150" contain :src="item.secondPicture"></v-img>
            </div>
            <v-divider />
            <v-card-text>
              <h3 v-text="`${item.firstSchool} &`" class="title primary--text my-2"></h3>
              <h3 v-text="`${item.secondSchool}`" class="title primary--text my-2"></h3>
              <h4 v-text="`${item.description}`"></h4>
              <h5 v-text="`${item.category}`" class="caption grey--text text--darken-2"></h5>
            </v-card-text>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="grey"></v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-col>
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
            <span>채널 생성</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="dialog = !dialog"
                fab
                dark
                small
                color="deep-purple"
                v-on="on"
                :attrs="attrs"
              >
                <v-icon>mdi-subdirectory-arrow-left</v-icon>
              </v-btn>
            </template>
            <span>채널 가입</span>
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
                <v-icon>mdi-delete-forever</v-icon>
              </v-btn>
            </template>
            <span>채널 탈퇴</span>
          </v-tooltip>
        </v-speed-dial>

        <!-- Channel 생성용 dialog -->
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <strong>채널 생성</strong>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <div class="pt-3">
                <v-text-field
                  v-model="first_school"
                  label="Solo"
                  placeholder="1st School"
                  solo
                  append-outer-icon="mdi-ampersand"
                ></v-text-field>
                <v-text-field v-model="second_school" label="Solo" placeholder="2nd School" solo></v-text-field>
                <v-text-field v-model="description" label="Solo" placeholder="Description" solo></v-text-field>
              </div>
              <div class="pb-3">
                <v-file-input
                  v-model="first_picture"
                  label="1st School logo"
                  accept="image/*"
                  chips
                  prepend-icon="mdi-camera"
                ></v-file-input>
                <v-file-input
                  v-model="second_picture"
                  label="2nd School logo"
                  accept="image/*"
                  chips
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </div>
              <div class="pt-3">
                <v-select v-model="category" :items="categories" label="Category" solo></v-select>
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
                  create_channel({
                    first_school,
                    second_school,
                    first_picture,
                    second_picture,
                    description,
                    category,
                  }), cancel()
                "
              >Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app-bar>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router/index";
import categories from "@/data/categories.js";

export default {
  data() {
    return {
      fab: false,
      dialog: false,
      first_school: "",
      second_school: "",
      first_picture: null,
      second_picture: null,
      description: "",
      categories,
      category: "",
    };
  },
  computed: {
    ...mapState(["User"]),
  },
  methods: {
    ...mapActions([
      "create_channel",
      "read_channel",
      "update_channel",
      "delete_channel",
      "read_post",
      "read_dailyMission",
      "read_topic",
    ]),
    enterChannel(channelId) {
      console.log(channelId);
      this.$store.state.User.currentChannel = channelId;
      this.read_post();
      this.read_dailyMission();
      this.read_topic();
      router.push({ name: "MainPage" });
    },
    cancel() {
      this.first_school = "";
      this.second_school = "";
      this.first_picture = null;
      this.second_picture = null;
      this.category = "";
      this.description = "";
      this.dialog = false;
    },
  },
};
</script>
