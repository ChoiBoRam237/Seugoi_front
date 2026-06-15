import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LinkEnum } from './meta/link';

// layout
import { Layout } from './components/layout';

// pages
import { Splash } from './pages/splash';
import { Login } from './pages/login';
import { Callback } from './pages/login/callback';

const router = createBrowserRouter([
    {
        children: [
            {
                element: <Layout />,
                children: [
                    { // 스플래시
                        path: LinkEnum.SPLASH,
                        element: <Splash />
                    },
                    { // 로그인
                        path: `/${LinkEnum.LOGIN}`,
                        element: <Login />
                    },
                    { // 콜백
                        path: `/${LinkEnum.CALLBACK}`,
                        element: <Callback />
                    }
                ]
            },
        ]
    }
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};