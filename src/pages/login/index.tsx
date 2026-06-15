import { BiCodeAlt } from "react-icons/bi";
import { RiKakaoTalkFill } from "react-icons/ri";
import { LoginButton, LoginCharacter, LoginContainer, LoginImageWrapper, LoginInnerWrapper, LoginLogo, LoginPerson, LoginPersonWrapper, LoginTitle, LoginTitleWrapper, LoginWrapper } from "./indexStyles";
import { useControlLogin } from "./index.control";
import logo from '@/assets/text-logo.svg';
import person from '@/assets/person.svg';
import character from './_assets/character.svg';

/**
 * @brief 로그인
 */

export const Login = () => {
    const controller = useControlLogin();

    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginTitleWrapper>
                    <LoginLogo $src={logo} />
                    <LoginTitle>IT관련 스터디들을 한눈에!</LoginTitle>
                </LoginTitleWrapper>

                {/* 이미지 및 버튼 */}
                <LoginInnerWrapper>
                    <LoginImageWrapper>
                        <LoginCharacter $src={character} />
                        <LoginPersonWrapper>
                            <BiCodeAlt size={60} color="var(--primary)" />
                            <LoginPerson $src={person} />
                        </LoginPersonWrapper>
                    </LoginImageWrapper>

                    <LoginButton onClick={controller.onLogin}>
                        <RiKakaoTalkFill size={20} color="black" />
                        <span>카카오로 로그인</span>
                    </LoginButton>
                </LoginInnerWrapper>
            </LoginWrapper>
        </LoginContainer>
    )
}