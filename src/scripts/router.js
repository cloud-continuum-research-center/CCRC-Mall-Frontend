import Home from "@/pages/Home.vue";
import Join from "@/pages/Join.vue";
import Login from "@/pages/Login.vue";
import Test from "@/pages/Test.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import ItemRegistration from "@/pages/ItemRegistration.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/join', component: Join },
    { path: '/login', component: Login },
    { path: '/new_item', component: ItemRegistration },
    { path: '/product_detail/:id', name: 'ProductDetail', component: ProductDetail },
    { path: '/test', component: Test },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;