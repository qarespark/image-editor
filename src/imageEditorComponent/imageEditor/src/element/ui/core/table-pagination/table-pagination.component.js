import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/* ___*/
import React, { useState } from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Select from '../select';
import MenuItem from '../menu-item';
import Pagination from '../pagination';
import Input from '../input';
import Button from '../button';
import { Size, Background } from '../select/types';
import Styled from './table-pagination.styles';

var _excluded = ["children", "page", "count", "rowsPerPage", "rowsPerPageOptions", "onPageChange", "onRowsPerPageChange"];
var getTotalCount = function getTotalCount(count, to) {
  return React.createElement(Styled.WeightedText, null, count !== -1 ? count : "more than ".concat(to));
};

var FromTo = function FromTo(from, to) {
  return React.createElement(Styled.WeightedText, null, "".concat(from, " - ").concat(to));
};

var defaultLabelDisplayedRows = function defaultLabelDisplayedRows(_ref) {
  var from = _ref.from,
    to = _ref.to,
    count = _ref.count;
  return React.createElement("span", null, "Showing ", FromTo(from, to), " of ", getTotalCount(count, to), " result");
};

var TablePagination = intrinsicComponent(function (_ref2, ref) {
  var children = _ref2.children,
    page = _ref2.page,
    count = _ref2.count,
    _ref2$rowsPerPage = _ref2.rowsPerPage,
    rowsPerPage = _ref2$rowsPerPage === void 0 ? 5 : _ref2$rowsPerPage,
    _ref2$rowsPerPageOpti = _ref2.rowsPerPageOptions,
    rowsPerPageOptions = _ref2$rowsPerPageOpti === void 0 ? [5, 10, 25] : _ref2$rowsPerPageOpti,
    onPageChange = _ref2.onPageChange,
    onRowsPerPageChange = _ref2.onRowsPerPageChange,
    rest = _objectWithoutProperties(_ref2, _excluded);

  var _useState = useState(page),
    _useState2 = _slicedToArray(_useState, 2),
    buttonValue = _useState2[0],
    setButtonValue = _useState2[1];

  var getLabelDisplayedRowsTo = function getLabelDisplayedRowsTo() {
    if (count === -1) return page * rowsPerPage;
    return rowsPerPage === -1 ? count : Math.min(count, page * rowsPerPage);
  };

  var handleChange = function handleChange(event) {
    setButtonValue(event.target.value);
  };

  var perPageOption = rowsPerPageOptions.map(function (item) {
    return "".concat(item, " / page");
  });
  var paginationCount = rowsPerPage > count ? 1 : Math.ceil(count / rowsPerPage);
  return React.createElement(Styled.TablePagination, _extends({
    ref: ref
  }, rest), React.createElement(Styled.Section, null, React.createElement(Styled.ShowPages, null, defaultLabelDisplayedRows({
    from: count === 0 ? 0 : (page - 1) * rowsPerPage + 1,
    to: getLabelDisplayedRowsTo(),
    count: count === -1 ? -1 : count,
    page: page
  })), React.createElement(Styled.Amount, null, rowsPerPageOptions.length > 1 && React.createElement(Select, {
    style: {
      width: '95px',
      border: 'none',
      fontWeight: 500
    },
    background: Background.Secondary,
    value: "".concat(rowsPerPage, " / page"),
    onChange: onRowsPerPageChange
  }, perPageOption.map(function (rowsPerPageOption) {
    return React.createElement(MenuItem, {
      key: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption,
      value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
    }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption);
  })))), React.createElement(Styled.Section, null, React.createElement(Pagination, {
    page: Number(page),
    count: paginationCount,
    boundaryCount: 2,
    onChange: function onChange(event, value) {
      return onPageChange(event, value);
    }
  }), React.createElement(Input, {
    style: {
      width: '116px',
      paddingRight: '0px',
      marginLeft: '24px'
    },
    value: buttonValue,
    onChange: handleChange,
    background: Background.Primary
  }, React.createElement(Button, {
    size: Size.Sm,
    style: {
      paddingTop: '6.5px',
      paddingBottom: '6.5px',
      color: '#A9B6C2'
    },
    onClick: function onClick(ev) {
      return onPageChange(ev, buttonValue > paginationCount ? Number(paginationCount) : Number(buttonValue));
    }
  }, "Go To"))));
});
TablePagination.propTypes = {
  children: PT.node,
  page: PT.number.isRequired,
  count: PT.number.isRequired,
  rowsPerPage: PT.number,
  rowsPerPageOptions: PT.arrayOf(PT.number),
  onPageChange: PT.func.isRequired,
  onRowsPerPageChange: PT.func.isRequired
};
export default TablePagination;