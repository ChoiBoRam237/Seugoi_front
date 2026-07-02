import { useNavigate } from "react-router-dom";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { LinkEnum } from "@/meta/link";
import { useControlNoticeUpdate } from "./index.control";
import { NoticeContainer, NoticeWrapper } from "./indexStyles";
import { CommonButton } from "@/components/molecules/button";
import { CommonModal } from "@/components/molecules/modal";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { CommonLoading } from "@/components/common/loading";
import { CommonArrowHeader } from "@/components/common/header/arrow";

/**
 * @brief 공지 수정
 */

export const NoticeUpdate = () => {
    const navigate = useNavigate();
    const controller = useControlNoticeUpdate();

    return (
        <>
            <CommonArrowHeader
                moveUrl={`/${LinkEnum.STUDY}/${controller.studyCode}`}
                urlState={{ status: "assignment" }}
                text="공지 수정하기"
            />

            {!controller.isLoading ? (
                <NoticeContainer>
                    <NoticeWrapper>
                        <CommonInput
                            className="border-[#4D5365]! placeholder-[#4D5365]!"
                            labelText="공지 제목"
                            input={[
                                { 
                                    placeholder: "제목을 입력해주세요",
                                    value: controller.title, 
                                    onChange: (e) => controller.setTitle(e.target.value)
                                }
                            ]}
                        />
        
                        <CommonTextarea
                            placeholder="내용을 입력해주세요"
                            labelText="공지 내용"
                            value={controller.content}
                            setValue={controller.setContent}
                        />
                    </NoticeWrapper>
        
                    <CommonButton
                        loading={controller.updateLoading}
                        disabled={!controller.dataCheck()}
                        text="수정하기"
                        bgColor="var(--primary)"
                        onClick={controller.onNoticeUpdate}
                    />
        
                    <CommonConfirmModal
                        open={controller.updateOpen}
                        setOpen={controller.setUpdateOpen}
                        title="공지가 수정되었습니다!"
                        content="스터디로 이동하시겠습니까?"
                        cancelTitle="계속 수정하기"
                        onCancel={controller.onFetch}
                        okTitle="스터디로 이동"
                        onOk={() => {
                            navigate(`/${LinkEnum.STUDY}/${controller.studyCode}`, {
                                state: { status: "assignment" }
                            });
                        }}
                    />
                </NoticeContainer>
            ) : (
                <CommonLoading />
            )}
        </>
    )
}