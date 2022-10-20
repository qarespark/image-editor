import React from 'react';
import PT from 'prop-types';
import type { ModalProps } from './modal.props';
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export declare const defaultProps: {
    open: boolean;
    fullWidth: boolean;
    maxWidth: "xs";
};
export declare const propTypes: {
    onClose: PT.Validator<(...args: any[]) => any>;
    children: PT.Validator<string | number | boolean | {} | PT.ReactElementLike | PT.ReactNodeArray>;
    maxWidth: PT.Requireable<"xs" | "sm" | "md" | "lg" | "xl">;
    open: PT.Requireable<boolean>;
    fullWidth: PT.Requireable<boolean>;
};
export default Modal;
