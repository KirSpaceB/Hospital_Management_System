import ReactDOM from 'react-dom/client'
import './index.css'
import 'daisyui/dist/full.css';

import LandingPage from "./components/LandingPage/Page";
import * as React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './components/StaffManagement/SignupPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: (
      <div>
        <div className="w-screen h-screen bg-white">
          <LandingPage/>
        </div>
      </div>
    )
  },
  {
    path:'/signupstaff',
    element: (
      <SignupPage/>
    )
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
