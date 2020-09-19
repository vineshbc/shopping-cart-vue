<template>
  <div class="customer-conatiner">
    <div class="customer-main">
      <div class="customer-body">
        <div class="form-group">
          <input type="text" class="form-control" maxlength="30" v-model="name" />
          <label class="form-control-label">Name</label>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" maxlength="30" v-model="email" />
          <label class="form-control-label">Email ID</label>
        </div>
        <div class="form-group">
          <input type="number" class="form-control" maxlength="30" v-model="mobile" />
          <label class="form-control-label">Phone Number</label>
        </div>
        <h3 style="text-align: start;
    padding-left: 5px;">Address Details</h3>
        <div class="form-group">
          <input type="text" class="form-control" maxlength="30" v-model="address" />
          <label class="form-control-label">Address</label>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" maxlength="20" v-model="city" />
          <label class="form-control-label">City</label>
        </div>
        <div class="form-group">
          <input type="number" class="form-control" maxlength="10" v-model="pincode" />
          <label class="form-control-label">Pincode</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { EventBus } from "@/main";
export default {
  name: "customer",
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      pincode: "",
    };
  },
  computed: {
    ...mapGetters(["getCustomerDetail"]),
  },
  created() {
    EventBus.$on("AddDetails", this.setDetails);
  },
  methods: {
    ...mapMutations(["setCustomerDetail"]),
    setDetails() {
      let obj = {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        address: this.address,
        city: this.city,
        pincode: this.pincode,
      };
      this.setCustomerDetail(obj);
      console.log("customerDetail>>", this.getCustomerDetail);
    },
  },
};
</script>

<style scoped>
.customer-conatiner {
  position: absolute;
  margin-top: 5%;
  padding: 2px 25px;
}
.customer-body {
  padding: 10px 5px;
  max-height: 180px;
  overflow-y: auto;
}
.customer-body::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.customer-body::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0.3);
  border-radius: 2.5px;
  width: 5px;
}
.customer-body::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 7.5px;
  width: 5px;
}
.customer-main {
  background-color: #fff;
  border-radius: 6px;
  min-width: 340px;
  height: 250;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
}
.form-group {
  position: relative;
  min-height: 3.5em;
}

input.form-control {
  height: 1em;
  position: absolute;
  top: 18px;
  left: 6px;
  border-bottom: 2px solid black;
  outline: none;
  border-width: -5px;
  border-width: 0 0 2px;
  width: 95%;
  padding-bottom: 5px;
}

label.form-control-label {
  position: absolute;
  font-size: 0.8em;
  top: 0;
  font-size: 11px;
  left: 5px;
  text-transform: capitalize;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>