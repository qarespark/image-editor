import type { PopperPositionType } from './popper.props';
declare const Styled: {
    Popper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
    Arrow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        position: PopperPositionType;
    }, "className">;
    PopperWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        zIndex: number;
    }, "className">;
};
export default Styled;
