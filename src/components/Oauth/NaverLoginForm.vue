<template>
  <div>
    <!-- 네이버아이디로로그인 버튼 노출 영역 -->
    <div id="naverIdLogin"></div>
    <!-- //네이버아이디로로그인 버튼 노출 영역 -->
  </div>
</template>

<script
  src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
  charset="utf-8"
></script>
<!-- 네이버아디디로로그인 초기화 Script -->
<script>
var naverLogin = new naver.LoginWithNaverId({
  clientId: "qR0hTRf5VDeWwOnuVaug",
  callbackUrl:
    "http://ec2-3-34-35-157.ap-northeast-2.compute.amazonaws.com:8080/home",
  isPopup: true /* 팝업을 통한 연동처리 여부 */,
  loginButton: {
    color: "green",
    type: 3,
    height: 60,
  } /* 로그인 버튼의 타입을 지정 */,
});

/* 설정정보를 초기화하고 연동을 준비 */
naverLogin.init();

/* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
window.addEventListener("load", function() {
  naverLogin.getLoginStatus(function(status) {
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
  });
});
</script>
<!-- // 네이버아이디로로그인 초기화 Script -->
<script>
export default {};
</script>

<style></style>
