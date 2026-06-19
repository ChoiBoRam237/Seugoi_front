import React from "react";
import { IoPerson } from "react-icons/io5";
import { PiInfinityBold } from "react-icons/pi";
import { FaExclamation } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IntroContainer, IntroContentBox, IntroContentBoxInput, IntroContentBoxInputWrapper, IntroContentInnerWrapper, IntroContentSubTitle, IntroContentTextarea, IntroContentWrapper, IntroPeopleCount, IntroPeopleCountText, IntroPeopleCountTextWrapper, IntroProfile, IntroProfileImg, IntroProfileText, IntroStudyTitle } from "./indexStyles";
import { cookie } from "@/util/cookies";

/**
 * @brief 스터디 정보 입력 및 읽기전용 컴포넌트
 */

interface IntroProps {
    readOnly?: boolean; // 읽기 전용
    studyTitle: string; // 스터디 제목
    setStudyTitle?: React.Dispatch<React.SetStateAction<string>>;
    peopleCount: string; // 모집 인원
    summary: string; // 간단 요약
    setSummary?: React.Dispatch<React.SetStateAction<string>>;
    introduction: string[]; // 스터디 소개글
    setIntroduction?: React.Dispatch<React.SetStateAction<string[]>>;
    description: string; // 스터디 설명
    setDescription?: React.Dispatch<React.SetStateAction<string>>;
    recommend: string[]; // 추천글
    setRecommend?: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CommonStudyIntro = (props: IntroProps) => {
    const profileImgUrl = cookie.getCookie("user").profileImageUrl;
    const userName = cookie.getCookie("user").name;

    // textarea onChange
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
        const textarea = e.target;
        textarea.style.height = `${textarea.scrollHeight}px`; // 내용 높이만큼 증가
        setState(textarea.value);
    };

    // 스터디 소개글 onChange
    const onChangeIntroduction = (value: string, index: number) => {
        props.setIntroduction(prev => prev.map((item, i) => (i === index ? value : item)));
    }

    // 추천글 onChange
    const onChangeRecommend = (value: string, index: number) => {
        props.setRecommend(prev => prev.map((item, i) => (i === index ? value : item)));
    }

    return (
        <IntroContainer>
            {/* 스터디 제목 */}
            <IntroStudyTitle
                id="study-title"
                readOnly={props.readOnly}
                placeholder="스터디 제목을 입력해주세요"
                value={props.studyTitle}
                onChange={(e) => onChange(e, props.setStudyTitle)}
            />

            {/* 모집인원 */}
            <IntroPeopleCount>
                <IoPerson size={15} color="var(--primary)" />

                <div className="flex">
                    <IntroPeopleCountText>모집인원 : 1 /&nbsp;</IntroPeopleCountText>
                    
                    {props.peopleCount === '-' ? (
                        <PiInfinityBold size={18} color="var(--white-50)" />
                    ) : (
                        <IntroPeopleCountText>{props.peopleCount}</IntroPeopleCountText>
                    )}
                </div>
            </IntroPeopleCount>

            {/* 프로필 */}
            <IntroProfile>
                <IntroProfileImg $src={profileImgUrl} />
                <IntroProfileText>{userName}</IntroProfileText>
            </IntroProfile>

            {/* 글 */}
            <IntroContentWrapper>
                <IntroContentTextarea
                    id="study-summary"
                    readOnly={props.readOnly}
                    placeholder="스터디를 간단 요약해 적어주세요"
                    value={props.summary}
                    onChange={(e) => onChange(e, props.setSummary)}
                />

                {props.introduction.length > 0 && (
                    <IntroContentInnerWrapper>
                        <IntroContentSubTitle>저희의 스터디는 이렇게 진행돼요!</IntroContentSubTitle>

                        <IntroContentBox>
                            {props.introduction?.map((value, index) => (
                                <IntroContentBoxInputWrapper key={index}>
                                    <FaExclamation size={14} color="red" />
                                    <IntroContentBoxInput
                                        readOnly={props.readOnly}
                                        placeholder="스터디 소개를 적어주세요"
                                        value={value}
                                        onChange={(e) => onChangeIntroduction(e.target.value, index)}
                                    />
                                </IntroContentBoxInputWrapper>
                            ))}
                        </IntroContentBox>
                    </IntroContentInnerWrapper>
                )}

                <IntroContentTextarea
                    id="study-description"
                    readOnly={props.readOnly}
                    placeholder="스터디 설명을 적어주세요"
                    value={props.description}
                    onChange={(e) => onChange(e, props.setDescription)}
                />

                {props.recommend.length > 0 && (
                    <IntroContentInnerWrapper>
                        <IntroContentSubTitle>이런 분들에게 좋아요!</IntroContentSubTitle>

                        <IntroContentBox>
                            {props.recommend?.map((value, index) => (
                                <IntroContentBoxInputWrapper key={index}>
                                    <FaLightbulb size={15} color="var(--yellow)" />
                                    <IntroContentBoxInput
                                        readOnly={props.readOnly}
                                        placeholder="이 스터디를 추천할 유형을 적어주세요"
                                        value={value}
                                        onChange={(e) => onChangeRecommend(e.target.value, index)}
                                    />
                                </IntroContentBoxInputWrapper>
                            ))}
                        </IntroContentBox>
                    </IntroContentInnerWrapper>
                )}
            </IntroContentWrapper>
        </IntroContainer>
    )
}