import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { TableOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/infoManage',
    name: 'infoManage',
    redirect: '/infoManage/list',
    component: Layout,
    meta: {
      title: '资料管理',
      icon: renderIcon(TableOutlined),
      sort: 1,
    },
    children: [
      {
        path: 'list',
        name: 'infoManageList',
        meta: {
          title: '资料管理',
        },
        component: () => import('@/views/infoManage//index.vue'),
      },
      {
        path: 'info/:id?',
        name: 'binfoManageInfo',
        meta: {
          title: '资料管理详情',
          hidden: true,
          activeMenu: 'list',
        },
        component: () => import('@/views/infoManage/info.vue'),
      },
    ],
  },
];

export default routes;
