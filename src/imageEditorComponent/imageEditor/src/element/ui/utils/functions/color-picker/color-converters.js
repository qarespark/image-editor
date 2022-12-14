import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

/* eslint-disable id-length */
export var rgbStringToArray = function rgbStringToArray(rgbColorString) {
  return rgbColorString.replaceAll(/[^\d,]/gi, '').split(',').map(function (n) {
    return +n;
  });
};
export var hexToRgb = function hexToRgb(hexColor) {
  // if (!hexColor) return { r: 0, g: 0, b: 0 };
  if (!hexColor) return [0, 0, 0];
  return [Number.parseInt(hexColor.slice(1, 3), 16), Number.parseInt(hexColor.slice(3, 5), 16), Number.parseInt(hexColor.slice(5, 7), 16)];
};

var rgbChannelToHex = function rgbChannelToHex(channel) {
  return channel.toString(16).padStart(2, '0');
};

export var rgbToHex = function rgbToHex() {
  for (var _len = arguments.length, rgbColor = new Array(_len), _key = 0; _key < _len; _key++) {
    rgbColor[_key] = arguments[_key];
  }

  return "#".concat(rgbColor.map(rgbChannelToHex).join(''));
};
export var hslToHex = function hslToHex(h, s, l) {
  var dividedL = l / 100;
  var a = s * Math.min(dividedL, 1 - dividedL) / 100;

  var f = function f(n) {
    var k = (n + h / 30) % 12;
    var color = dividedL - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return rgbChannelToHex(Math.round(255 * color));
  };

  return "#".concat(f(0)).concat(f(8)).concat(f(4));
};
export var rgbToHsl = function rgbToHsl() {
  for (var _len2 = arguments.length, rgbColor = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rgbColor[_key2] = arguments[_key2];
  }

  var r = rgbColor[0],
      g = rgbColor[1],
      b = rgbColor[2];
  r /= 255;
  g /= 255;
  b /= 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var h;
  var s;
  var l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    var diff = max - min;
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / diff + 2;
        break;

      case b:
        h = (r - g) / diff + 4;
        break;

      default:
        h = 0;
    }

    h /= 6;
  } // * 360 for having the hue in degrees


  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};
export var colorToHsl = function colorToHsl(color) {
  if (color.startsWith('#')) {
    var hex = color;

    if (color.length === 4) {
      hex = "#".concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]).concat(color[3]).concat(color[3]);
    }

    return rgbToHsl.apply(void 0, _toConsumableArray(hexToRgb(hex)));
  }

  if (color.startsWith('rgb')) {
    var colorInRgb = rgbStringToArray(color);
    return rgbToHsl.apply(void 0, _toConsumableArray(colorInRgb));
  } // if the color is in text and no one from previous then return the default color which is black


  if (typeof color === 'string') {
    return [0, 0, 0];
  }

  return color;
};
export var colorToRgb = function colorToRgb(color) {
  // we are not handling (hsl/color name) here cause we are accepting only HEX and RGB colors as default colors from user.
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }

  if (color.startsWith('rgb')) {
    return rgbStringToArray(color);
  }

  if (typeof color === 'string') {
    return [0, 0, 0];
  }

  return color;
};
export var colorToHex = function colorToHex(color) {
  if (color.startsWith('#')) {
    if (color.length === 7) {
      return color;
    }

    return "#".concat(color[0]).concat(color[0]).concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]);
  }

  if (color.startsWith('rgb')) {
    return rgbToHex.apply(void 0, _toConsumableArray(rgbStringToArray(color)));
  }

  if (typeof color === 'string') {
    return '#000000';
  }

  return color;
};

var checkIsBlack = function checkIsBlack(s, l) {
  return l === 0 && (s === 0 || s === 1);
};

var checkIsWhite = function checkIsWhite(s, l) {
  return s === 0 && l === 1;
}; // both hsv and hsl values are in [0, 1] except h is in [0, 360]


export var hsvToHsl = function hsvToHsl(h, s, v) {
  var newS = s;
  var l = (2 - s) * v / 2;

  if (l !== 0) {
    if (l === 1) {
      newS = 0;
    } else if (l < 0.5) {
      newS = newS * v / (l * 2);
    } else {
      newS = newS * v / (2 - l * 2);
    }
  }

  var isBlack = checkIsBlack(newS, l);
  return [isBlack || checkIsWhite(newS, l) ? 0 : h, isBlack ? 0 : Math.round(newS * 100), Math.round(l * 100)];
}; // both hsv and hsl values are in [0, 1] except h is in [0, 360]

export var hslToHsv = function hslToHsv(h, s, l) {
  var newS = s;
  var newL = l * 2;
  newS *= newL <= 1 ? newL : 2 - newL;
  var v = (newL + newS) / 2;
  newS = 2 * newS / (newL + newS); // return [h, newS, v];

  var isBlack = checkIsBlack(newS, l);
  return [isBlack || checkIsWhite(newS, l) ? 0 : h, isBlack ? 0 : Math.round(newS * 100), Math.round(v * 100)];
}; // TODO: validating 3 color code for Hex
// /^#([\da-f]{3}){1,2}$/i.test(color)colorToHex

export var validateHex = function validateHex(color) {
  return /^#[\da-f]{6}$/i.test(color);
};