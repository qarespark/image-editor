import React from 'react';
import type { MenuItemProps } from './menu-item.props';
declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const defaultProps: {
    size: "md";
    active: boolean;
};
export default MenuItem;
