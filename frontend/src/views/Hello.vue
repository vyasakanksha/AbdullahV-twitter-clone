<template>
  <div class="hello-root">
    <RegisterPopup v-if="$store.state.registerPage"></RegisterPopup>
    <div class="section-1">
      <span class="text-box">
        <span class="icon"><i class="fas fa-search"></i></span>
        <span class="text">Follow your interests.</span>
      </span>
      <span class="text-box">
        <span class="icon"><i class="fas fa-user-friends"></i></span>
        <span class="text"
          >Hear what people are<br />
          talking about.</span
        >
      </span>
      <span class="text-box">
        <span class="icon"><i class="far fa-comment"></i></span>
        <span class="text">Join the conversation.</span>
      </span>
    </div>

    <div class="section-2">
      <div class="section-2-inner">
        <i style="color: #1da1f2; font-size: 36px" class="fab fa-twitter"></i>
        <br /><br />
        <span class="s2-text1"
          >See what's happening <br />
          in the world right now
        </span>
        <div style="margin: 66px 0px"></div>
        <span style="font-weight: bolder; font-size: 17px"
          >Join Twitter today.</span
        >
        <div style="margin: 10px 0px"></div>
        <TwitterButton
          clickEvent="toggleRegisterPage"
          h="40px"
          w="370px"
          br="25px"
          text="Sign Up"
          bgType="blue"
        ></TwitterButton>
        <div style="margin: 10px 0px"></div>

        <router-link to="/login">
          <TwitterButton
            h="40px"
            w="370px"
            br="25px"
            text="Log In"
            bgType="white"
          ></TwitterButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterButton from "@/components/TwitterButton";
import RegisterPopup from "@/components/RegisterPopup";

export default {
  components: {
    TwitterButton,
    RegisterPopup,
  },
};
</script>

<style scoped>
.hello-root {
  width: 100%;
  height: 100%;
  display: flex;
}

.section-1,
.section-2 {
  width: 50%;
  height: 100%;
}

.section-1 {
  background: #1da1f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25px;
}

.section-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-box {
  margin: 25px 0px;
  display: flex;
}

.icon {
  margin: 0px 10px;
}

.s2-text1 {
  font-size: 25px;
  font-weight: bolder;
}

@media screen and (max-width: 812px) {
  .hello-root {
    flex-direction: column;
  }
  .section-2,
  .section-1 {
    width: 100%;
    height: 100%;
  }
}
</style>
