import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { SplashContainer, SplashLogo } from "./indexStyles";
import logo from "@/assets/text-logo.svg";

/**
 * @brief 스플레시
 */

export const Splash = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            navigate(`/${LinkEnum.LOGIN}`, { replace: true });
        }, 2000);
    }, []);

    return (
        <SplashContainer>
            <SplashLogo $src={logo} />
        </SplashContainer>
    )
}