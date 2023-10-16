import React from 'react'

const Home = React.lazy(() => import('./pages/Home'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Home },
  { path: '/result', name: 'Product Detail', element: Home },
]

export default routes
