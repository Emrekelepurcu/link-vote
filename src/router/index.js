import Vue from 'vue'
import VueRouter from 'vue-router'

import list from '@views/list/route'
import addNewItem from '@views/add-new-item/route'
import errorPage from '@views/404/route'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
			...list, // default page route
			...addNewItem,
			...errorPage // 404 page route
    ]
})

export default router
