import Index from '../components/Index'
import BestSellers from '../components/BestSellers'

// eslint-disable-line no-unused-vars
const routes = [ 
  {
    path: '/', 
    component: Index,
    children: [
      { 
        path: 'best-sellers',
        component: BestSellers
      }
    ]
  }
] 

export {
  routes
}