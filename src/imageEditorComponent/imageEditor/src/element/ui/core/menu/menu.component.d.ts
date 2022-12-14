import React from 'react';
import PT from 'prop-types';
import type { MenuProps } from './menu.props';
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export declare const defaultProps: {
    open: boolean;
    containerProps: {};
    maxHeight: number;
    position: string;
    enableOverlay: boolean;
    hideScroll: boolean;
};
export declare const propTypes: {
    anchorElPosition: PT.Validator<DOMRect>;
    anchorEl: PT.Requireable<Element>;
    open: PT.Requireable<boolean>;
    fullWidth: PT.Requireable<boolean>;
    onClose: PT.Requireable<(...args: any[]) => any>;
    id: PT.Requireable<string>;
    containerProps: PT.Requireable<object>;
    alignCenter: PT.Requireable<boolean>;
    maxHeight: PT.Requireable<string | number>;
    popperOptions: PT.Validator<import("../popper/popper.props").PopperOptions>;
    position: PT.Requireable<"left" | "right" | "top" | "bottom" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end">;
    enableOverlay: PT.Requireable<boolean>;
    zIndex: PT.Requireable<number>;
    hideScroll: PT.Requireable<boolean>;
    enableUnderlayingEvent: PT.Requireable<boolean>;
    popperWrapperStyles: PT.Requireable<object>;
};
export default Menu;
