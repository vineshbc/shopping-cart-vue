<template>
  <div class="home">
    <div class="footer">
      <div class="left">
        <Logo />
      </div>
      <div class="center">
        <Mike style="padding-right:10px"></Mike>
        <VideoIcon style="padding-right:10px"></VideoIcon>
        <CallIcon style="padding-right:10px"></CallIcon>
      </div>
      <div class="right">
        <button class="button-billing" v-if="buttonVisible" @click="submit">Start Billing</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "../svg/CompanyIcon";
import Mike from "../svg/Mike";
import VideoIcon from "../svg/VideoIcon";
import CallIcon from "../svg/CallIcon";
import { EventBus } from "@/main";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Logo,
    Mike,
    VideoIcon,
    CallIcon,
  },
  props:['buttonVisible'],
  methods: {
    submit() {
      EventBus.$emit("toggleCart", true);
    },
  },
};
</script>
<style scoped>
.footer {
  height: 100px;
  display: flex;
  flex-shrink: 0;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  align-items: center;
  width: -webkit-fill-available;
}
.left,
.right {
  font-size: 14px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  display: flex;
  height: 20px;
}

.center {
  font-size: 18px;
  text-align: center;
  display: flex;

  margin: 0px 33%;
}

.right {
  text-align: right;
}
.button-billing {
  background-color: lightgrey;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
}
</style>
