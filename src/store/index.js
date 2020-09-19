import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        productData: "",
        customerDetail: ""
    },
    getters: {
        getProductData: (state) => {
            return state.productData
        },
        getCustomerDetail: (state) => {
            return state.customerDetail
        }
    },
    mutations: {
        setProductData: (state, data) => {
            state.productData = data
        },
        setCustomerDetail: (state, data) => {
            state.customerDetail = data
        }
    },
    actions: {},
    modules: {}
})

export default store