import { useLocation, useNavigate } from "react-router-dom";
import { IoBookmark } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/assets/text-logo.svg";
import { cookie } from "@/util/cookies";
import { LinkEnum } from "@/meta/link";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useLatestStudy } from "@/hooks/_api/useLatestStudy";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonCustomHeader } from "@/components/common/header/custom";
import { HeaderLogo } from "@/components/common/header/indexStyles";
import { CommonButton } from "@/components/molecules/button";
import { CommonStudyItem } from "@/components/common/study-item";
import { MypageBookmarkStudy, MypageBookmarkStudyText, MypageBookmarkStudyTextWrapper, MypageContainer, MypageInnerWrapper, MypageLatestList, MypageLatestStudy, MypageLatestStudyItem, MypageLatestStudyText, MypageProfile, MypageProfileImg, MypageProfileText, MypageWrapper } from "./indexStyles";
import { CommonLoading } from "@/components/common/loading";
import { CommonMenuBar } from "@/components/common/menuBar";

/**
 * @brief 마이페이지
 */

export const Mypage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userName, userProfileUrl } = useUserInfo();
    const { latestLoading, latestStudyList, onFetchLatestStudy } = useLatestStudy({});

    // 로그아웃
    const onLogout = () => {
        cookie.clearCookie();
        window.location.pathname = `/${LinkEnum.LOGIN}`;
    }

    return (
        <>
            {/* 헤더 컴포넌트 */}
            <CommonCustomHeader
                logo={<HeaderLogo $src={logo} />}
                isSearch={false}
            />

            {!latestLoading ? (
                <LayoutInnerWrapper className="custom">
                    <MypageContainer>
                        <MypageWrapper>
                            {/* profile */}
                            <MypageProfile>
                                <MypageProfileImg $src={userProfileUrl} />
                                <MypageProfileText>{userName}</MypageProfileText>
                            </MypageProfile>

                            <MypageInnerWrapper>
                                {/* 최근 조회한 스터디 */}
                                {latestStudyList.length > 0 && (
                                    <MypageLatestStudy>
                                        <MypageLatestStudyText>최근 조회한 스터디</MypageLatestStudyText>

                                        <MypageLatestList>
                                            {latestStudyList.map((study, index) => (
                                                <MypageLatestStudyItem key={index}>
                                                    <CommonStudyItem
                                                        item={study}
                                                        prevUrl={location.pathname}
                                                        onFetch={onFetchLatestStudy}
                                                    />
                                                </MypageLatestStudyItem>
                                            ))}
                                        </MypageLatestList>
                                    </MypageLatestStudy>
                                )}

                                {/* 찜한 스터디 */}
                                <MypageBookmarkStudy onClick={() => navigate(LinkEnum.BOOKMARK)}>
                                    <MypageBookmarkStudyTextWrapper>
                                        <IoBookmark size={20} color="white" />
                                        <MypageBookmarkStudyText>찜한 스터디</MypageBookmarkStudyText>
                                    </MypageBookmarkStudyTextWrapper>

                                    <IoIosArrowForward size={20} color="white" />
                                </MypageBookmarkStudy>
                            </MypageInnerWrapper>
                        </MypageWrapper>

                        {/* 로그아웃 */}
                        <CommonButton
                            text="로그아웃"
                            bgColor="var(--third-primary)"
                            onClick={onLogout}
                        />
                    </MypageContainer>
                </LayoutInnerWrapper>
            ) : (
                <CommonLoading />
            )}

            <CommonMenuBar />
        </>
    )
}