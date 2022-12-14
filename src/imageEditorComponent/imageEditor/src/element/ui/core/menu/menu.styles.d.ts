declare const Styled: {
    Menu: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    } & {
        rect: DOMRect;
        alignCenter: boolean;
        maxHeight?: string | number | undefined;
    }, "className">;
    Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        className: string;
    }, "className">;
};
export default Styled;
