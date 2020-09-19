<template>
  <div>
    <header class="header-main">
      <div class="header-item">
        <Logo />
      </div>
      <div class="header-item2" @click="closeCart">
        <CloseIcon />
      </div>
    </header>
    <div class="cart-main">
      <div class="header"></div>
      <StepProgress v-if="buttonname" />
      <!-- <AddTab /> -->
      <router-view />
      <Order v-if="buttonname" />
      <button v-if="buttonname" class="button" @click="submit">{{buttonname}}</button>
    </div>
  </div>
</template>

<script>
import StepProgress from "./StepProgress";
import AddTab from "./AddTab";
import Order from "./orderList";
import { EventBus } from "@/main";
import Logo from "../svg/CompanyIcon";
import CloseIcon from "../svg/closeicon";
export default {
  name: "cart",
  data() {
    return {
      buttonname: "Submit & Go to Customer Details",
    };
  },
  components: {
    StepProgress,
    AddTab,
    Order,
    Logo,
    CloseIcon,
  },
  watch: {
    $route(to, from) {
      this.handleRoute();
    },
  },
  methods: {
    closeCart() {
      EventBus.$emit("toggleCart", false);
    },
    submit() {
      let routename = this.$route.name;
      switch (routename) {
        case "product":
          this.$router.push({ name: "customer" });
          break;
        case "customer":
          this.$router.push({ name: "payment" });
          EventBus.$emit("AddDetails");
          break;
        case "payment":
          this.$router.push({ name: "success" });
          break;
        case "success":
          break;
      }
    },
    handleRoute() {
      let routename = this.$route.name;
      switch (routename) {
        case "product":
          this.buttonname = "Submit & Go to Customer Details";
          break;
        case "customer":
          this.buttonname = "Submit & Go to Payment Info";
          break;
        case "payment":
          this.buttonname = "Submit";
          break;
        case "success":
          this.buttonname = false;
          break;
      }
    },
  },
  created() {
    this.$router.push({ name: "product" });
    this.buttonname = "Submit & Go to Customer Details";
  },
};
</script>

<style scoped>
.cart-main {
}
.button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  width: 30%;
  outline: none;
}
.header-main {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  text-align: center;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
}
.header-item {
  width: 100%;
  text-align: left;
}
.header-item2 {
  text-align: right;
}
</style>