import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import gongzixinxi from '@/views/modules/gongzixinxi/list'
    import tongxunlu from '@/views/modules/tongxunlu/list'
    import kehuguanxi from '@/views/modules/kehuguanxi/list'
    import gongzuorizhi from '@/views/modules/gongzuorizhi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import richenganpai from '@/views/modules/richenganpai/list'
    import shangbankaoqin from '@/views/modules/shangbankaoqin/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import cheliangxinxi from '@/views/modules/cheliangxinxi/list'
    import wenjianxinxi from '@/views/modules/wenjianxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/gongzixinxi',
        name: '工资信息',
        component: gongzixinxi
      }
      ,{
	path: '/tongxunlu',
        name: '通讯录',
        component: tongxunlu
      }
      ,{
	path: '/kehuguanxi',
        name: '客户关系',
        component: kehuguanxi
      }
      ,{
	path: '/gongzuorizhi',
        name: '工作日志',
        component: gongzuorizhi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/richenganpai',
        name: '日程安排',
        component: richenganpai
      }
      ,{
	path: '/shangbankaoqin',
        name: '上班考勤',
        component: shangbankaoqin
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/cheliangxinxi',
        name: '车辆信息',
        component: cheliangxinxi
      }
      ,{
	path: '/wenjianxinxi',
        name: '文件信息',
        component: wenjianxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
