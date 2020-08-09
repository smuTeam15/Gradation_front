<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="page-body">
          <v-card>
            <div class="story pb-1">
              <div class="pa-3">
                <h1>Weekly Topic Setting</h1>
              </div>
              <v-divider></v-divider>
              <div class="pa-5">
                <h2>Post Weekly Topic</h2>
              </div>

              <div class="px-5">
                <v-text-field
                  placeholder="Input Weekly Topic"
                  hide-details="auto"
                  solo
                  outlined
                  flat
                >
                  <template #append>
                    <v-btn
                      depressed
                      small
                      color="blue"
                      class="my-2 white--text"
                    >
                      Update
                    </v-btn>
                  </template></v-text-field
                >
              </div>
              <v-divider class="mt-5"></v-divider>

              <div class="pt-5 px-5 d-flex justify-space-between">
                <h2 class="mt-2" align="left">Recommend Topics</h2>
                <div>
                  <v-text-field
                    placeholder="(Option) Keyword"
                    hide-details="auto"
                    solo
                    outlined
                    flat
                  ></v-text-field>
                </div>
              </div>
              <div class="pt-4 px-2">
                <v-chip-group mandatory active-class="blue--text">
                  <v-chip
                    v-for="cate in category"
                    :key="category.indexOf(cate)"
                    @click="asd = true"
                  >
                    {{ cate }}
                  </v-chip>
                </v-chip-group>
              </div>
              <div align="right" class="pr-7 pt-1">
                <v-btn depressed small color="blue" class="my-2 white--text">
                  Update
                </v-btn>
              </div>

              <v-card v-show="asd" class="mx-auto" max-width="600">
                <v-list>
                  <v-list-item-group active-class="border" color="indigo">
                    <v-list-item
                      v-for="sc in science"
                      :key="science.indexOf(sc)"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="sc.title"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>

              <v-divider class="mt-5"></v-divider>

              <div class="px-5 pt-5 d-flex justify-end">
                <h2>Auto Recommend</h2>
                <v-spacer></v-spacer>
                <div class="pb-3">
                  <v-switch input-value="true" color="blue"></v-switch>
                </div>
              </div>
              <div class="text--disabled pl-5">
                *해당 항목을 활성화하게 되면 뉴스 토픽이 매주 자동으로
                업데이트됩니다!
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import category from "@/data/category.js";
import science from "@/data/science.js";

export default {
  data: () => ({
    DataString: null,
    selectionType: "leaf",
    selection: [],
    category,
    science,
    asd: false,
    items: [
      {
        id: 1,
        name: "스포츠",
        children: [
          { id: 2, name: "농구" },
          { id: 3, name: "축구" },
          { id: 4, name: "배구" },
        ],
      },
      {
        id: 5,
        name: "여가",
        children: [
          { id: 6, name: "여행" },
          { id: 7, name: "독서" },
          { id: 8, name: "영화" },
        ],
      },
    ],
  }),
  methods: {
    getData() {
      axios
        .get("http://169.63.212.7:8000/api/public")
        .then((res) => {
          this.DataString = res.data;
          console.log(this.DataString);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
