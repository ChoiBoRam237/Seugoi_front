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
    min-width: 100vw;
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
    padding: 0 1.5625rem;

    @media (max-width: 767px) {
        max-width: 100%;
    }
`;