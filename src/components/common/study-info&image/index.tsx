import { InfoAndImageBg, InfoAndImageBgWrapper, InfoAndImageCategory, InfoAndImageCategoryWrapper, InfoAndImageDday, InfoAndImageTitle, InfoAndImageTitleWrapper, InfoAndImageWrapper } from "./indexStyles";

/**
 * @brief 스터디 이미지 컴포넌트
 */

interface InfoAndImageProps {
    bgImage: string; // 이미지
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    dDay: number | null; // 디데이
}

export const CommonStudyInfoAndImage = (props: InfoAndImageProps) => {
    return (
        <InfoAndImageBgWrapper>
            <InfoAndImageBg $src={props?.bgImage} />

            <InfoAndImageWrapper>
                <InfoAndImageTitleWrapper>
                    <InfoAndImageTitle>{props?.studyName}</InfoAndImageTitle>

                    {props?.categories?.length > 0 && (
                        <InfoAndImageCategoryWrapper>
                            {props.categories.map((category, index) => (
                                <InfoAndImageCategory key={index}>{category}</InfoAndImageCategory>
                            ))}
                        </InfoAndImageCategoryWrapper>
                    )}
                </InfoAndImageTitleWrapper>

                {props?.dDay !== null && (
                    <InfoAndImageDday>{`D-${props?.dDay}`}</InfoAndImageDday>
                )}
            </InfoAndImageWrapper>
        </InfoAndImageBgWrapper>
    )
}