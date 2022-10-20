import _defineProperty from "@babel/runtime/helpers/defineProperty";


import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import { Color as PColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography/font-variant'; // import { BorderRadiusSize as BRSize } from '../../utils/types/shape';

import { Size } from '../input/types';
import IStyled from '../input/input.styles';
import BStyled from '../button/button.styles';
var _sizeInputMixins, _sizeButtonMixins;
var baseClassName = 'UploadInput';
var sizeInputMixins = (_sizeInputMixins = {}, _defineProperty(_sizeInputMixins, Size.Sm, css(["padding-top:3px;padding-left:3px;padding-bottom:3px;"])), _defineProperty(_sizeInputMixins, Size.Md, css(["padding-top:5px;padding-left:5px;padding-bottom:5px;"])), _sizeInputMixins);
var sizeButtonMixins = (_sizeButtonMixins = {}, _defineProperty(_sizeButtonMixins, Size.Sm, css(["padding:2px 4px;"])), _defineProperty(_sizeButtonMixins, Size.Md, css(["padding:4px 8px;"])), _sizeButtonMixins);
var FileInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'FileInput')
}).withConfig({
  componentId: "sc-1t86zcs-0"
})(["display:none;"]);
var UploadInput = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-1t86zcs-1"
})(function (_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? Size.Md : _ref$size,
    theme = _ref.theme;
  return css(["position:relative;", "{", "}", "{margin-right:8px;", " ", "{", "}}"], IStyled.Input, sizeInputMixins[size], BStyled.Button, sizeButtonMixins[size], BStyled.Label, theme.typography.font[FontVariant.ButtonXs]);
});
var Styled = applyDisplayNames({
  UploadInput: UploadInput,
  FileInput: FileInput
});
export default Styled;