import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import {createTheme, CssBaseline} from '@mui/material'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import { lazy } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
const Home = lazy(() => import( './components/Home'))
const Quiz = lazy(() => import( './components/Quiz'))
const Learning = lazy(() => import( './components/Learning'))
const Result = lazy(() => import( './components/Result'))
const Login = lazy(() => import( './components/Login'))
const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<App />}>
       <Route index element={<Home/>} />
       <Route path='/quiz' element={<Quiz/>} />
       <Route path='/learn' element={<Learning/>} />
       <Route path='/Result' element={<Result/>} />
       <Route path='/login' element={<Login/>} />
    </Route>

  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback= {<div>Loading...</div>}>
    <Provider store={store}>
   <RouterProvider router={router} />
    </Provider>
    </Suspense>
   </ThemeProvider>
  </StrictMode>,
)
