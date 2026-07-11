import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LinkEnum } from "./meta/link";

// layout
import { Layout } from "./components/layout";

// pages
import { Splash } from "./pages/splash";
import { Login } from "./pages/login";
import { Callback } from "./pages/login/callback";
import { Home } from "./pages/home";
import { StudyGenerate } from "./pages/study-generate";
import { StudyDetail } from "./pages/study-detail";
import { StudyList } from "./pages/study-list";
import { GenerateBoard } from "./pages/generate-board";
import { Mypage } from "./pages/mypage";
import { MypageBookmarkStudy } from "./pages/mypage/_page/bookmark";
import { AsgmtDetail } from "./pages/asgmt-detail";
import { StudyUpdate } from "./pages/study-update";
import { NoticeUpdate } from "./pages/notice-update";
import { AsgmtUpdate } from "./pages/asgmt-update";
import { ChatList } from "./pages/chat-list";
import { ChatRoom } from "./pages/chat-room";

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
                            {
                                path: LinkEnum.LIST,
                                element: <StudyList />
                            },
                            { // 스터디 생성
                                path: LinkEnum.GENERATE,
                                element: <StudyGenerate />
                            },
                            { // 스터디 상세
                                path: ":studyCode",
                                element: <StudyDetail />
                            },
                            { // 스터디 수정
                                path: `:studyCode/${LinkEnum.UPDATE}`,
                                element: <StudyUpdate />
                            },
                            { // 과제/공지 생성
                                path: `:studyCode/${LinkEnum.GENERATE}`,
                                element: <GenerateBoard />
                            },
                            { // 과제 상세
                                path: `:studyCode/${LinkEnum.ASGMT}/:asgmtCode`,
                                element: <AsgmtDetail />
                            }
                        ]
                    },
                    { // 과제 수정
                        path: `/${LinkEnum.ASGMT}/:asgmtCode/${LinkEnum.UPDATE}`,
                        element: <AsgmtUpdate />
                    },
                    { // 공지 수정
                        path: `/${LinkEnum.NOTICE}/:noticeCode/${LinkEnum.UPDATE}`,
                        element: <NoticeUpdate />
                    },
                    { // 마이페이지
                        path: `/${LinkEnum.MYPAGE}`,
                        element: <Mypage />
                    },
                    { // 찜한 스터디
                        path: `/${LinkEnum.MYPAGE}/${LinkEnum.BOOKMARK}`,
                        element: <MypageBookmarkStudy />
                    },
                    {
                        path: `/${LinkEnum.CHAT}`,
                        children: [
                            {
                                path: ``,
                                element: <ChatList />
                            },
                            {
                                path: `:chatRoomCode`,
                                element: <ChatRoom />
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