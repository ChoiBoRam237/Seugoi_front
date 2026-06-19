import React from "react";
import { differenceInDays, format } from "date-fns";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { CommonButton } from "@/components/molecules/button";
import { CommonGenerateContainer, CommonGenerateTitle } from "../../indexStyles";
import { PeriodCalendar, PeriodCalendarDate, PeriodCalendarMonth, PeriodCalendarWrapper, PeriodCalendarYear, PeriodContainer, PeriodImage } from "./indexStyles";
import image from "@/assets/logo.svg";

/**
 * @brief 스터디 종료 기간
 */

interface PeriodProps {
    endPeriod: string; // 종료기간
    setEndPeriod: React.Dispatch<React.SetStateAction<string>>;
    dDay: number | null;
    setDDay: React.Dispatch<React.SetStateAction<number | null>>;
    isDataCheck: boolean; // 필수 작성 데이터 체크
    onNext: () => void; // 다음 버튼 클릭 시
}

export const Period = (props: PeriodProps) => {
    return (
        <CommonGenerateContainer>
            <PeriodContainer>
                <CommonGenerateTitle>스터디 종료기간을 설정해주세요!</CommonGenerateTitle>

                <PeriodImage $src={image} />
            </PeriodContainer>

            <PeriodCalendarWrapper>
                <PeriodCalendar
                    animate
                    mode="single"
                    selected={new Date(props.endPeriod)}
                    onSelect={(value) => {
                        if (!value) {
                            props.setEndPeriod("");
                            props.setDDay(null);
                            return;
                        }

                        const selectedDate = format(value, "yyyy.MM.dd");

                        // 이미 선택한 날짜와 같은 날짜를 클릭할 경우 취소
                        if (selectedDate === props.endPeriod) {
                            props.setEndPeriod("");
                            props.setDDay(null);
                            return;
                        }

                        const dday = differenceInDays(value, new Date());
                        props.setEndPeriod(selectedDate);
                        props.setDDay(dday);
                    }}
                    hideWeekdays={true}
                    showOutsideDays={true}
                    components={{
                        MonthCaption: ({ calendarMonth }) => {
                            const date = calendarMonth.date;

                            return (
                                <PeriodCalendarDate>
                                    <PeriodCalendarMonth>{format(date, "MMM")}</PeriodCalendarMonth>
                                    <PeriodCalendarYear>{date.getFullYear()}</PeriodCalendarYear>
                                </PeriodCalendarDate>
                            )
                        },
                        Chevron: ({ orientation }) => (
                            orientation === "left" ? (
                                <GoChevronLeft size={24} color="white" />
                            ) : (
                                <GoChevronRight size={24} color="white" />
                            )
                        )
                    }}
                />
            </PeriodCalendarWrapper>

            <CommonButton
                disabled={props.isDataCheck}
                text={props.endPeriod ? "다음" : "건너뛰기"}
                bgColor="var(--primary)"
                onClick={props.onNext}
            />
        </CommonGenerateContainer>
    )
}