import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImgViewStyledCarousel, GlobalStyledModal, ImgViewContainer, ImgViewImage, ImgViewTitle, ImgViewTitleWrapper, ImgViewWrapper } from "./indexStyles";
import { BASE_URL } from "@/util/api";

/**
 * @brief 이미지 보기 모달
 */

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    startIndex: number;
    imgUrlList: string[];
}

export const ImgView = (props: Props) => {
    const carouselRef = useRef<CarouselRef>(null);
    const [current, setCurrent] = useState<number>(props.startIndex);

    const isFirst = current === 0;
    const isLast = current === props.imgUrlList.length - 1;

    useEffect(() => {
        setCurrent(props.startIndex);
    }, [props.startIndex]);

    return (
        <Modal
            open={props.open}
            footer={null}
            closable={false}
        >
            <ImgViewContainer>
                <ImgViewTitleWrapper>
                    <ImgViewTitle>이미지 보기</ImgViewTitle>

                    <button onClick={() => props.setOpen(false)}>
                        <HiMiniXMark size={28} color="white" />
                    </button>
                </ImgViewTitleWrapper>

                <ImgViewWrapper>
                    <button
                        disabled={isFirst}
                        onClick={() => carouselRef.current?.prev()}
                    >
                        <IoIosArrowBack size={25} color={isFirst ? "#6F6F6F" : "white"} />
                    </button>

                    <ImgViewStyledCarousel
                        ref={carouselRef}
                        arrows={false}
                        infinite={false}
                        initialSlide={props.startIndex}
                        afterChange={setCurrent}
                    >
                        {props.imgUrlList.map((img, index) => (
                            <ImgViewImage
                                key={index}
                                $src={`${BASE_URL}${img}`}
                            />
                        ))}
                    </ImgViewStyledCarousel>

                    <button
                        disabled={isLast}
                        onClick={() => carouselRef.current?.next()}
                    >
                        <IoIosArrowForward size={25} color={isLast ? "#6F6F6F" : "white"} />
                    </button>
                </ImgViewWrapper>
            </ImgViewContainer>

            <GlobalStyledModal />
        </Modal>
    )
}