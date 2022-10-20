import React from 'react';
import PT from 'prop-types';
import type { PopupContentProps } from './popup-content.props';
declare const PopupContent: React.ForwardRefExoticComponent<PopupContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const defaultProps: {
    status: "happy";
};
export declare const propTypes: {
    message: PT.Validator<string | number | boolean | {} | PT.ReactElementLike | PT.ReactNodeArray>;
    status: PT.Requireable<"happy" | "neutral" | "sad" | "worried">;
};
export default PopupContent;
