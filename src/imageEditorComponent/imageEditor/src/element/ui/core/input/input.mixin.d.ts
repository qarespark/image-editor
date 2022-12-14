import type { WithTheme } from '../../theme/entity';
export declare const sizeInputMixin: {
    sm: ({ theme: { typography: { font }, }, }: WithTheme) => import("styled-components").FlattenSimpleInterpolation;
    md: ({ theme: { typography: { font }, }, }: WithTheme) => import("styled-components").FlattenSimpleInterpolation;
};
export declare const errorMixin: ({ theme: { palette } }: WithTheme) => import("styled-components").FlattenSimpleInterpolation;
