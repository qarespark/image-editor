import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Slider from '../slider';
import { LabelTooltip } from '../slider/types';
import Styled from './rotation-slider.styles';
var _excluded = ["min", "max", "angle", "onChange", "onMouseDown", "onMouseUp", "step", "labelTooltipOptions", "annotation", "hideMarkText", "value", "railProps", "trackProps", "thumbProps", "labelTooltipProps", "markStyles", "markTextStyles"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var RotationSlider = intrinsicComponent(function (_ref, ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$angle = _ref.angle,
    angle = _ref$angle === void 0 ? 10 : _ref$angle,
    onChange = _ref.onChange,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$labelTooltipOpti = _ref.labelTooltipOptions,
    labelTooltipOptions = _ref$labelTooltipOpti === void 0 ? LabelTooltip.Off : _ref$labelTooltipOpti,
    _ref$annotation = _ref.annotation,
    annotation = _ref$annotation === void 0 ? '??' : _ref$annotation,
    _ref$hideMarkText = _ref.hideMarkText,
    hideMarkText = _ref$hideMarkText === void 0 ? false : _ref$hideMarkText,
    value = _ref.value,
    _ref$railProps = _ref.railProps,
    railProps = _ref$railProps === void 0 ? {} : _ref$railProps,
    _ref$trackProps = _ref.trackProps,
    trackProps = _ref$trackProps === void 0 ? {} : _ref$trackProps,
    _ref$thumbProps = _ref.thumbProps,
    thumbProps = _ref$thumbProps === void 0 ? {} : _ref$thumbProps,
    _ref$labelTooltipProp = _ref.labelTooltipProps,
    labelTooltipProps = _ref$labelTooltipProp === void 0 ? {} : _ref$labelTooltipProp,
    _ref$markStyles = _ref.markStyles,
    markStyles = _ref$markStyles === void 0 ? {} : _ref$markStyles,
    _ref$markTextStyles = _ref.markTextStyles,
    markTextStyles = _ref$markTextStyles === void 0 ? {} : _ref$markTextStyles,
    rest = _objectWithoutProperties(_ref, _excluded);

  var handleChange = function handleChange(event, newValue) {
    if (onChange) {
      onChange(event, newValue);
    }
  };

  var renderBar = function renderBar() {
    var barDom = [];
    var barDiv;

    for (var i = min; i <= max; i += step) {
      barDiv = [];

      if (i % angle === 0 || i === max) {
        barDiv = React.createElement(Styled.RotationSliderMark, {
          key: i,
          style: _objectSpread({}, markStyles)
        }, !hideMarkText && React.createElement(Styled.RotationSliderMarkText, {
          style: _objectSpread({}, markTextStyles)
        }, i === min + 1 ? max : i, React.createElement("sup", null, annotation)), React.createElement(Styled.RotationSliderBigDot, null));
      } else if (i % 10 === 0) {
        barDiv = React.createElement(Styled.RotationSliderSmallDotWrapper, {
          key: i
        }, React.createElement(Styled.RotationSliderSmallDot, null));
      }

      if (!Array.isArray(barDiv)) {
        barDom.push(barDiv);
      }
    }

    return barDom;
  };

  var getValue = function getValue() {
    if (value || value === 0) {
      if (value > max) {
        return max;
      }

      if (value < min) {
        return min;
      }

      return value;
    }

    return min;
  };

  return React.createElement(Slider, _extends({
    min: min,
    max: max,
    step: step,
    value: getValue(),
    hideTrack: true,
    hideAnnotation: true,
    annotation: annotation,
    onChange: handleChange,
    labelTooltip: labelTooltipOptions,
    ref: ref,
    components: {
      Rail: function Rail(props, style) {
        return React.createElement(Styled.RotationSliderList, _extends({}, props, {
          styles: _objectSpread({}, style)
        }), renderBar());
      },
      Thumb: Styled.RotationSliderControl
    },
    componentsProps: {
      rail: _objectSpread(_objectSpread({}, railProps), {}, {
        style: _objectSpread({}, railProps.style)
      }),
      track: _objectSpread(_objectSpread({}, trackProps), {}, {
        style: _objectSpread({}, trackProps.style)
      }),
      thumb: _objectSpread(_objectSpread({}, thumbProps), {}, {
        style: _objectSpread({
          top: '15%'
        }, thumbProps.style)
      }),
      labelTooltip: _objectSpread(_objectSpread({}, labelTooltipProps), {}, {
        style: _objectSpread({}, labelTooltipProps.style)
      })
    }
  }, rest, {
    defaultValue: Number(rest.defaultValue),
    style: _objectSpread({
      width: 'auto',
      height: 'auto'
    }, rest.style)
  }));
});
RotationSlider.defaultProps = {
  annotation: '??',
  min: 0,
  max: 100,
  step: 1,
  labelTooltipOptions: LabelTooltip.Off
};
RotationSlider.propTypes = {
  value: PT.oneOfType([PT.array, PT.number]),
  min: PT.number,
  max: PT.number,
  angle: PT.number,
  onChange: PT.func,
  onMouseDown: PT.func,
  onMouseUp: PT.func,
  step: PT.number,
  annotation: PT.string,
  hideMarkText: PT.bool,
  railProps: PT.object,
  trackProps: PT.object,
  thumbProps: PT.object,
  labelTooltipProps: PT.object,
  markStyles: PT.object,
  markTextStyles: PT.object,
  labelTooltipOptions: PT.oneOf(objectValues(LabelTooltip))
};
export default RotationSlider;