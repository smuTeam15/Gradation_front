<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-card width="400">
        <v-card-title primary-title class="d-flex justify-center">
          소셜 미디어 계정으로 로그인
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-center">
          <NaverLogin
            client-id="qR0hTRf5VDeWwOnuVaug"
            callback-url="http://localhost:8080/oauth2/authorization/naver"
            :is-popup="true"
            :callbackFunction="callbackFunction"
          />
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
          ></GoogleLogin>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import NaverLogin from "vue-naver-login";
import GoogleLogin from "vue-google-login";

export default {
  components: { NaverLogin, GoogleLogin },
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
    callbackFunction(status) {
      if (status) {
        /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
        var email = naverLogin.user.getEmail();
        if (email == undefined || email == null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
          naverLogin.reprompt();
          return;
        }

        window.location.replace(
          "http://" +
            window.location.hostname +
            (location.port == "" || location.port == undefined
              ? ""
              : ":" + location.port) +
            "/sample/main.html"
        );
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    },
  },
};
</script>

<style></style>
