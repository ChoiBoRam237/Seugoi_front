import { CommonButton } from "@/components/molecules/button";
import { BoardContainer, BoardWrapper } from "../../indexStyles";
import { BoardProps } from "../..";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { useControlNotice } from "./index.control";

/**
 * @brief 공지 추가
 */

export const Notice = (props: BoardProps) => {
    const controller = useControlNotice(props);

    return (
        <BoardContainer>
            <BoardWrapper>
                <CommonInput
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    labelText="공지 제목"
                    required={true}
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
                    required={true}
                    value={controller.content}
                    setValue={controller.setContent}
                />
            </BoardWrapper>

            <CommonButton
                loading={false}
                disabled={!controller.dataCheck()}
                text="공지 추가하기"
                bgColor="var(--primary)"
                onClick={() => {}}
            />
        </BoardContainer>
    )
}