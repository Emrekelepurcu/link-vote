const list = () => import(/* webpackChunkName: "mainpage" */ '@views/list')

export default [
    {
      name: 'list',
      component: list,
      path: '/'
    }
]
