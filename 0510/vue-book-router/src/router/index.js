import Vue from 'vue'
import VueRouter from 'vue-router'
import BookCreateView from '@/views/BookCreate.vue'
import BookList from '@/views/BookList.vue'
import UserView from '@/views/UserView.vue'
import BookView from '@/views/BookView.vue'
import BookModifyView from '@/views/BookModify.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/user/:id',
        name: 'UserView',
        component: UserView,
        // 자식 컴포넌트
        children: [
            {
                path: 'profile',
                component: ()=> import('@/views/UserProfile.vue')
            },  
            {
                path: 'shopping',
                component: ()=> import('@/views/UserShoppingHistory.vue')
            },
        ]
    },
    {
        path: '/create',
        name: 'BookCreateView',
        component : BookCreateView
    },
    {
        path: "/",
        redirect: '/list'
    },
    {
        path: '/list',
        name: 'BookList',
        component: BookList, 
    },

    {
        path: '/book/:id',
        name: 'BookView',
        component: BookView,
    
    },
    {
    
        path: '/detail/:id',
           name: 'BookView',
        component: BookView,
    },
    {
        path: '/book/modify/:id',
        name: 'BookModify',
        component: BookModifyView,
    },
    {
        path: "*",
        name: 'FileNotFoundVue',
        component: ()=> import('@/views/FileNotFoundVue.vue')
    }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
