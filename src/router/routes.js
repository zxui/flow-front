import Hello from '../components/Hello'
import Step from '../components/Step'
import Login from '../components/Login'
import CardList from '../components/CardList'
import Center from '../components/Center'
import PayOder from '../components/PayOder'
import Package from '../components/Package'

export default [
  {
    path: '/',
    component: Login
  },{
    path: '/Step',
    component: Step
  },{
    path: '/CardList',
    component: CardList
  },{
    path: '/Center',
    component: Center
  },{
    path: '/PayOder',
    component: PayOder
  },{
    path: '/Package',
    component: Package
  }
]
