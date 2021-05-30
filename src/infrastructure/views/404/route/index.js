const errorPage = () => import(/* webpackChunkName: "errorPage" */ '@views/404')

export default [
    {
      name: '404',
      component: errorPage,
      path: '*',
      meta: {
        isVisible: false
      }
    }
]
