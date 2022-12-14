import type { SelectSimpleValueType } from '../select/select.props';
declare const Styled: {
    ColorPickerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    RangePickerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        color: string;
    }, "className">;
    WhiteGradient: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    BlackGradient: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    ColorPointer: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
        left: number;
        top?: number | undefined;
        considerTopWidth: boolean;
    }, never>;
    BarWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    Bar: import("styled-components").StyledComponent<"table", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    BarColorStop: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, {
        $color: string;
    }, never>;
    ColorPickerAction: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    ColorPickerIcon: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    ColorItemsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
    ColorItemWrapper: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        size: number;
        color: string;
        stroke: string;
        value: string;
    }, "className">;
    Select: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        value: SelectSimpleValueType | SelectSimpleValueType[];
    }, "className">;
};
export default Styled;
