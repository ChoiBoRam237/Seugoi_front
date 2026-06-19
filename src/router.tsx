import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LinkEnum } from './meta/link';

// layout
import { Layout } from './components/layout';

// pages
import { Splash } from './pages/splash';
import { Login } from './pages/login';
import { Callback } from './pages/login/callback';
import { Home } from './pages/home';
import { StudyGenerate } from './pages/study-generate';
import { StudyDetail } from './pages/study-detail';

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
                    { // 카카오 로그인 콜백
                        path: `/${LinkEnum.CALLBACK}`,
                        element: <Callback />
                    },
                    { // 메인화면
                        path: `/${LinkEnum.HOME}`,
                        element: <Home />
                    },
                    {
                        path: `/${LinkEnum.STUDY}`,
                        children: [
                            { // 스터디 생성
                                path: LinkEnum.GENERATE,
                                element: <StudyGenerate />
                            },
                            { // 스터디 상세
                                path: ':studyId',
                                element: <StudyDetail />
                            }
                        ]
                    }
                ]
            },
        ]
    }
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};