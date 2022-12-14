import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* eslint-disable @typescript-eslint/no-non-null-assertion */

/* eslint-disable @typescript-eslint/no-unnecessary-condition */

/* eslint-disable no-constant-condition */

/* eslint-disable react/no-array-index-key */

/* ___*/

/* eslint-disable id-length */
import React, { useState, useMemo, useEffect } from 'react';
import PT from 'prop-types';
import { PinOutline, DeleteOutline } from '../../../icons';
import Select from '../select';
import MenuItem from '../menu-item';
import Input from '../input';
import useDrag from '../../hooks/use-drag';
import { intrinsicComponent, colorToHsl, hexToRgb, hslToHex, hslToHsv, hsvToHsl, restrictNumber, mapNumber, colorToHex, getElemDocumentCoords, rgbToHex, validateHex, rgbStringToArray } from '../../utils/functions';
import Styled from './color-picker.styles';
import ColorItem from './color-item.component';
var _excluded = ["defaultColor", "onChange", "pinnedColors", "showTransparentColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var transparentColor = ['rgba(0,0,0,0)'];
var transparentColorHex = '#00000000';
var colorsHuesCount = 360;
var ColorPicker = intrinsicComponent(function (_ref, ref) {
  var _ref$defaultColor = _ref.defaultColor,
    defaultColor = _ref$defaultColor === void 0 ? '#000000' : _ref$defaultColor,
    onChange = _ref.onChange,
    _ref$pinnedColors = _ref.pinnedColors,
    pinnedColors = _ref$pinnedColors === void 0 ? [] : _ref$pinnedColors,
    _ref$showTransparentC = _ref.showTransparentColor,
    showTransparentColor = _ref$showTransparentC === void 0 ? false : _ref$showTransparentC,
    rest = _objectWithoutProperties(_ref, _excluded);

  var showedColors = showTransparentColor ? transparentColor.concat(pinnedColors) : pinnedColors;

  var isTransparentColor = function isTransparentColor(color) {
    return color === transparentColorHex || color === transparentColor[0];
  };

  var _useState = useState({
    color: '#ff0000',
    pointerLeft: 0
  }),
    _useState2 = _slicedToArray(_useState, 2),
    bar = _useState2[0],
    setBar = _useState2[1];

  var _useState3 = useState({
    color: isTransparentColor(defaultColor) ? '#00000000' : colorToHex(defaultColor) || '#000000',
    pointer: {
      left: 0,
      top: 0
    }
  }),
    _useState4 = _slicedToArray(_useState3, 2),
    rangePicker = _useState4[0],
    setRangePicker = _useState4[1];

  var _useState5 = useState(showedColors),
    _useState6 = _slicedToArray(_useState5, 2),
    localPinnedColors = _useState6[0],
    setLocalPinnedColors = _useState6[1];

  var _useState7 = useState('hex'),
    _useState8 = _slicedToArray(_useState7, 2),
    inputType = _useState8[0],
    setInputType = _useState8[1];

  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    rgbColorValue = _useState10[0],
    setRgbColorValue = _useState10[1];

  var _useState11 = useState(colorToHex(rangePicker.color)),
    _useState12 = _slicedToArray(_useState11, 2),
    hexInputValue = _useState12[0],
    setHexInputValue = _useState12[1];

  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    barRef = _useState14[0],
    setBarRef = _useState14[1];

  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    rangePickerRef = _useState16[0],
    setRangePickerRef = _useState16[1];

  var isColorChecked = function isColorChecked(checkedColor) {
    if (checkedColor === transparentColor[0] && rangePicker.color === transparentColorHex) {
      return true;
    }

    return checkedColor === rangePicker.color;
  };

  var filterTransparentColor = function filterTransparentColor(colors) {
    return colors.filter(function (item) {
      return item !== 'rgba(0,0,0,0)';
    });
  };

  var getRgbColor = function getRgbColor(color) {
    return isTransparentColor(color) ? transparentColor[0] : "rgb(".concat(hexToRgb(color).join(', '), ")");
  };

  var handlePinnedColors = function handlePinnedColors(hexColor, type) {
    if (type === 'add') {
      var newLocalPinnedColors = [].concat(_toConsumableArray(localPinnedColors), [hexColor]);
      setLocalPinnedColors(newLocalPinnedColors);

      if (typeof onChange === 'function') {
        onChange(rangePicker.color, getRgbColor(hexColor), filterTransparentColor(newLocalPinnedColors));
      }
    } else {
      var _newLocalPinnedColors = localPinnedColors.filter(function (item) {
        return item !== rangePicker.color;
      });

      setLocalPinnedColors(_newLocalPinnedColors);

      if (typeof onChange === 'function') {
        onChange(rangePicker.color, getRgbColor(hexColor), filterTransparentColor(_newLocalPinnedColors));
      }
    }
  };

  var changeBarPosByColor = function changeBarPosByColor(color) {
    if (barRef !== null) {
      var _ref2 = getElemDocumentCoords(barRef),
        left = _ref2.left;

      var _colorToHsl = colorToHsl(color || rangePicker.color),
        _colorToHsl2 = _slicedToArray(_colorToHsl, 1),
        h = _colorToHsl2[0];

      var targetColorElem = barRef.querySelector("[data-hue='".concat(h, "']"));

      if (targetColorElem !== null) {
        var targetColorRgb = targetColorElem.style.backgroundColor || bar.color;
        setBar({
          color: targetColorRgb,
          pointerLeft: getElemDocumentCoords(targetColorElem).left - left || bar.pointerLeft
        });
      }
    }
  };

  var handleRgbInput = function handleRgbInput(value, index) {
    if (value > 255 || Number.isNaN(value)) {
      return;
    }

    var rgbArr = rgbColorValue;
    rgbArr[index] = value;
    var newHexColor = rgbToHex.apply(void 0, _toConsumableArray(rgbArr));
    setRgbColorValue(_toConsumableArray(rgbArr));

    if (validateHex(newHexColor)) {
      setRangePicker(_objectSpread(_objectSpread({}, rangePicker), {}, {
        color: newHexColor
      }));
      changeBarPosByColor(newHexColor);
    }
  };

  var updateRgb = function updateRgb(color) {
    if (color.includes('rgb')) {
      setRgbColorValue(rgbStringToArray(color));
    } else {
      setRgbColorValue(hexToRgb(color));
    }
  };

  var getHexColor = function getHexColor(color) {
    return isTransparentColor(color) ? transparentColorHex : color;
  };

  var changeRangePickerPointerPosByColor = function changeRangePickerPointerPosByColor(color) {
    if (rangePickerRef !== null) {
      var _ref3 = getElemDocumentCoords(rangePickerRef),
        width = _ref3.width,
        height = _ref3.height;

      var colorHsl = colorToHsl(color);
      var colorHsv = hslToHsv(colorHsl[0], colorHsl[1] / 100, colorHsl[2] / 100);
      var left = mapNumber(colorHsv[1], 0, 100, 0, width);
      var top = height - mapNumber(colorHsv[2], 0, 100, 0, height);
      setRangePicker({
        color: getHexColor(color),
        pointer: {
          left: left,
          top: top
        }
      });
      changeBarPosByColor(color);
      updateRgb(color);

      if (typeof onChange === 'function') {
        onChange(getHexColor(color), getRgbColor(color), filterTransparentColor(localPinnedColors));
      }
    }
  };

  var changeRangePickerColorByPosition = function changeRangePickerColorByPosition(left, top, barColor) {
    if (rangePickerRef !== null) {
      var _ref4 = getElemDocumentCoords(rangePickerRef),
        width = _ref4.width,
        height = _ref4.height;

      var _colorToHsl3 = colorToHsl(barColor),
        _colorToHsl4 = _slicedToArray(_colorToHsl3, 1),
        barColorHue = _colorToHsl4[0];

      var restrictedLeft = restrictNumber(left, 0, width) || 0;
      var restrictedTop = restrictNumber(top, 0, height) || 0;
      var hsl = hsvToHsl(barColorHue, restrictedLeft / width, (height - restrictedTop) / height);
      var hexColor = hslToHex(hsl[0], hsl[1], hsl[2]);
      setRangePicker({
        color: hexColor,
        pointer: {
          left: restrictedLeft,
          top: restrictedTop
        }
      });

      if (typeof onChange === 'function') {
        onChange(hexColor, "rgb(".concat(hexToRgb(hexColor).join(', '), ")"), filterTransparentColor(localPinnedColors));
      }
    }
  };

  var changeBarColorByPosition = function changeBarColorByPosition(pointerLeft) {
    var barElem = barRef;

    if (barElem !== null) {
      var _ref5 = getElemDocumentCoords(barElem),
        width = _ref5.width;

      var mappedPointerLeft = restrictNumber(Math.round(mapNumber(pointerLeft, 0, width, 0, colorsHuesCount)), 0, colorsHuesCount);
      var targetColorElem = barElem.querySelector("[data-hue='".concat(mappedPointerLeft, "']"));
      var targetColorRgb = targetColorElem.style.backgroundColor;
      setBar({
        color: targetColorRgb,
        pointerLeft: restrictNumber(pointerLeft, 0, width)
      });
      return targetColorRgb;
    }

    return bar.color;
  };

  var updateBarColor = function updateBarColor(e) {
    var barElem = barRef;

    if (barElem !== null) {
      var _e$touches;

      var _ref6 = getElemDocumentCoords(barElem),
        left = _ref6.left;

      var pointerEvent = ((_e$touches = e.touches) === null || _e$touches === void 0 ? void 0 : _e$touches[0]) || e;
      var barColor = changeBarColorByPosition(pointerEvent.pageX - left);
      changeRangePickerColorByPosition(rangePicker.pointer.left, rangePicker.pointer.top, barColor);
    }
  };

  var updateRangePickerColor = function updateRangePickerColor(e) {
    var rangePickerElem = rangePickerRef;

    if (rangePickerElem !== null) {
      var _ref7 = getElemDocumentCoords(rangePickerElem),
        left = _ref7.left,
        top = _ref7.top,
        height = _ref7.height,
        width = _ref7.width;

      var pointerLeft = e ? restrictNumber(e.pageX - left, 0, width) : rangePicker.pointer.left || 0;
      var pointerTop = e ? restrictNumber(e.pageY - top, 0, height) : rangePicker.pointer.left || 0;
      changeRangePickerColorByPosition(pointerLeft, pointerTop, bar.color);
    }
  };

  var moveBarPointerByArrows = function moveBarPointerByArrows(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      return;
    }

    changeBarColorByPosition(bar.pointerLeft + (e.key === 'ArrowLeft' ? -1 : 1));
  };

  var moveRangePickerPointerByArrows = function moveRangePickerPointerByArrows(e) {
    var currentDirection = 0;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      currentDirection = -1;
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      currentDirection = 1;
    }

    if (currentDirection) {
      changeRangePickerColorByPosition((rangePicker.pointer.left || 0) + (['ArrowLeft', 'ArrowRight'].includes(e.key) ? currentDirection : 0), (rangePicker.pointer.top || 0) + (['ArrowUp', 'ArrowDown'].includes(e.key) ? currentDirection : 0), bar.color);
    }
  };

  var validateHexAndUpdate = function validateHexAndUpdate(color) {
    var testHex = validateHex(color);

    if (testHex) {
      changeRangePickerPointerPosByColor(color);
    }

    setHexInputValue(color);
  };

  useEffect(function () {
    changeBarPosByColor(rangePicker.color);
    changeRangePickerPointerPosByColor(rangePicker.color);
  }, [barRef]);
  useEffect(function () {
    setHexInputValue(rangePicker.color);
    updateRgb(rangePicker.color);
  }, [rangePicker.color]);
  var barColors = useMemo(function () {
    return _toConsumableArray(new Array(colorsHuesCount + 1)).map(function (_, h) {
      return React.createElement(Styled.BarColorStop, {
        key: h,
        $color: "hsl(".concat(h, ", 100%, 50%)"),
        "data-hue": h
      });
    });
  }, []);
  var barPointSliding = useDrag(updateBarColor, updateBarColor, null);
  var rangePickerPointSliding = useDrag(updateRangePickerColor, updateRangePickerColor, null);
  return React.createElement(Styled.ColorPickerWrapper, _extends({
    ref: ref
  }, rest), React.createElement(Styled.RangePickerWrapper, _extends({
    ref: setRangePickerRef,
    color: bar.color
  }, rangePickerPointSliding), React.createElement(Styled.WhiteGradient, null), React.createElement(Styled.BlackGradient, null), React.createElement(Styled.ColorPointer, {
    tabIndex: -1,
    left: rangePicker.pointer.left || 0,
    top: rangePicker.pointer.top || 0,
    onKeyDown: moveRangePickerPointerByArrows,
    considerTopWidth: true
  })), React.createElement(Styled.BarWrapper, barPointSliding, React.createElement(Styled.Bar, {
    ref: setBarRef
  }, React.createElement("tbody", null, React.createElement("tr", null, barColors))), React.createElement(Styled.ColorPointer, {
    tabIndex: -1,
    left: bar.pointerLeft,
    onKeyDown: moveBarPointerByArrows,
    considerTopWidth: false,
    style: {
      top: -3
    }
  })), React.createElement(Styled.ColorItemsContainer, null, localPinnedColors.map(function (color) {
    return React.createElement("div", {
      className: "item",
      key: color
    }, React.createElement(ColorItem, {
      value: color,
      checked: isColorChecked(color),
      onChange: function onChange(ev) {
        return changeRangePickerPointerPosByColor(ev.target.value);
      }
    }));
  })), React.createElement(Styled.ColorPickerAction, null, React.createElement(Styled.Select, {
    value: inputType
  }, React.createElement(Select, {
    size: "sm",
    value: inputType,
    MenuProps: {
      zIndex: 11112
    },
    onChange: function onChange(ev) {
      return setInputType(ev);
    },
    fullWidth: true
  }, React.createElement(MenuItem, {
    value: "hex"
  }, "Hex"), React.createElement(MenuItem, {
    value: "rgb"
  }, "RGB"))), inputType === 'hex' ? React.createElement(Input, {
    size: "sm",
    error: !/^#([\da-f]{3}){1,2}$/i.test(rangePicker.color),
    value: hexInputValue,
    onChange: function onChange(e) {
      return validateHexAndUpdate(e.target.value);
    },
    style: {
      width: '45%'
    }
  }) : rgbColorValue.map(function (rgb, index) {
    return React.createElement(Input // eslint-disable-next-line react/no-array-index-key
      , {
        key: index,
        size: "sm",
        value: rgb,
        onChange: function onChange(e) {
          var _e$target;

          return handleRgbInput(Number((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value), index);
        },
        style: {
          width: '20%'
        }
      });
  }), rangePicker.color !== transparentColorHex && React.createElement(Styled.ColorPickerIcon, {
    onClick: function onClick() {
      return localPinnedColors.some(function (checkedColor) {
        return isColorChecked(checkedColor);
      }) ? handlePinnedColors(rangePicker.color, 'delete') : handlePinnedColors(rangePicker.color, 'add');
    }
  }, localPinnedColors.some(function (checkedColor) {
    return isColorChecked(checkedColor);
  }) ? React.createElement(DeleteOutline, null) : React.createElement(PinOutline, null))));
});
ColorPicker.defaultProps = {
  defaultColor: '#000000',
  pinnedColors: [],
  showTransparentColor: false
};
ColorPicker.propTypes = {
  defaultColor: PT.string,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  pinnedColors: PT.array,
  showTransparentColor: PT.bool
};
export default ColorPicker;