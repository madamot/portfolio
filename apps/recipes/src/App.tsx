import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import All from './containers/All'

import './App.css'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<All />} />))

  return (
    <div>
      <div id="app">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
