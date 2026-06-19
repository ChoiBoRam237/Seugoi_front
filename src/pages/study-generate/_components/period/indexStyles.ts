import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import styled from "styled-components";

/**
 * @brief 스터디 종료 기간 스타일
 */

export const PeriodContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2.5rem;
`;

export const PeriodImage = styled.div<{ $src: string }>`
    width: 7.375rem;
    height: 7.875rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const PeriodCalendarWrapper = styled.div`
    width: 100%;
    height: auto;
    border-radius: 0.9375rem;
    padding: 1.25rem;
    background-color: var(--second-primary);
`;

export const PeriodCalendar = styled(DayPicker)`
    .rdp-months {
        width: 100% !important;
        max-width: none !important;
    }

    .rdp-month > .rdp-month {
        display: none !important;
    }

    .rdp-month,
    .rdp-month_grid {
        width: 100% !important;
    }

    .rdp-weeks {
        display: flex !important;
        flex-direction: column !important;
        row-gap: 0.5rem !important;
    }

    // 날짜 스타일
    .rdp-week {
        width: 100% !important;
        display: flex !important;
        justify-content: space-between !important;

        .rdp-day {
            display: flex !important;
            align-items: center !important;

            .rdp-day_button {
                font-family: 'Pretendard-Light' !important;
                font-size: 1rem !important;
                color: white !important;
            }
        }

        .rdp-outside {
            .rdp-day_button {
                opacity: 0.4 !important;
            }
        }

        .rdp-today:not(.rdp-outside) .rdp-day_button {
            font-family: 'Pretendard-Bold' !important;
        }
        
        .rdp-selected .rdp-day_button {
            font-weight: 300 !important;
            border: 2px solid var(--primary) !important;
        }
    }

    // 화살표
    .rdp-nav {
        height: auto !important;
        column-gap: 1rem !important;
        margin-top: 0.5rem !important;
    }

    .rdp-button_next,
    .rdp-button_previous {
        width: auto !important;
        height: auto !important;
    }

    @media (max-width: 767px) {
       .rdp-day,
        .rdp-day_button {
            width: 2rem !important;
            height: 2rem !important;
        }
    }
`;

export const PeriodCalendarDate = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export const PeriodCalendarMonth = styled.p`
    font-family: 'YeogiOttaeJalnan' !important;
    font-size: 1.5rem;
    color: white;
`;

export const PeriodCalendarYear = styled.p`
    font-family: 'Pretendard-Light' !important;
    font-size: 1rem;
    color: white;
    margin-bottom: -0.375rem;
`;