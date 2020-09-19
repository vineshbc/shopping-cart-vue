import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/product',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "addtab" */ '../views/AddTab.vue')
    },
    {
        path: '/customer',
        name: 'customer',
        component: () =>
            import ( /* webpackChunkName: "addcustomer" */ '../views/AddCustomer.vue')
    }, {
        path: '/payment',
        name: 'payment',
        component: () =>
            import ( /* webpackChunkName: "payment" */ '../views/Payment.vue')
    },
    {
        path: '/success',
        name: 'success',
        component: () =>
            import ( /* webpackChunkName: "success" */ '../views/Success.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router