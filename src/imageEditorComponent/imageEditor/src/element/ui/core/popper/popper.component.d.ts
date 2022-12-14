import React from 'react';
import PT from 'prop-types';
import type { PopperProps, PopperOptions } from './popper.props';
declare const Popper: React.ForwardRefExoticComponent<PopperProps & React.RefAttributes<HTMLDivElement>>;
export declare const propTypes: {
    anchorEl: PT.Requireable<object>;
    popperOptions: PT.Validator<PopperOptions>;
    overlay: PT.Requireable<boolean>;
    arrow: PT.Requireable<boolean>;
    zIndex: PT.Requireable<number>;
    enableUnderlayingEvent: PT.Requireable<boolean>;
    wrapperStyles: PT.Requireable<object>;
};
export default Popper;
