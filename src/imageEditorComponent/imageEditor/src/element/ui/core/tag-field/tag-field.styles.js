import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
var baseClassName = 'TagField';
var TagFieldRoot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root')
}).withConfig({
  componentId: "sc-10q17fj-0"
})(function () {
  return css(["", "{margin-top:4px;}", "{margin-bottom:4px;}"], StyledFormHint.FormHint, StyledLabel.Label);
});
var TagFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldWrapper')
}).withConfig({
  componentId: "sc-10q17fj-1"
})(function (props) {
  return css(["overflow:hidden;border:1px solid ", ";border-radius:2px;width:", ";background:", ";", "{margin-top:4px;}", "{margin-bottom:4px;}&:focus-within{background-color:", "!important;border:1px solid ", ";}&:hover{background-color:", ";}"], props.theme.palette[PColor.ActiveSecondary], props.fullWidth ? '100%' : '50%', props.background === 'primary' ? props.theme.palette[PColor.BackgroundPrimary] : props.theme.palette[PColor.BackgroundSecondary], StyledFormHint.FormHint, StyledLabel.Label, props.theme.palette[PColor.BackgroundSecondary], props.theme.palette[PColor.AccentPrimary], props.theme.palette[PColor.BackgroundPrimaryHover]);
});
var TagFieldLoader = styled.span.attrs({
  className: generateClassNames(baseClassName, 'loader')
}).withConfig({
  componentId: "sc-10q17fj-2"
})(["display:flex;margin-left:8px;"]);
var TagFieldListWrapper = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'listWrapper')
}).withConfig({
  componentId: "sc-10q17fj-3"
})(function (_ref) {
  var $loading = _ref.$loading;
  return css(["display:inline-flex;align-items:center;flex-wrap:wrap;margin:0;padding:8px 12px;list-style:none;font-size:14px;line-height:1.5;padding:6px 8px;width:100%;", "{svg{animation:", ";}}"], TagFieldLoader, $loading ? 'spinner 1.2s linear infinite' : '1.2s');
});
var TagFieldInputWrapper = styled.li.attrs({
  className: generateClassNames(baseClassName, 'inputWrapper')
}).withConfig({
  componentId: "sc-10q17fj-4"
})(["background:none;flex-grow:1;padding:5px 0;"]);
var TagFieldInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'input')
}).withConfig({
  componentId: "sc-10q17fj-5"
})(["background:transparent;border:none;width:100%;outline:none;"]);
var TagFieldSuggestionWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapper')
}).withConfig({
  componentId: "sc-10q17fj-6"
})(["position:relative;margin-top:16px;"]);
var TagFieldSuggestionLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'suggestionLabel')
}).withConfig({
  componentId: "sc-10q17fj-7"
})(["display:flex;align-items:center;font-size:12px;padding:4px 0;"]);
var TagFieldSuggestionIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon')
}).withConfig({
  componentId: "sc-10q17fj-8"
})(function () {
  return css(["display:inline-flex;margin-right:4px;"]);
});
var TagFieldSuggestionWrapperList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapperList')
}).withConfig({
  componentId: "sc-10q17fj-9"
})(["display:inline-flex;flex-wrap:wrap;margin:0;padding:0;width:100%;list-style:none;"]);
var TagFieldSuggestionList = styled.li.attrs({
  className: generateClassNames(baseClassName, 'suggestionList')
}).withConfig({
  componentId: "sc-10q17fj-10"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["position:relative;display:flex;align-items:center;margin:0 8px 8px 0;padding:4px 12px;border-radius:", ";border:1px dashed ", ";background:transparent;color:", ";line-height:16.4px;list-style:none;user-select:none;max-height:24px;"], theme.shape.borderRadius[BRSize.Sm], theme.palette[PColor.LinkPrimary], theme.palette[PColor.LinkPrimary]);
});
var Styled = applyDisplayNames({
  TagFieldRoot: TagFieldRoot,
  TagFieldWrapper: TagFieldWrapper,
  TagFieldListWrapper: TagFieldListWrapper,
  TagFieldInputWrapper: TagFieldInputWrapper,
  TagFieldInput: TagFieldInput,
  TagFieldSuggestionWrapper: TagFieldSuggestionWrapper,
  TagFieldSuggestionLabel: TagFieldSuggestionLabel,
  TagFieldSuggestionIcon: TagFieldSuggestionIcon,
  TagFieldSuggestionWrapperList: TagFieldSuggestionWrapperList,
  TagFieldSuggestionList: TagFieldSuggestionList,
  TagFieldLoader: TagFieldLoader
});
export default Styled;