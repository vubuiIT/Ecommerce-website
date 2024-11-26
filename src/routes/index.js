import HomePage from '../pages/HomePage/HomePage.jsx';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/products_details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false
    }

]