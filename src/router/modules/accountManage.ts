import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { SettingOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routeName = 'account';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/account',
    name: 'Setting',
    redirect: '/account/account',
    component: Layout,
    meta: {
      title: '账户管理',
      icon: renderIcon(SettingOutlined),
      sort: 5,
    },
    children: [
      {
        path: 'fund-details',
        name: `${routeName}_fund-details`,
        meta: {
          title: '资金明细',
        },
        component: () => import('@/views/accountManage/fund-details/index.vue'),
      },
      {
        path: 'price-details',
        name: 'price-details',
        meta: {
          title: '价格明细',
        },
        component: () => import('@/views/accountManage/price-details/index.vue'),
      },
    ],
  },
];

export default routes;
