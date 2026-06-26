import React, { useEffect } from "react";
import { Modal } from "antd";
import { CommonButton } from "../button";
import { GlobalStyledModal, ModalContainer, ModalTitle, ModalWrapper } from "./indexStyles";

/**
 * @brief 모달 컴포넌트
 */

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    btnTitle: string;
    children?: React.ReactNode;
    onClick: () => void;
}

export const CommonModal = (props: Props) => {
    useEffect(() => {
        if (props.open) {
            document.body.style.overflow = "hidden";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "auto";
        }
    
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [props.open]);

    return (
        <Modal
            open={props.open}
            closable={false}
            centered={true}
            footer={null}
        >
            <ModalContainer>
                <ModalTitle>{props.title}</ModalTitle>

                <ModalWrapper>
                    {props.children}

                    <CommonButton
                        text={props.btnTitle}
                        bgColor="var(--primary)"
                        className="z-1"
                        onClick={props.onClick}
                    />
                </ModalWrapper>
            </ModalContainer>
            <GlobalStyledModal />
        </Modal>
    )
}