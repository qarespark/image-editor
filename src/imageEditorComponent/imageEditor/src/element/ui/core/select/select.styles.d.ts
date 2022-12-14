import type { SelectProps } from './select.props';
declare const Styled: {
    Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        fullWidth: boolean;
    }, "className">;
    Select: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & import("../input").InputProps & {
        className: string;
    } & SelectProps, "className">;
    Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    Icon: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
        className: string;
        'aria-hidden': "true";
        tabindex: string;
    }, "className" | "aria-hidden" | "tabindex">;
};
export default Styled;
