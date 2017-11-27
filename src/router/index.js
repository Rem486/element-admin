import Vue from 'vue'
import Router from 'vue-router'

/**
 * 引入公共页面
 */
import Layout from '../components/layout/Layout.vue'

const _import = require('./_import.' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: Layout,
            children: [
                {path: '', redirect: 'dashboard'},
                {path: 'dashboard', name: 'dashboard', component: _import('dashboard/dashboard')},
                {path: 'table', name: 'table', component: _import('table/table')}
            ]
        }
    ]
})
