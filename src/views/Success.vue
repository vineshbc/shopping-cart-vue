<template>
  <div class="success-main">
    <div class="success-img">
      <SuccessImg />
    </div>
    <div class="success-info">
      {{text}}
      <b>{{getCustomerDetail && getCustomerDetail.email}}</b>
    </div>
    <button class="successs-button" @click="submit">{{buttonname}}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SuccessImg from "../svg/SuccessImg";
export default {
  name: "success",
  data() {
    return {
      text: "Thanks for the\nconfirmation! We have sent payment link to\n",
      buttonname: "Resend Invoice",
    };
  },
  components: {
    SuccessImg,
  },
  computed: {
    ...mapGetters(["getCustomerDetail"]),
  },
  methods: {
    submit() {},
  },
};
</script>

<style scoped>
.success-main {
  text-align: center;
  margin-top: 25vh;
}
.success-info {
  white-space: break-spaces;
  line-height: 25px;
}
.successs-button {
  background-color: transparent;
  border: 2px solid #008cba;
  color: #008cba;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  margin-left: 100px;
  border-radius: 32px;
  outline: none;
}
</style>