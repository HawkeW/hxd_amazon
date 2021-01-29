import Index from '../components/Index'
import BestSellers from '../components/BestSellers'
import ProductTrends from '../components/ProductTrends'

// eslint-disable-line no-unused-vars
const routes = [ 
  {
    path: '/', 
    component: Index,
    meta: {
      title: '茴香豆'
    },
    children: [
      { 
        path: 'best-sellers',
        component: BestSellers,
        meta: {
          title:'亚马逊Best Sellers'
        }
      },
      { 
        path: 'product-trends',
        component: ProductTrends,
        meta: {
          title:'产品趋势'
        }
      },
    ]
  }
] 

export {
  routes
}