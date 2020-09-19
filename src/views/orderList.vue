<template>
  <div class="order-conatiner">
    <div class="order-main">
      <h3 style="text-align: left;
    padding: 0px 15px;    padding-top: 15px;
">ORDER SUMMARY</h3>
      <hr style="
    margin: 0px 15px;
" />
      <main class="order-body" v-if="isEnable">
        <div class="product">
          <div class="product-detail" v-for="(product,index) in productData" :key="index">
            <div class="order-detail">
              <h3 class="order-title">Item-{{index+1}}</h3>
            </div>
            <div class="order-detail">
              <p class="order-title">Product ID</p>
              <p class="order-data">{{product.productid}}</p>
            </div>
            <div class="order-detail">
              <p class="order-title">Product Name</p>
              <p class="order-data">{{product.productname}}</p>
            </div>
            <div class="order-detail">
              <p class="order-title">Price</p>
              <p class="order-data">{{product.price}}</p>
            </div>
          </div>
        </div>
        <hr style="
    margin: 0px 15px;
" />
        <div class="order-detail" >
          <h3 class="order-title">Grand Total</h3>
          <h3 class="order-data">{{grandtotal()}}</h3>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "@/main";
export default {
  name: "orderlist",
  data() {
    return {
      isEnable: true,
      productData: [],
    };
  },
  computed: {
    ...mapGetters(["getProductData"]),

    // productData() {
    //   console.log("getArr", this.getProductData);
    //   return this.getProductData;
    // },
  },

  created() {
    EventBus.$on("produtData", this.setData);
  },
  methods: {
    grandtotal() {
      let price = 0;
      this.productData.forEach((item) => {
        price += item.price ? parseFloat(item.price) : 0;
      });

      return price;
    },
    setData(val) {
      this.isEnable = false;
      console.log("setData", val);
      this.productData = val;
      this.isEnable = true;
    },
  },
};
</script>

<style scoped>
.order-conatiner {
  position: absolute;
  margin-top: 20.5%;
  padding: 2px 25px;
}
.order-main {
  background-color: #fff;
  border-radius: 6px;
  min-width: 340px;
  height: 200px;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
}
.order-detail {
  display: flex;
  padding: 0px 15px;
  height: 35px;
  font-size: 12px;
}
.order-title {
  width: 100%;
  text-align: left;
}
.order-data {
  width: 100%;
  text-align: right;
}
.product {
  max-height: 90px;
  overflow-y: auto;
  min-height: 90px;
}
.product::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.product::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0.3);
  border-radius: 2.5px;
  width: 5px;
}
.product::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 7.5px;
  width: 5px;
}
</style>