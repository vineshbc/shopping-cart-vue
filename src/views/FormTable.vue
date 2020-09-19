<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" id="productid" maxlength="10" v-model="productid" />
      <label class="form-control-label">Model/Product ID #</label>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="producttype" maxlength="10" v-model="productname" />
      <label class="form-control-label">Product Type</label>
    </div>
    <div class="form-group">
      <input type="number" class="form-control" id="Cost" maxlength="10" v-model="price"  />
      <label class="form-control-label">Cost</label>
    </div>
  </form>
</template>

<script>
export default {
  name: "formtable",
  props: ["formData","indexVal"],
  data() {
    return {
      value: "",
      productid: "",
      productname: "",
      price: "",
    };
  },
  watch: {
    productid(val) {
      let obj = {
        productid: val,
        productname: this.productname,
        price: this.price,
      };
      this.value = obj;
      this.$emit("formEntry", this.value);
    },
    productname(val) {
      let obj = {
        productid: this.productid,
        productname: val,
        price: this.price,
      };
      this.value = obj;
      this.$emit("formEntry", this.value);
    },
    price(val) {
      let obj = {
        productid: this.productid,
        productname: this.productname,
        price: val,
      };
      this.value = obj;
      this.$emit("formEntry", this.value);

      console.log("cost", this.value);
    },
  },
  created() {
    this.value = this.formData[this.indexVal];
    this.productid =
      this.value && this.value.productid ? this.value.productid : "";
    this.productname =
      this.value && this.value.productname
        ? this.value.productname
        : "";
    this.price =
      this.value && this.value.price ? this.value.price : "";
    console.log("createdval",this.value);
  },
};
</script>

<style scoped>
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