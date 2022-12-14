import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable no-shadow */

/* eslint-disable @typescript-eslint/no-non-null-assertion */

/* eslint-disable no-use-before-define */

/* ___*/
import React, { useEffect, useRef, useState, useCallback } from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues, asc, valueToPercent, percentToValue, roundValueToStep, setValueIndex, findClosest, ownerDocument, clamp, trackFinger, focusThumb, axisProps, useForkRef } from '../../utils/functions';
import useControlled from '../../hooks/use-controlled';
import useEventCallback from '../../hooks/use-event-callback';
import { LabelTooltip } from './types';
import Styled from './slider.styles';
var _excluded = ["defaultValue", "disabled", "disableSwap", "hideTrack", "hideAnnotation", "value", "min", "max", "onChange", "onMouseDown", "onMouseUp", "step", "labelTooltip", "annotation", "components", "componentsProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
var dataIndex = 'data-index';
var Slider = intrinsicComponent(function (_ref, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref) {
  var defaultValue = _ref.defaultValue,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$disableSwap = _ref.disableSwap,
    disableSwap = _ref$disableSwap === void 0 ? false : _ref$disableSwap,
    _ref$hideTrack = _ref.hideTrack,
    hideTrack = _ref$hideTrack === void 0 ? false : _ref$hideTrack,
    _ref$hideAnnotation = _ref.hideAnnotation,
    hideAnnotation = _ref$hideAnnotation === void 0 ? false : _ref$hideAnnotation,
    valueProp = _ref.value,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    onChange = _ref.onChange,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$labelTooltip = _ref.labelTooltip,
    labelTooltip = _ref$labelTooltip === void 0 ? LabelTooltip.Off : _ref$labelTooltip,
    _ref$annotation = _ref.annotation,
    annotation = _ref$annotation === void 0 ? '' : _ref$annotation,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    _ref$componentsProps = _ref.componentsProps,
    componentsProps = _ref$componentsProps === void 0 ? {} : _ref$componentsProps,
    rest = _objectWithoutProperties(_ref, _excluded);

  return function () {
    var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

    var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

    var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dragging = _useState6[0],
      setDragging = _useState6[1];

    var moveCount = useRef(0);
    var previousIndex = useRef(0);
    var touchId = useRef();
    var sliderRef = useRef(null);
    var handleRef = useForkRef(ref, sliderRef);

    var _useControlled = useControlled({
      controlled: valueProp,
      "default": defaultValue !== null && defaultValue !== void 0 ? defaultValue : min
    }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

    var axis = 'horizontal';
    var range = Array.isArray(valueDerived);
    var values = range ? valueDerived.slice().sort(asc) : [valueDerived];

    var getFingerNewValue = function getFingerNewValue(_ref2) {
      var finger = _ref2.finger,
        _ref2$move = _ref2.move,
        move = _ref2$move === void 0 ? false : _ref2$move,
        values2 = _ref2.values;
      var slider = sliderRef.current;

      if (slider) {
        var _slider$getBoundingCl = slider.getBoundingClientRect(),
          width = _slider$getBoundingCl.width,
          height = _slider$getBoundingCl.height,
          bottom = _slider$getBoundingCl.bottom,
          left = _slider$getBoundingCl.left;

        var percent;

        if (axis.indexOf('vertical') === 0) {
          percent = (bottom - finger.y) / height;
        } else {
          percent = (finger.x - left) / width;
        }

        if (axis.includes('-reverse')) {
          percent = 1 - percent;
        }

        var newValue;
        newValue = percentToValue(percent, min, max);

        if (step) {
          newValue = roundValueToStep(newValue, step, min);
        }

        newValue = clamp(newValue, min, max);
        var activeIndex = 0;

        if (range) {
          if (!move) {
            activeIndex = findClosest(values2, newValue);
          } else {
            activeIndex = previousIndex.current;
          }

          if (disableSwap) {
            newValue = clamp(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
          }

          var previousValue = newValue;
          newValue = setValueIndex({
            values: values2,
            newValue: newValue,
            index: activeIndex
          });

          if (!(disableSwap && move) && Array.isArray(newValue)) {
            activeIndex = newValue.indexOf(previousValue);
            previousIndex.current = activeIndex;
          }
        }

        return {
          newValue: newValue,
          activeIndex: activeIndex
        };
      }

      return null;
    };

    var handleChange = function handleChange(event, value, thumbIndex) {
      if (onChange) {
        onChange(event, value, thumbIndex);
      }
    };

    var handleHiddenInputChange = function handleHiddenInputChange(event) {
      var index = Number(event.currentTarget.getAttribute(dataIndex));
      var newValue = event.target.valueAsNumber;

      if (range) {
        if (disableSwap) {
          newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
        }

        var previousValue = newValue;
        newValue = setValueIndex({
          values: values,
          newValue: newValue,
          index: index
        });
        var activeIndex = index;

        if (!disableSwap) {
          activeIndex = newValue.indexOf(previousValue);
        }

        focusThumb({
          sliderRef: sliderRef,
          activeIndex: activeIndex
        });
      }

      setValueState(newValue);
      handleChange(event, newValue, index);

      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    var handleTouchMove = useEventCallback(function (nativeEvent) {
      var finger = trackFinger(nativeEvent, touchId);

      if (!finger) {
        return;
      }

      moveCount.current += 1;

      if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
        handleTouchEnd(nativeEvent);
        return;
      }

      var _ref3 = getFingerNewValue({
        finger: finger,
        move: true,
        values: values
      }),
        newValue = _ref3.newValue,
        activeIndex = _ref3.activeIndex;

      focusThumb({
        sliderRef: sliderRef,
        activeIndex: activeIndex,
        setActive: setActive
      });
      setValueState(newValue);

      if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
        setDragging(true);
      }

      handleChange(nativeEvent, newValue, activeIndex);
    });
    var handleTouchEnd = useEventCallback(function (nativeEvent) {
      var finger = trackFinger(nativeEvent, touchId);
      setDragging(false);

      if (!finger) {
        return;
      }

      setActive(-1);

      if (nativeEvent.type === 'touchend') {
        setOpen(-1);
      }

      if (onMouseUp) {
        onMouseUp(nativeEvent);
      }

      touchId.current = undefined;
      stopListening();
    });
    var handleTouchStart = useEventCallback(function (nativeEvent) {
      var touch = nativeEvent.changedTouches[0];

      if (touch != null) {
        touchId.current = touch.identifier;
      }

      var finger = trackFinger(nativeEvent, touchId);

      var _ref4 = getFingerNewValue({
        finger: finger,
        values: values
      }),
        newValue = _ref4.newValue,
        activeIndex = _ref4.activeIndex;

      focusThumb({
        sliderRef: sliderRef,
        activeIndex: activeIndex,
        setActive: setActive
      });
      setValueState(newValue);
      handleChange(nativeEvent, newValue, activeIndex);
      moveCount.current = 0;
      var doc = ownerDocument(sliderRef.current);
      doc.addEventListener('touchmove', handleTouchMove);
      doc.addEventListener('touchend', handleTouchEnd);
    });
    var handleMouseOver = useEventCallback(function (event) {
      var index = Number(event.currentTarget.getAttribute(dataIndex));
      setOpen(index);
    });
    var handleMouseLeave = useEventCallback(function () {
      setOpen(-1);
    });
    var handleMouseDown = useEventCallback(function (event) {
      if (!disabled) {
        if (onMouseDown) {
          onMouseDown(event);
        }

        if (event.button !== 0) {
          return;
        } // Avoid text selection


        event.preventDefault();
        var finger = trackFinger(event, touchId);

        var _ref5 = getFingerNewValue({
          finger: finger,
          values: values
        }),
          newValue = _ref5.newValue,
          activeIndex = _ref5.activeIndex;

        focusThumb({
          sliderRef: sliderRef,
          activeIndex: activeIndex,
          setActive: setActive
        });
        setValueState(newValue);
        handleChange(event, newValue, activeIndex);
        moveCount.current = 0;
        var doc = ownerDocument(sliderRef.current);
        doc.addEventListener('mousemove', handleTouchMove);
        doc.addEventListener('mouseup', handleTouchEnd);
      } else {
        // Avoid text selection
        event.preventDefault();
      }
    });
    var stopListening = useCallback(function () {
      var doc = ownerDocument(sliderRef.current);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    }, [handleTouchEnd, handleTouchMove]);
    useEffect(function () {
      var slider = sliderRef.current;

      if (slider) {
        return function () {
          stopListening();
        };
      }
    }, [stopListening, handleTouchStart]);
    useEffect(function () {
      if (disabled) {
        stopListening();
      }
    }, [disabled, stopListening]);

    if (disabled && active !== -1) {
      setActive(-1);
    }

    var trackOffset = valueToPercent(range ? values[0] : min, min, max);
    var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

    var trackStyle = _objectSpread(_objectSpread({}, axisProps[axis].offset(trackOffset)), axisProps[axis].leap(trackLeap));

    var railProps = componentsProps.rail;
    var Rail = typeof components.Rail === 'function' ? React.createElement(components.Rail, _extends({}, railProps, {
      style: _objectSpread({}, railProps === null || railProps === void 0 ? void 0 : railProps.style)
    })) : React.createElement(Styled.Rail, _extends({}, railProps, {
      style: _objectSpread({}, railProps === null || railProps === void 0 ? void 0 : railProps.style)
    }));
    var trackProps = componentsProps.track;
    var Track = !hideTrack && (typeof components.Track === 'function' ? React.createElement(components.Track, _extends({}, trackProps, {
      style: _objectSpread(_objectSpread({}, trackStyle), trackProps === null || trackProps === void 0 ? void 0 : trackProps.style)
    })) : React.createElement(Styled.Track, _extends({}, trackProps, {
      style: _objectSpread(_objectSpread({}, trackStyle), trackProps === null || trackProps === void 0 ? void 0 : trackProps.style)
    })));
    var thumbProps = componentsProps.thumb;
    var Thumb = components.Thumb || Styled.Thumb;
    var LabelTooltip = components.LabelTooltip || Styled.LabelTooltip;
    var labelTooltipProps = componentsProps.labelTooltip;
    var annotationText = annotation ? " ".concat(annotation) : '';
    return React.createElement(Styled.Slider, _extends({
      ref: handleRef,
      disabled: disabled,
      onTouchStart: handleTouchStart,
      onMouseDown: handleMouseDown
    }, rest), Rail, Track, values.map(function (value, index) {
      var percent = valueToPercent(value, min, max);
      var style = axisProps[axis].offset(percent);
      return (

        // eslint-disable-next-line react/no-array-index-key
        React.createElement(React.Fragment, {
          key: index
        }, React.createElement(Thumb, _extends({
          "data-index": index,
          onMouseOver: handleMouseOver,
          onMouseLeave: handleMouseLeave
        }, thumbProps, {
          style: _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: disableSwap && active !== index ? 'none' : undefined
          }, thumbProps === null || thumbProps === void 0 ? void 0 : thumbProps.style)
        }), React.createElement("input", {
          "data-index": index,
          type: "range",
          min: min,
          max: max,
          value: values[index],
          step: step,
          disabled: disabled,
          onChange: handleHiddenInputChange
        }), React.createElement(LabelTooltip, {
          open: open === index || active === index || labelTooltip === 'on',
          disabled: disabled,
          style: _objectSpread({}, labelTooltipProps === null || labelTooltipProps === void 0 ? void 0 : labelTooltipProps.style)
        }, values[index], annotationText)))
      );
    }), !hideAnnotation && React.createElement(Styled.SliderAnnotation, null, React.createElement("span", null, min, annotationText), React.createElement("span", null, max, annotationText)));
  }();
});
Slider.defaultProps = {
  annotation: 'MB',
  min: 0,
  max: 100,
  step: 1,
  labelTooltip: LabelTooltip.Off
};
Slider.propTypes = {
  defaultValue: PT.oneOfType([PT.array, PT.number]),
  value: PT.oneOfType([PT.array, PT.number]),
  min: PT.number,
  max: PT.number,
  onChange: PT.func,
  onMouseDown: PT.func,
  onMouseUp: PT.func,
  step: PT.number,
  annotation: PT.string,
  disabled: PT.bool,
  disableSwap: PT.bool,
  hideTrack: PT.bool,
  hideAnnotation: PT.bool,
  labelTooltip: PT.oneOf(objectValues(LabelTooltip)),
  components: PT.shape({
    Rail: PT.elementType,
    Track: PT.elementType,
    Thumb: PT.elementType,
    LabelTooltip: PT.elementType
  }),
  // eslint-disable-next-line react/forbid-prop-types
  componentsProps: PT.object
};
export default Slider;