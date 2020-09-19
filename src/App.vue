<template>
  <div id="app">
    <div id="video-img">
      <Home :buttonVisible="!showCart"></Home>
    </div>
    <div v-if="showCart" id="cart-view">
      <cart />
    </div>
  </div>
</template>
<script>
import Home from "./views/Home";
import cart from "./views/cart";
import { EventBus } from "@/main";
export default {
  name: "APP",
  data() {
    return {
      showCart: false,
    };
  },
  watch: {
    $route(to, from) {
      if (!this.$route.name) {
        this.showCart = false;
      }
    },
  },
  components: {
    Home,
    cart,
  },
  created() {
    this.$router.push("/");
    EventBus.$on("toggleCart", this.displayCart);
  },
  methods: {
    displayCart(value) {
      if (!value) {
        this.$router.push("/");
      }
      this.showCart = value;
    },
  },
};
</script>
<style>
body {
  box-sizing: border-box;
  margin: 0px;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100vh;
}
#video-img {
  display: inline-block;
  width: -webkit-fill-available;
  background-color: grey;
}
#cart-view {
  display: inline-block;
  width: 42%;
  height: -webkit-fill-available;
  /* background
  : #e7e7e7; */
}
@media only screen and (max-width: 600px) {
  #cart-view {
    width: 100%;
  }

}
</style>
