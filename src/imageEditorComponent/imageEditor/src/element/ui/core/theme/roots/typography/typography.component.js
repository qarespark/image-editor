import { createGlobalStyle, css } from 'styled-components';
var Typography = createGlobalStyle(["", ";"], function (_ref) {
  var theme = _ref.theme;
  var baseLineHeight = theme.typography.baseLineHeight;
  return css(["h1,h2,h3,h4,h5,h6,p,small{line-height:", ";}"], baseLineHeight);
});
export default Typography;