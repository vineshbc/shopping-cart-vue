<template>
  <div class="card">
    <header class="card-header">
      <ul class="tab-heads">
        <li
          class="tab-head"
          v-for="(tab,index) in tabs"
          :key="index"
          v-bind:class="{
            'tab-head--active': activeTab === getTabHeader(tab,index)
          }"
          v-on:click="switchTab(getTabHeader(tab,index),index+1);"
        >
          <slot :name="tabHeadSlotName(tab)">{{getTabHeader(tab,index) }}</slot>
          <DeleteSvg class="delete-img" v-on:click.native="deleteItem(index)" />
        </li>
        <li>
          <button class="btn" @click="addItem(tabs.length)">
            <span class="prim-plus">+</span> Add More
          </button>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel">
        <slot :name="tabPanelSlotName"></slot>
      </div>
    </main>
  </div>
</template>

<script>
import DeleteSvg from "../svg/DeleteSvg";
export default {
  props: {
    initialTab: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: "",
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
  },
  components: {
    DeleteSvg,
  },
  methods: {
    getTabHeader(tab, index) {
      return `${tab}-${index + 1}`;
    },
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },
    addItem(length) {
      if (this.tabs.length === 0) {
        this.switchTab(`Product-${1}`);
      }
      this.$emit("addTab");
    },
    deleteItem(index) {
      this.switchTab(`Product-${1}`);
      this.$emit("deleteTab", index);
    },
    switchTab(tabName, item = null) {
      if (!item || this.tabs.length >= item) {
        this.activeTab = tabName;
      }
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 6px;
  min-width: 340px;
  height: 240px;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
}

.card-header {
  background: #e7e7e7;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  max-width: 340px;
  overflow-x: auto;
  /* padding: 15px 8px 0; */
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-header::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.card-header::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0.3);
  border-radius: 2.5px;
  width: 5px;
}
.card-header::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 7.5px;
  width: 5px;
}

.tab-heads {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: -4px;
}

.tab-head {
  padding: 11px 18px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  cursor: pointer;
  color: black;
  font-size: 14px;
  display: inline-flex;
  white-space: nowrap;
}

.tab-head--active {
  background-color: #fff;
  color: #333;
  transition: 0.4s;
}

.card-body {
  padding: 20px 16px;
}
.btn {
  border: none;
  color: blue;
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
}

/* Darker background on mouse-over */
.prim-plus {
  font-size: 16px;
  padding-right: 3px;
  padding-bottom: 2px;
}
.delete-img {
  width: 20px;
  padding-left: 15px;
}
</style>
