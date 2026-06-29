import React, { useEffect, useRef } from "react";
import { MenuContainer, MenuItem } from "./indexStyles";

/**
 * @brief overflow menu
 */

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    options: {
        text: string;
        textColor: string;
        onClick: () => void;
    }[];
}

export const CommonOverflowMenu = (props: Props) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                props.setOpen(false);
            }
        };

        if (props.open) document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [props.open, props.setOpen]);

    if (!props.open) return null;

    return (
        <MenuContainer ref={menuRef}>
            {props.options.map((option, index) => (
                <MenuItem
                    key={index}
                    $color={option.textColor}
                    onClick={option.onClick}
                >
                    {option.text}
                </MenuItem>
            ))}
        </MenuContainer>
    )
}