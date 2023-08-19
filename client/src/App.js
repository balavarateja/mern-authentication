import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Success from './components/Success'
import PageNotFound from './components/PageNotFound'
import ForgotPassword from './components/ForgotPassword'
import DemoComponent from './common/Demo/DemoComponent'
import SentLink from './components/passwordreset/SentLink'
import ResentLink from './components/passwordreset/ResentLink'
import LinkExpired from './components/passwordreset/LinkExpired'
import NewCredential from './components/passwordreset/NewCredential'
import Token from './components/passwordreset/Token'
import HomePage from './components/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />,
  },
  {
    path: '/success',
    element: <Success />,
  },
  {
    path: '/sentlink',
    element: <SentLink />,
  },
  {
    path: '/resentlink',
    element: <ResentLink />,
  },
  {
    path: '/linkexpired',
    element: <LinkExpired />,
  },
  {
    path: '/newcredentials',
    element: <NewCredential />,
  },
  {
    path: '/token',
    element: <Token />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/demo',
    element: <DemoComponent />,
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
