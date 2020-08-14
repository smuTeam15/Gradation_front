<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="d-inline-block" width="400">
        <v-card-title primary-title class="d-flex justify-center">
          소셜 미디어 계정으로 로그인
        </v-card-title>
        <v-divider />
        <v-container>
          <v-row justify="center" align="center">
            <div class="my-3">
              <!-- 네이버아이디로로그인 버튼 노출 영역 -->
              <NaverLoginForm />
              Testing
              <v-card
                width="244"
                height="55"
                router
                :to="{ name: 'Home' }"
                flat
              >
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/naver.png')"
                />
              </v-card>
              REST(AJAX)
              <v-card width="244" height="55" @click="naver()" flat>
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/naver.png')"
                />
              </v-card>
              Anchor Tag
              <v-card width="244" height="55" @click="nlogin()" flat>
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/naver.png')"
                />
              </v-card>
            </div>
            <div class="mb-3">
              REST(AJAX)
              <v-card width="250" height="60" @click="google()" flat>
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/google.png')"
                />
              </v-card>
              Anchor Tag
              <v-card width="250" height="60" @click="glogin()" flat>
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/google.png')"
                />
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-card>
      <v-app-bar app max-height="48px" color="white" dense bottom>
        <strong class="mx-5"
          >Copyright © GRADATION service team. All rights reserved.</strong
        >
      </v-app-bar>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NaverLoginForm from "@/components/Oauth/NaverLoginForm";

export default {
  components: {
    NaverLoginForm,
  },
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id:
          "789671876303-lh7hq3987d5i3ekgf6lr7nomh9doe4fq.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 60,
        longtitle: true,
      },
    };
  },
  methods: {
    ...mapActions(["naver", "google"]),
    glogin() {
      window.open("/oauth2/authorization/google", "_self");
    },
    nlogin() {
      window.open("/oauth2/authorization/naver", "_self");
    },
  },
};
</script>

<style></style>
