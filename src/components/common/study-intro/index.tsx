import React, { useEffect, useRef } from "react";
import { IoPerson } from "react-icons/io5";
import { PiInfinityBold } from "react-icons/pi";
import { FaExclamation } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IntroContainer, IntroContentBox, IntroContentBoxInput, IntroContentBoxInputWrapper, IntroContentInnerWrapper, IntroContentPre, IntroContentSubTitle, IntroContentTextarea, IntroContentWrapper, IntroPeopleCount, IntroPeopleCountText, IntroProfile, IntroProfileImg, IntroProfileText, IntroStudyTitle, IntroStudyTitlePre } from "./indexStyles";

/**
 * @brief 스터디 정보 입력 및 읽기전용 컴포넌트
 */

interface Props {
    readOnly?: boolean; // 읽기 전용
    studyTitle: string; // 스터디 제목
    setStudyTitle?: React.Dispatch<React.SetStateAction<string>>;
    peopleCount: string; // 모집 인원
    joinCount: number; // 가입한 인원수
    summary: string; // 간단 요약
    setSummary?: React.Dispatch<React.SetStateAction<string>>;
    introduction: string[]; // 스터디 소개글
    setIntroduction?: React.Dispatch<React.SetStateAction<string[]>>;
    description: string; // 스터디 설명
    setDescription?: React.Dispatch<React.SetStateAction<string>>;
    recommend: string[]; // 추천글
    setRecommend?: React.Dispatch<React.SetStateAction<string[]>>;

    profileImgUrl: string; // 관리자 이미지
    userName: string; // 관리자 이름
}

export const CommonStudyIntro = (props: Props) => {
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const summaryRef = useRef<HTMLTextAreaElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

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

    useEffect(() => {
        if (!titleRef.current) return;

        titleRef.current.style.height = "36px";
        titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }, [props.studyTitle]);

    useEffect(() => {
        if (!summaryRef.current) return;
    
        summaryRef.current.style.height = "21px";
        summaryRef.current.style.height = `${summaryRef.current.scrollHeight}px`;
    }, [props.summary]);

    useEffect(() => {
        if (!descriptionRef.current) return;
    
        descriptionRef.current.style.height = "21px";
        descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
    }, [props.description]);

    return (
        <IntroContainer>
            {/* 스터디 제목 */}
            {props.readOnly ? (
                <IntroStudyTitlePre>{props.studyTitle}</IntroStudyTitlePre>
            ) : (
                <IntroStudyTitle
                    id="study-title"
                    ref={titleRef}
                    placeholder="스터디 제목을 입력해주세요"
                    value={props?.studyTitle}
                    onChange={(e) => onChange(e, props.setStudyTitle)}
                />
            )}

            {/* 모집인원 */}
            <IntroPeopleCount>
                <IoPerson size={15} color="var(--primary)" />

                <div className="flex items-center">
                    <IntroPeopleCountText>모집인원 : {props?.joinCount} /&nbsp;</IntroPeopleCountText>
                    
                    {props?.peopleCount === "-" ? (
                        <PiInfinityBold size={16} color="var(--white-50)" />
                    ) : (
                        <IntroPeopleCountText>{props?.peopleCount}</IntroPeopleCountText>
                    )}
                </div>
            </IntroPeopleCount>

            {/* 프로필 */}
            <IntroProfile>
                <IntroProfileImg $src={props?.profileImgUrl} />
                <IntroProfileText>{props?.userName}</IntroProfileText>
            </IntroProfile>

            {/* 글 */}
            <IntroContentWrapper>
                {props.readOnly ? (
                    <IntroContentPre>{props.summary}</IntroContentPre>
                ) : (
                    <IntroContentTextarea
                        id="study-summary"
                        ref={summaryRef}
                        placeholder="스터디를 간단 요약해 적어주세요"
                        value={props?.summary}
                        onChange={(e) => onChange(e, props.setSummary)}
                    />
                )}

                {props?.introduction?.length > 0 && (
                    <IntroContentInnerWrapper>
                        <IntroContentSubTitle>저희의 스터디는 이렇게 진행돼요!</IntroContentSubTitle>

                        <IntroContentBox>
                            {props?.introduction?.map((value, index) => (
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

                {props.readOnly ? (
                    <IntroContentPre>{props.description}</IntroContentPre>
                ) : (
                    <IntroContentTextarea
                        id="study-description"
                        ref={descriptionRef}
                        placeholder="스터디 설명을 적어주세요"
                        value={props?.description}
                        onChange={(e) => onChange(e, props.setDescription)}
                    />
                )}

                {props?.recommend?.length > 0 && (
                    <IntroContentInnerWrapper>
                        <IntroContentSubTitle>이런 분들에게 좋아요!</IntroContentSubTitle>

                        <IntroContentBox>
                            {props?.recommend?.map((value, index) => (
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