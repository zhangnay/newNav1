import Vue from 'vue'
import VueRouter from 'vue-router'


// const Home = ()=>import('@/view/navs/Home')
const Hot = ()=>import('@/view/Hot')
const Msg = ()=>import('@/view/Msg')
const Man = ()=>import('@/view/Man')

const searchs = ()=>import('@/components/searchs/searchs')

const Index = ()=>import('@/view/navs/Nav')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/index'
    },
    {
        path:'/index',
        component:Index
    }
    ,
    {
        path:'/searchs',
        component:searchs
    }
    ,
    {
        path:'/hot',
        component:Hot
    }
    ,
    {
        path:'/msg',
        component:Msg
    }
    ,
    {
        path:'/man',
        component:Man
    }
]

const router  = new VueRouter({
    routes,
    // mode:'history'
})

export default router