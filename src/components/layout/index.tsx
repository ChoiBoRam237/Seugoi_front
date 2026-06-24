import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '@/style.css';
import { useScrollup } from '@/hooks/useScrollUp';

/**
 * @brief 레이아웃
 */

export const Layout = () => {
    const navigate = useNavigate();
    useScrollup({ item: navigate });

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
    background-color: var(--background);

    @media (max-width: 320px) {
        width: 20rem;
    }
`;

export const LayoutWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 47.9375rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        max-width: 100%;
    }
`;

export const LayoutInnerWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 4.6875rem;
`;