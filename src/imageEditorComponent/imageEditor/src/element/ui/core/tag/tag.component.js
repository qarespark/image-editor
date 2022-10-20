import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PT from 'prop-types';
import CrossIcon from '../../../icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Size, Type } from './types';
import Styled from './tag.styles';
var _excluded = ["children", "type", "size", "tagIndex", "onRemove", "contentEditable", "suppressContentEditableWarning"];
var Tag = intrinsicComponent(function (_ref, ref) {
  var children = _ref.children,
    type = _ref.type,
    size = _ref.size,
    tagIndex = _ref.tagIndex,
    onRemove = _ref.onRemove,
    contentEditable = _ref.contentEditable,
    suppressContentEditableWarning = _ref.suppressContentEditableWarning,
    rest = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(Styled.Tag, _extends({
    ref: ref,
    size: size,
    type: type
  }, rest, {
    hasRemoveHandler: typeof onRemove === 'function',
    onClick: type === Type.Suggested ? function (event) {
      if (typeof rest.onSelect === 'function') {
        rest.onSelect(event);
      }

      if (typeof rest.onClick === 'function') {
        rest.onClick(event);
      }
    } : rest.onClick
  }), React.createElement(Styled.Label, {
    contentEditable: contentEditable,
    suppressContentEditableWarning: suppressContentEditableWarning
  }, children), React.createElement(Styled.Cross, null, React.createElement(CrossIcon, {
    size: 6,
    onClick: function onClick() {
      if (typeof onRemove === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onRemove(tagIndex);
      }
    }
  })));
});
Tag.defaultProps = {
  size: Size.Md,
  type: Type.Default
};
Tag.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  type: PT.oneOf(objectValues(Type)),
  onRemove: PT.func,
  onSelect: PT.func,
  tagIndex: PT.number
};
export default Tag;