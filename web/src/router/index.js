import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import MoreFind from '../views/MoreFind'
import MoreLose from '../views/MoreLose'
import MoreJob from '../views/MoreJob'
import MoreLove from '../views/MoreLove'
import Find from '../views/Find'
import Lost from '../views/Lost'
import Job from '../views/Job'
import Love from '../views/Love'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: '/', name: 'home', component: Home},
        {path: '/morefind', name: 'morefind', component: MoreFind, props: true},
        {path: '/morelose', name: 'morelose', component: MoreLose, props: true},
        {path: '/morejob', name: 'morejob', component: MoreJob, props: true},
        {path: '/morelove', name: 'morelove', component: MoreLove, props: true}
      ]
    },
    {
      path: '/send/finditems',
      name: 'find',
      component: Find
    },
    {
      path: '/send/lostitems',
      name: 'lost',
      component: Lost
    },
    {
      path: '/send/jobs',
      name: 'job',
      component: Job
    }
    ,
    {
      path: '/send/loves',
      name: 'love',
      component: Love
    }
  ]

})
