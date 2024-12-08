import HomePage from "../pages/HomePage/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: false,
    },
    {
        path: "/system/admin",
        page: AdminPage,
        isShowHeader: true,
    },
    {
        path: "/profile-user",
        page: ProfilePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/orderSuccess',
        page: OrderSucess,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
];
