import { CommonButton } from "@/components/molecules/button";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { BoardContainer, BoardWrapper } from "../../indexStyles";
import { BoardProps } from "../..";
import { useControlNotice } from "./index.control";
import { useNavigate } from "react-router-dom";
import { CommonModal } from "@/components/molecules/modal";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 공지 추가
 */

export const Notice = (props: BoardProps) => {
    const navigate = useNavigate();
    const controller = useControlNotice();

    return (
        <BoardContainer>
            <BoardWrapper>
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
            </BoardWrapper>

            <CommonButton
                loading={controller.isLoading}
                disabled={!controller.dataCheck()}
                text="공지 추가하기"
                bgColor="var(--primary)"
                onClick={() => controller.onGenerate(Number(props.studyCode))}
            />

            <CommonModal
                open={controller.successOpen}
                setOpen={controller.setSuccessOpen}
                title="공지가 생성되었습니다!"
                btnTitle="스터디로 이동"
                onClick={() => {
                    navigate(`/${LinkEnum.STUDY}/${props.studyCode}`, {
                        state: { status: "assignment" }
                    });
                }}
            />
        </BoardContainer>
    )
}