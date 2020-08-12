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
              <v-card
                width="244"
                height="55"
                href="/oauth2/authorization/naver"
                flat
              >
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/naver.png')"
                />
              </v-card>
            </div>
            <div class="mb-3">
              <v-card
                width="250"
                height="60"
                href="/oauth2/authorization/google"
                flat
              >
                <v-img
                  eager
                  max-width="100%"
                  max-height="100%"
                  :src="require('@/assets/google.png')"
                />
              </v-card>
            </div>
            <!-- <NaverLogin
            client-id="qR0hTRf5VDeWwOnuVaug"
            callback-url="login/oauth2/code/naver"
            :is-popup="true"
            :callbackFunction="callbackFunction"
          /> -->
            <!-- <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
          ></GoogleLogin> -->
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
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
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    onFailure(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    google() {
      window.open("http://localhost:8080/oauth2/authorization/google", "_self");
    },
  },
};
</script>

<style></style>
