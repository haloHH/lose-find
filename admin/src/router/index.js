import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import CategoryList from '../views/CategoryList.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import LoseEdit from '../views/LoseEdit.vue'
import LoseList from '../views/LoseList.vue'
import FindEdit from '../views/FindEdit.vue'
import FindList from '../views/FindList.vue'
import Login from '../views/Login.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
import JobEdit from '../views/JobEdit.vue'
import JobList from '../views/JobList.vue'
import LoveEdit from '../views/LoveEdit.vue'
import LoveList from '../views/LoveList.vue'
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    {path:'/login',component:Login,meta:{isPublic:true}},
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/categories/create',component:CategoryEdit},
        {path:'/categories/list',component:CategoryList},
        {path:'/categories/create/:id',component:CategoryEdit,props:true},
        {path:'/loseitems/create',component:LoseEdit},
        {path:'/loseitems/list',component:LoseList},
        {path:'/loseitems/create/:id',component:LoseEdit,props:true},
        {path:'/admin_users/create',component:AdminUserEdit},
        {path:'/admin_users/list',component:AdminUserList},
        {path:'/admin_users/create/:id',component:AdminUserEdit,props:true},
        {path:'/jobs/create',component:JobEdit},
        {path:'/jobs/list',component:JobList},
        {path:'/jobs/create/:id',component:JobEdit,props:true},
        {path:'/loves/create',component:LoveEdit},
        {path:'/loves/list',component:LoveList},
        {path:'/loves/create/:id',component:LoveEdit,props:true},
        {path:'/finditems/create',component:FindEdit},
        {path:'/finditems/list',component:FindList},
        {path:'/finditems/create/:id',component:FindEdit,props:true},
        {path:'/ads/create',component:AdEdit},
        {path:'/ads/list',component:AdList},
        {path:'/ads/create/:id',component:AdEdit,props:true},
  ]
},

  
]
})
