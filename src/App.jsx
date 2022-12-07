import About from './routes/About'
import Notes from './routes/Notes'
import CreateNote from './routes/CreateNote'
import Layout from './routes/Layout'
import Login from './routes/Login'
import EditNote from './routes/EditNote'
import Note from './routes/Note'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserContextPtovider from './components/userContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import Register from './routes/Register'
import { loader as noteLoader } from './routes/Note'
import { loader as editLoader } from './routes/EditNote'
import { loader as createLoader } from './routes/CreateNote'
import Error from './routes/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/create',
        loader: createLoader,
        element: <CreateNote />,
      },
      {
        path: '/edit/:id',
        loader: editLoader,
        element: <EditNote />,
      },
      {
        path: '/note/:id',
        loader: noteLoader,
        element: <Note />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])
export default function App() {
  return (
    <UserContextPtovider>
      <RouterProvider router={router} />
    </UserContextPtovider>
  )
}
