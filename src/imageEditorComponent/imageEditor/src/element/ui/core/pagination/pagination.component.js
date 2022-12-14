import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable react/no-array-index-key */

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PT from 'prop-types';
import Arrow from '../arrow';
import { intrinsicComponent } from '../../utils/functions';
import { usePagination } from '../../hooks/use-pagination';
import Styled from './pagination.styles';
var _excluded = ["getItemAriaLabel"],
  _excluded2 = ["disabled", "page", "selected", "type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}

var Pagination = intrinsicComponent(function (props, ref) {
  var _usePagination = usePagination(_objectSpread({}, props)),
    items = _usePagination.items;

  var _props$getItemAriaLab = props.getItemAriaLabel,
    getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
    rest = _objectWithoutProperties(props, _excluded);

  var paginationItem = function paginationItem(paginationitems) {
    var _paginationitems$disa = paginationitems.disabled,
      disabled = _paginationitems$disa === void 0 ? false : _paginationitems$disa,
      page = paginationitems.page,
      _paginationitems$sele = paginationitems.selected,
      selected = _paginationitems$sele === void 0 ? false : _paginationitems$sele,
      _paginationitems$type = paginationitems.type,
      type = _paginationitems$type === void 0 ? 'page' : _paginationitems$type,
      other = _objectWithoutProperties(paginationitems, _excluded2);

    var Icons = {
      previous: function previous() {
        return React.createElement(Arrow, {
          type: "left",
          IconProps: {
            size: 8
          }
        });
      },
      next: function next() {
        return React.createElement(Arrow, {
          type: "right",
          IconProps: {
            size: 8
          }
        });
      } // first: FirstPageIcon,
      // last: LastPageIcon,

    };
    var Icon = Icons[type];
    return type === 'start-ellipsis' || type === 'end-ellipsis' ? React.createElement(Styled.PaginationItem, _extends({
      disabled: disabled,
      selected: selected
    }, other), "\u2026") : React.createElement(Styled.PaginationItem, _extends({
      ref: ref,
      disabled: disabled,
      selected: selected
    }, other), type === 'page' && page, Icon ? React.createElement(Icon, null) : null);
  };

  return React.createElement(Styled.Pagination, {
    ref: ref,
    style: rest.style
  }, React.createElement(Styled.PaginationList, null, items.map(function (item, index) {
    return React.createElement(Styled.PaginationItemList, {
      key: index
    }, paginationItem(_objectSpread(_objectSpread({}, item), {}, {
      'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
      varaint: 'text'
    })));
  })));
});
Pagination.defaultProps = {};
export var propTypes = {
  boundaryCount: PT.number,
  count: PT.number,
  defaultPage: PT.number,
  disabled: PT.bool,
  onChange: PT.func,
  getItemAriaLabel: PT.func,
  page: PT.number,
  siblingCount: PT.number
};
Pagination.propTypes = propTypes;
export default Pagination;