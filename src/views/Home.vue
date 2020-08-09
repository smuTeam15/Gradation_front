<template>
  <v-container fluid grid-list-md>
    <v-row dense wrap justify="start" align="start">
      <v-col
        cols="12"
        v-for="card in cards"
        :key="cards.indexOf(card)"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        x="12"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              @click="$router.push({ name: 'MainPage' })"
              class="mx-auto"
              max-width="300"
              max-height="350"
            >
              <div class="my-1 d-flex justify-end">
                <v-img
                  class="ma-2"
                  width="100"
                  height="150"
                  contain
                  :src="card.src"
                ></v-img>
                <v-img
                  class="ma-2"
                  width="100"
                  height="150"
                  contain
                  :src="card.src2"
                ></v-img>
              </div>
              <v-divider />
              <v-card-text>
                <h3
                  v-text="`${card.title1} &`"
                  class="title primary--text my-2"
                ></h3>
                <h3
                  v-text="`${card.title2}`"
                  class="title primary--text my-2"
                ></h3>
                <h4 v-text="`${card.descript}`"></h4>
                <h5
                  v-text="`${card.major}`"
                  class="caption grey--text text--darken-2"
                ></h5>
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="grey"> </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title1: "Inha High",
          title2: "Stanford Univ",
          descript: "CLS167607",
          major: "Sport",
          minor: "",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq-h20zqWDYMWeSgIm1K40VWlfIz5oCzRATMzYm88gfKrEMCku&usqp=CAU",
          src2:
            "https://w.namu.la/s/0d3b0a0db99e6f7e69020b339b629a070107c9d2122a310f6797f194b50ad782304b787e369f93a834164e7367d10e04ae13eb16ff2be8ddf0d923fb6f59801acb7ccfaa46b9a4b2f147b0ddfc93fdcdbe8d209990527ef9fede2ad994983711",
        },
        {
          title1: "Usin High",
          title2: "Oxford Univ",
          descript: "CLS023345",
          major: "Science",
          minor: "",
          src:
            "https://w.namu.la/s/46f46e4857a80fd2dfecb73eef27b0f084ccb49e12c409668ec7c6e34f7401f0fd4f77b00e58cfbb0f23c0dd704b0b5744cba255492ea433c9dc301087946fb314d5c821b4f1ba10a790c3a3bf967643f485f4c04d9692e4720d10a4993cba92",
          src2:
            "https://ww.namu.la/s/76c91e6718e9320fd1ec30174898a6e37f37314be00fbb2f7d86d5bce57de19729b3039aeb3dcdc582d4df80f339d7fcd8362f1fce95df182c354ee552adde469543fd51770dfb05111b023fb30835cadf14bb2d226bdd16581da4190c00462c2f367e546fb3afe3208d6320a037e378",
        },
        {
          title1: "Bupyeong High",
          title2: "Havard Univ",
          descript: "CLS667881",
          major: "Community",
          minor: "",
          src:
            "https://ww.namu.la/s/9b66e90e52352e88380571740e19fd3a7e526d15e2762f8d1c3c84db23c37e5fb539b81cc97b66119daa63fd66b6a879342c238016430a7fe00ebdd25b34441d09617ecd6e023da9d2018b58d5b935a7a1fafba05a01cf6c2eacdc75c673c7e6764a024b3c62c861e4362528880c895b",
          src2:
            "https://ww.namu.la/s/bab0f430c3a92b7923f2cc52a0638381419d9b4bc9c712cf72a8953431e97c20be401d7017309bc6b50ff0d45f63fe8cbd7e190ff4b7817b628f74240e448c008b207164d2414b8b2b91d672f5d3613e210b29e70cb85577e2fa4ad6180ee123213f477897ac0b3db9f7fccb4c301082",
        },
        {
          title1: "Yulcheon High",
          title2: "Beijing Univ",
          descript: "CLS224356",
          major: "Culture",
          minor: "",
          src:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t31.0-8/1233190_1378539029042333_1105234693_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=CIDFVg4OJgkAX93Lgvo&_nc_ht=scontent-ssn1-1.xx&oh=2ea3ca0a267f4f93df3d635dcdd71ba7&oe=5F084DD5",
          src2:
            "https://ww.namu.la/s/134c20e713d4422f80b6a19473d3a6b89fdbf335c5b856908c01a87cd5cc4f78a79e167c73f1a2b2421a3d38e955cd8e5d8b89f9b0753acc6808fbbe0cb4f8f258fa61f8f9727e2899daab01796a486414bc0a8c8bdee395f3a1cd120d564f408a973fa89ee05dc19f3c5c560280e39c",
        },
      ],
      overlay: false,
    };
  },
};
</script>
