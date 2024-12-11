import HomePage from '../pages/HomePage/HomePage.jsx';
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import TypeProduct from "../pages/TypeProductPage/TypeProduct";
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
        path: '/type',
        page: TypeProduct,
        isShowHeader: true
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false
    }

]