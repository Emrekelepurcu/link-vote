const addNewItem = () => import(/* webpackChunkName: "page1" */ '@views/add-new-item')

export default [
    {
      name: 'addNewItem',
      component: addNewItem,
      path: '/add-new-item'
    }
]
