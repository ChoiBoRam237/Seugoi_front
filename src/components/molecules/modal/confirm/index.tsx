import React, { useEffect } from "react";
import { Modal } from "antd";
import { GlobalStyledModal } from "../indexStyles";
import { ConfirmModalButtonWrapper, ConfirmModalCancelButton, ConfirmModalContainer, ConfirmModalContent, ConfirmModalOkButton, ConfirmModalTitle, ConfirmModalTitleWrapper } from "./indexStyles";

/**
 * @brief 모달 컴포넌트
 */

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    content: string;
    onCancel: () => void;
    onOk: () => void;
}

export const CommonConfirmModal = (props: Props) => {
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
            className="confirm-modal"
        >
            <ConfirmModalContainer>
                <ConfirmModalTitleWrapper>
                    <ConfirmModalTitle>{props.title}</ConfirmModalTitle>
                    <ConfirmModalContent>{props.content}</ConfirmModalContent>
                </ConfirmModalTitleWrapper>

                <ConfirmModalButtonWrapper>
                    <ConfirmModalCancelButton onClick={props.onCancel}>취소</ConfirmModalCancelButton>
                    <ConfirmModalOkButton onClick={props.onOk}>확인</ConfirmModalOkButton>
                </ConfirmModalButtonWrapper>
            </ConfirmModalContainer>
            <GlobalStyledModal />
        </Modal>
    )
}