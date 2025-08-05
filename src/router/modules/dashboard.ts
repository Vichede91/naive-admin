import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { DashboardOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routeName = 'dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/console',
    component: Layout,
    meta: {
      title: '首页',
      icon: renderIcon(DashboardOutlined),
      sort: 0,
    },
    children: [
      {
        path: 'console',
        name: `${routeName}_console`,
        meta: {
          title: '首页',
        },
        component: () => import('@/views/dashboard/console/console.vue'),
      },
      // {
      //   path: 'workplace',
      //   name: `${routeName}_workplace`,
      //   meta: {
      //     title: '工作台',
      //   },
      //   component: () => import('@/views/dashboard/workplace/workplace.vue'),
      // },
    ],
  },
];

export default routes;
