<template>
  <div class="container">
    <ul class="progressbar">
      <li
        :class="{'active':routeName === 'product','postcomplete':['customer','payment'].includes(routeName)}"
      >
        <p class="svgImg">
          <productSvg />
          <span class="title-text">Product Details</span>
        </p>
      </li>
      <li
        :class="{'active':routeName === 'customer','postcomplete':['payment'].includes(routeName)}"
      >
        <p class="svgImg">
          <customerSvg />
          <span class="title-text">Customer Details</span>
        </p>
      </li>
      <li :class="{'active':routeName === 'payment'}">
        <p class="svgImg">
          <paymentSvg />
          <span class="title-text">Payment info</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import productSvg from "../svg/ProductDetailSvg";
import customerSvg from "../svg/CustomerDetailSvg";
import paymentSvg from "../svg/PaymentInfoSvg";
export default {
  name: "stepProgress",
  data() {
    return {
      svgImg: {
        position: "absolute",
        bottom: "55px",
        left: "40px",
      },
      routeName: this.$route.name,
    };
  },
  watch: {
    $route() {
      this.routeName = this.$route.name;
    },
  },
  components: {
    productSvg,
    customerSvg,
    paymentSvg,
  },
};
</script>

<style scoped>
.container {
  /* width: 600px; */
  width: auto;
  margin: 40px auto;
}
.progressbar {
  counter-reset: step;
  position: relative;
  right: 30px;
  width: 130%;
}
.progressbar li {
  list-style-type: none;
  width: 25%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #7d7d7d;
}
.progressbar li:before {
  width: 20px;
  height: 20px;
  content: counter(step);
  counter-increment: step;
  line-height: 20px;
  border: 2px solid #7d7d7d;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
  /* z-index: 1; */
}
.progressbar li:after {
  width: 100%;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
}
.progressbar li.active:before {
  background-color: darkslategray;
  color: white;
}
.progressbar li.postcomplete + li:after {
  background-color: #55b776;
}
.progressbar li.postcomplete:before{
  background-image: url(../assets/reveived-icon.svg);
  border: none;
  content: "";
  margin-top: 3px;
}

.svgImg {
  position: absolute;
  bottom: 25px;
  left: 55px;
  width: 0px;
}
.title-text {
  white-space: pre;
  font-size: 10px;
  position: relative;
  right: 25px;
}
</style>