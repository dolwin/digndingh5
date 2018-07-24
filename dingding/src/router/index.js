import Vue from 'vue'
import Router from 'vue-router'
import questionnaire from '@/components/questionnaire'
import download from '@/components/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questionnaire',
      component: questionnaire
    },
    {
        path: '/download',
        name: 'download',
        component: download 
    }

  ]

})
