import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Borrows heavily from and inspired by material-ui https://github.com/mui-org/material-ui
 * basically a stripped-down version of it. Uing only the core functionalities and using what we need from it
 */
import useControlled from './use-controlled';
var _excluded = ["boundaryCount", "count", "defaultPage", "disabled", "onChange", "page", "siblingCount"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function usePagination(_ref) {
  var _ref$boundaryCount = _ref.boundaryCount,
    boundaryCount = _ref$boundaryCount === void 0 ? 1 : _ref$boundaryCount,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 1 : _ref$count,
    _ref$defaultPage = _ref.defaultPage,
    defaultPage = _ref$defaultPage === void 0 ? 1 : _ref$defaultPage,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    handleChange = _ref.onChange,
    pageProp = _ref.page,
    _ref$siblingCount = _ref.siblingCount,
    siblingCount = _ref$siblingCount === void 0 ? 1 : _ref$siblingCount,
    other = _objectWithoutProperties(_ref, _excluded);

  var _useControlled = useControlled({
    controlled: pageProp,
    "default": defaultPage
  }),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    page = _useControlled2[0],
    setPageState = _useControlled2[1];

  var handleClick = function handleClick(event, value) {
    if (!pageProp) {
      setPageState(value);
    }

    if (handleChange) {
      handleChange(event, value);
    }
  }; // https://dev.to/namirsab/comment/2050


  var range = function range(start, end) {
    var length = end - start + 1;
    return Array.from({
      length: length
    }, function (_, i) {
      return start + i;
    });
  };

  var startPages = range(1, Math.min(boundaryCount, count));
  var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  var siblingsStart = Math.max(Math.min( // Natural start
    page - siblingCount, // Lower boundary when page is high
    count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
    boundaryCount + 2);
  var siblingsEnd = Math.min(Math.max( // Natural end
    page + siblingCount, // Upper boundary when page is low
    boundaryCount + siblingCount * 2 + 2), // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1);
  var itemList = ['first'].concat(['previous'], _toConsumableArray(startPages), _toConsumableArray(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), _toConsumableArray(range(siblingsStart, siblingsEnd)), _toConsumableArray(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), _toConsumableArray(endPages), ['next'], ['last']);

  var buttonPage = function buttonPage(type) {
    switch (type) {
      case 'first':
        return 1;

      case 'previous':
        return page - 1;

      case 'next':
        return page + 1;

      case 'last':
        return count;

      default:
        return null;
    }
  };

  var items = itemList.map(function (item) {
    return typeof item === 'number' ? {
      onClick: function onClick(event) {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled: disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: function onClick(event) {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || !item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return _objectSpread({
    items: items
  }, other);
}

export default usePagination;
export { usePagination };