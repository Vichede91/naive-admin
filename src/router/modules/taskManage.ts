import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/taskManage',
    name: 'taskManage',
    redirect: '/taskManage/list',
    component: Layout,
    meta: {
      title: '任务管理',
      icon: renderIcon(TableOutlined),
      sort: 2,
    },
    children: [
      {
        path: 'list',
        name: 'taskManageList',
        meta: {
          title: '任务管理',
        },
        component: () => import('@/views/taskManage/index.vue'),
      },
      {
        path: 'info/:id?',
        name: 'taskManageInfo',
        meta: {
          title: '任务管理详情',
          hidden: true,
          activeMenu: 'list',
        },
        component: () => import('@/views/taskManage/info.vue'),
      },
    ],
  },
];

export default routes;
