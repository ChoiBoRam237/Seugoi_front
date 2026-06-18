import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '@/style.css';

/**
 * @brief 레이아웃
 */

export const Layout = () => {
    return (
        <LayoutContainer>
            <LayoutWrapper>
                <Outlet />
            </LayoutWrapper>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);

    @media (max-width: 320px) {
        width: 20rem;
    }
`;

export const LayoutWrapper = styled.div`
    width: 100%;
    max-width: 47.9375rem;
    height: 100%;
    min-height: 100dvh;

    @media (max-width: 767px) {
        max-width: 100%;
    }
`;

export const LayoutInnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1.5625rem;
    padding-top: 5.4375rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;