import React from 'react';
import PT from 'prop-types';
import type { MenuProps } from '../menu/menu.props';
import type { SelectProps, SelectSimpleValueType } from './select.props';
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export declare const defaultProps: {
    size: "md";
    error: boolean;
    multiple: boolean;
    fullWidth: boolean;
    readOnly: boolean;
    disabled: boolean;
    background: "primary";
};
export declare const simpleValuePropTypes: PT.Requireable<string | number>;
export declare const propTypes: {
    size: PT.Requireable<"sm" | "md">;
    error: PT.Requireable<boolean>;
    multiple: PT.Requireable<boolean>;
    fullWidth: PT.Requireable<boolean>;
    children: PT.Requireable<PT.ReactElementLike | (PT.ReactElementLike | null | undefined)[]>;
    value: PT.Validator<SelectSimpleValueType | SelectSimpleValueType[]>;
    onChange: PT.Requireable<(...args: any[]) => any>;
    MenuProps: PT.Validator<MenuProps>;
    selectProps: PT.Requireable<object>;
    readOnly: PT.Requireable<boolean>;
    disabled: PT.Requireable<boolean>;
    background: PT.Requireable<"primary" | "secondary">;
    renderLabel: PT.Requireable<(...args: any[]) => any>;
};
export default Select;
