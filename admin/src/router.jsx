import {createBrowserRouter} from 'react-router-dom'
import { HomeAdmin } from './pages/HomeAdmin/HomeAdmin'
import { ListProductsPage } from './pages/ListProductsPage'
import {loader as loaderHome} from './pages/HomeAdmin/loader'
import App from './App'

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [{
            index : true,
            element : <HomeAdmin/>,
            loader  : loaderHome
        },
        {
            path : '/products',
            element : <ListProductsPage/>
        }
    ]
    }
])
