<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="page-body">
          <v-card>
            <div class="story pa-3 pb-1">
              <div class="pa-3">
                <h1>Channel Setting</h1>
              </div>
              <v-divider></v-divider>
              <div class="pa-5 d-flex justify-space-between align-center">
                <h2 align="left">Update Channel</h2>
                <v-btn
                  @click="uDialog = !uDialog"
                  depressed
                  small
                  color="blue"
                  class="my-2 white--text"
                >Update</v-btn>
              </div>

              <v-divider></v-divider>

              <div class="pa-5 d-flex justify-space-between align-center">
                <h2 align="left">Delete Channel</h2>
                <v-btn
                  @click="dDialog = !dDialog"
                  depressed
                  small
                  color="blue"
                  class="my-2 white--text"
                >Delete</v-btn>
              </div>

              <div class="text--disabled pl-5">*채널 관리자가 아니면 Update Channel, Delete Channel은 불가합니다!</div>
            </div>
          </v-card>
        </div>

        <!-- Channel 수정용 dialog -->
        <v-dialog v-model="uDialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <strong>채널 수정</strong>
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
                  update_channel({
                    first_school,
                    second_school,
                    first_picture,
                    second_picture,
                    description,
                    category,
                  }), cancel()
                "
              >Update</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Channel 삭제용 dialog -->
        <v-dialog v-model="dDialog" persistent max-width="500px">
          <v-card>
            <v-card-title class="pa-0">
              <v-alert tile prominent type="error" width="100%">
                <h3>채널 삭제</h3>
              </v-alert>
            </v-card-title>
            <v-card-text>
              <div class="pt-3">
                <p>채널을 삭제하면 채널 가입자들이 더 이상 채널을 이용할 수 없게됩니다.</p>
                <p>신중히 결정하세요.</p>
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
                  delete_channel(), cancel()
                "
              >Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import categories from "@/data/categories.js";
import science from "@/data/science.js";
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    fab: false,
    uDialog: false,
    dDialog: false,
    first_school: "",
    second_school: "",
    first_picture: null,
    second_picture: null,
    description: "",
    category: "",
    categories,
  }),
  computed: {
    ...mapState(["User"]),
  },
  methods: {
    ...mapActions([
      "create_channel",
      "read_channel",
      "update_channel",
      "delete_channel",
    ]),
    cancel() {
      this.first_school = "";
      this.second_school = "";
      this.first_picture = null;
      this.second_picture = null;
      this.category = "";
      this.description = "";
      this.uDialog = false;
      this.dDialog = false;
    },
  },
};
</script>
