import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette'; // import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

import { sizeMenuItemMixin } from './menu-item.mixin';
import { Size } from './types';
var baseClassName = 'MenuItem';
var Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-rrzye0-0"
})(function (_ref) {
  var palette = _ref.theme.palette;
  return css(["display:flex;flex-shrink:0;color:", ";&:first-child{margin-right:8px;}&:last-child{margin-left:8px;}"], palette[PColor.IconsPrimary]);
});
var Actions = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'Actions')
}).withConfig({
  componentId: "sc-rrzye0-1"
})(function () {
  return css([""]);
});
var Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label')
}).withConfig({
  componentId: "sc-rrzye0-2"
})(["flex-grow:1;"]);
var MenuItemWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper')
}).withConfig({
  componentId: "sc-rrzye0-3"
})(function (_ref2) {
  var disabled = _ref2.disabled,
    theme = _ref2.theme;
  return css(["", ""], disabled && css(["width:100%;height:1px;background:", ";box-sizing:border-box;"], theme.palette[PColor.BordersSecondary]));
});
var MenuItem = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-rrzye0-4"
})(function (_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? Size.Md : _ref3$size,
    active = _ref3.active,
    theme = _ref3.theme,
    _ref3$disableHover = _ref3.disableHover,
    disableHover = _ref3$disableHover === void 0 ? false : _ref3$disableHover;
  return css(["display:flex;flex-direction:row;align-items:center;width:100%;background:", ";cursor:pointer;box-sizing:border-box;", " &:focus-within,&:focus,&:hover{", ";}"], theme.palette[active ? PColor.BackgroundPrimaryHover : PColor.BackgroundSecondary], sizeMenuItemMixin[size], !disableHover && "background-color: ".concat(theme.palette[PColor.BackgroundPrimaryHover]));
});
var MenuPrefix = styled.div.attrs({
  className: generateClassNames(baseClassName, 'prefix')
}).withConfig({
  componentId: "sc-rrzye0-5"
})(function () {
  return css(["display:flex;margin-right:8px;"]);
});
var MenuContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'content')
}).withConfig({
  componentId: "sc-rrzye0-6"
})(function () {
  return css(["flex-grow:1;line-height:16px;"]);
});
var MenuSuffix = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suffix')
}).withConfig({
  componentId: "sc-rrzye0-7"
})(function () {
  return css(["display:flex;margin-left:8px;"]);
});
var Styled = applyDisplayNames({
  MenuItemWrapper: MenuItemWrapper,
  MenuItem: MenuItem,
  MenuPrefix: MenuPrefix,
  MenuContent: MenuContent,
  MenuSuffix: MenuSuffix,
  Label: Label,
  Icon: Icon,
  Actions: Actions
});
export default Styled;