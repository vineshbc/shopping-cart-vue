<template>
  <div class="payment-main">
    <h3>Choose payment method</h3>
    <div class="chip-body">
      <div v-for="(list,index) in paymentType" :key="index">
        <div class="chip">
          <div class="chkbx">
            <label class="container-payment">
              <input type="radio" v-model="selected" :value="list.value" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="detail">
            <component v-if="!list.isImg" class="payment-image" :is="list.img" />
            <img v-if="list.isImg" class="payment-image" src="../assets/store-pick.png" />
            <p class="file-name">{{list.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cash from "../svg/Cash.vue";
import OnlineBanking from "../svg/OnlineBanking.vue";
export default {
  name: "payment",
  data() {
    return {
      paymentType: [
        {
          img: Cash,
          text: "Cash on Delivery",
          value: "cash",
          isImg: false,
        },
        {
          img: OnlineBanking,
          text: "Online Banking",
          value: "card",
          isImg: false,
        },
        {
          img: "../assets/store-pick.png",
          text: "Pick up from Store",
          value: "store",
          isImg: true,
        },
      ],
      selected: "cash",
    };
  },
};
</script>

<style scope>
.payment-main {
  position: absolute;
  margin-top: 20px;
  padding: 2px 25px;
}
.chip {
  display: inline-block;
  padding: 2px 25px;
  font-size: 16px;
  border-radius: 5px;
  width: 290px;
  background-color: #ffffff;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
  margin-bottom: 10px;
}
input[type="checkbox"] {
  border-radius: 2px;
  background-color: #1573e1;
}
.checkmark {
  position: absolute;
  top: 12px;
  left: 0;
  height: 15px;
  width: 16px;
  background-color: white;
  border-radius: 50%;
  border: 1.5px solid rgb(163, 172, 185);
}
.container-payment {
  position: relative;
  bottom: 36px;
  cursor: pointer;
  display: inline-flex;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container-payment input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.container-payment input:checked ~ .checkmark {
  background-color: #1573e1;
  border: none;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container-payment input:checked ~ .checkmark:after {
  display: block;
}
.container-payment .checkmark:after {
  left: 6px;
  top: 2px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.file-name {
  padding-bottom: 10px;
  font-size: 14px;
  font-family: var(--font-bold);
  letter-spacing: 0;
  color: #303b4b;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-flex;
}

.detail {
  display: inline-flex;
  width: 95%;
}
.chkbx {
  width: 0%;
  display: inline-block;
}
.payment-image {
  padding-left: 30px;
  padding-top: 10px;
}
</style>