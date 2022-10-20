import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

import React, { useMemo } from 'react';
import PT from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import { record } from '../../utils/types/prop-types';
import { applyPolymorphicFunctionProp, objectKeys, objectValues } from '../../utils/functions';
import { Breakpoint } from '../../utils/types/css';
import { Color } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { BorderRadiusSize } from '../../utils/types/shape';
import { defaultTheme } from '../entity';
import { Typography, CommonStyles } from '../roots';
import { defaultPalette } from '../roots/palette';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? {} : _ref$theme;
  var _theme$palette = theme.palette,
    paletteOverride = _theme$palette === void 0 ? {} : _theme$palette,
    _theme$breakpoints = theme.breakpoints,
    breakpointsOverride = _theme$breakpoints === void 0 ? {} : _theme$breakpoints,
    _theme$typography = theme.typography,
    typographyOverride = _theme$typography === void 0 ? {} : _theme$typography,
    _theme$shape = theme.shape,
    shapeOverride = _theme$shape === void 0 ? {} : _theme$shape;
  var finalTheme = useMemo(function () {
    var palette = _objectSpread(_objectSpread({}, defaultPalette), paletteOverride);

    return {
      palette: palette,
      breakpoints: _objectSpread(_objectSpread({}, defaultTheme.breakpoints), breakpointsOverride),
      typography: _objectSpread({}, merge(_objectSpread({}, defaultTheme.typography), _objectSpread({}, typographyOverride))),
      shape: _objectSpread({}, merge(_objectSpread({}, defaultTheme.shape), _objectSpread({}, shapeOverride)))
    };
    return {};
  }, [JSON.stringify(theme)]);
  return React.createElement(SCThemeProvider, {
    theme: finalTheme
  }, applyPolymorphicFunctionProp(children, finalTheme), React.createElement(CommonStyles, null), React.createElement(Typography, null));
};

var _defaultTheme$typogra = defaultTheme.typography,
  baseLineHeight = _defaultTheme$typogra.baseLineHeight,
  font = _defaultTheme$typogra.font,
  typography = _objectWithoutProperties(_defaultTheme$typogra, ["baseLineHeight", "font"]);

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]),
  theme: PT.exact({
    breakpoints: PT.exact(record(objectValues(Breakpoint), PT.number)),
    palette: PT.exact(record(objectValues(Color), PT.string)),
    shape: PT.exact({
      borderRadius: PT.exact(record(objectValues(BorderRadiusSize), PT.string))
    }),
    typography: PT.exact(_objectSpread({
      baseLineHeight: PT.oneOfType([PT.string, PT.number]),
      font: PT.exact(record(objectValues(FontVariant), PT.object))
    }, record(objectKeys(typography), PT.string)))
  })
};
export default ThemeProvider;