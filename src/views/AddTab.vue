<template>
  <div class="tab-main">
    <TabCard :tabs="tabs" :initialTab="initialTab" @addTab="tabAdd" @deleteTab="tabDelete">
      <!-- <template :slot="`tab-panel-Product1`">Hello</template> -->

      <template v-for="(tab,index) in tabs" :slot="`tab-panel-${tab}-${index+1}`">
        <FormTable
          :key="index"
          :formData="formArr"
          :indexVal="index"
          @formEntry="setFormData($event,index)"
        ></FormTable>
      </template>
    </TabCard>
  </div>
</template>

<script>
import TabCard from "../views/TabCard";
import FormTable from "./FormTable";
import { EventBus } from "@/main";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AddTab",
  components: {
    TabCard,
    FormTable,
  },
  data() {
    return {
      initialTab: "",
      tabs: [],
      formArr: [],
    };
  },
  computed: {
    ...mapGetters(["getProductData"]),
  },
  watch: {
    getProductData(val) {
      console.log("watching", val);
    },
  },
  mounted() {
    this.setProductData(this.formArr);
  },
  methods: {
    ...mapMutations(["setProductData"]),
    tabAdd() {
      let prod = `Product`;
      this.tabs.push(prod);
    },
    setFormData(val, index) {
      this.formArr[index] = val;
      this.setProductData(this.formArr);
      console.log("formArry", this.formArr);
      EventBus.$emit("produtData", this.formArr);
    },
    tabDelete(index) {
      this.tabs.splice(index, 1);
      this.formArr.splice(index, 1);
      this.setProductData(this.formArr);
      console.log(this.tabs);
    },
  },
};
</script>

<style scoped>
.tab-main {
  position: absolute;
  margin-top: 32px;
  padding: 0px 2%;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  height: 160px;
  width: auto;
}

</style>
