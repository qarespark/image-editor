import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState, useMemo } from 'react';
import PT from 'prop-types';
import { QuestionMarkOutline } from '../../../icons';
import SpinnerIcon from '../../../icons/spinner';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import Tag from '../tag';
import Label from '../label';
import FormHint from '../form-hint';
import { propTypes as labelPropTypes } from '../label/label.component';
import { AddTagType, Background } from './types';
import { tagsSuggestionsFilter } from './tag-field.utils';
import Styled from './tag-field.styles';
var _excluded = ["suggestedTags", "tags", "onAdd", "onRemove", "fullWidth", "placeholder", "disabled", "readOnly", "label", "suggestionLabel", "LabelProps", "error", "hint", "loading", "background", "getTagLabel", "getTagValue", "suggestionsFilter"];
var TagField = intrinsicComponent(function (_ref, ref
) {
  var _ref$suggestedTags = _ref.suggestedTags,
    suggestedTags = _ref$suggestedTags === void 0 ? [] : _ref$suggestedTags,
    _ref$tags = _ref.tags,
    tags = _ref$tags === void 0 ? [] : _ref$tags,
    onAdd = _ref.onAdd,
    onRemove = _ref.onRemove,
    fullWidth = _ref.fullWidth,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    label = _ref.label,
    suggestionLabel = _ref.suggestionLabel,
    LabelPropsData = _ref.LabelProps,
    error = _ref.error,
    hint = _ref.hint,
    loading = _ref.loading,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'primary' : _ref$background,
    _ref$getTagLabel = _ref.getTagLabel,
    getTagLabel = _ref$getTagLabel === void 0 ? function (tag) {
      return tag;
    } : _ref$getTagLabel,
    _ref$getTagValue = _ref.getTagValue,
    getTagValue = _ref$getTagValue === void 0 ? function (tag) {
      return tag;
    } : _ref$getTagValue,
    _ref$suggestionsFilte = _ref.suggestionsFilter,
    suggestionsFilter = _ref$suggestionsFilte === void 0 ? tagsSuggestionsFilter : _ref$suggestionsFilte,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    userInput = _useState2[0],
    setUserInput = _useState2[1];

  var filteredTags = useMemo(function () {
    return tags.filter(function (tag) {
      return tag;
    });
  }, [tags]);
  var existingLabels = useMemo(function () {
    return filteredTags.map(function (tag) {
      return getTagLabel(tag).toLowerCase();
    });
  }, [filteredTags]);
  var filteredSuggestions = useMemo(function () {
    var filteredItems = suggestedTags.filter(function (suggestion) {
      return !existingLabels.includes(getTagLabel(suggestion).toLowerCase());
    });
    return suggestionsFilter(filteredItems, userInput, getTagLabel);
  }, [userInput, suggestedTags, existingLabels, suggestionsFilter]);

  var handleTagAdd = function handleTagAdd(item, type) {
    if (!item) return;
    var tagLabel = type === AddTagType.UserInput ? item : getTagLabel(item);

    if (!filteredTags.some(function (tag) {
      return getTagLabel(tag).toLowerCase() === tagLabel.toLowerCase();
    })) {
      onAdd(item, type);
    }
  };

  var handleUserInputKeyDown = function handleUserInputKeyDown(event) {
    if (event.key === 'Enter' && userInput) {
      event.preventDefault();
      handleTagAdd(userInput, AddTagType.UserInput);
      setUserInput('');
    } else if (event.key === 'Backspace' && !userInput) {
      var index = filteredTags.length - 1;
      onRemove(index, getTagValue(filteredTags[index]));
    }
  };

  return React.createElement(Styled.TagFieldRoot, {
    ref: ref
  }, label && React.createElement(Label, _extends({
    error: error
  }, LabelPropsData || {}), label), React.createElement(Styled.TagFieldWrapper, _extends({
    fullWidth: Boolean(fullWidth),
    background: background
  }, rest), React.createElement(Styled.TagFieldListWrapper, {
    $loading: loading
  }, filteredTags.map(function (tag, index) {
    return React.createElement(Tag, {
      key: getTagValue(tag),
      tagIndex: index,
      onRemove: disabled || readOnly || loading ? undefined : function () {
        return onRemove(index, getTagValue(tag));
      },
      style: {
        margin: '4px 4px 4px 0'
      }
    }, getTagLabel(tag));
  }), loading ? React.createElement(Styled.TagFieldLoader, null, React.createElement(SpinnerIcon, {
    size: 16,
    color: "#768184"
  })) : React.createElement(Styled.TagFieldInputWrapper, null, React.createElement(Styled.TagFieldInput, {
    value: userInput,
    type: "text",
    autoComplete: "off",
    placeholder: placeholder,
    onChange: function onChange(ev) {
      return setUserInput(ev.target.value);
    },
    onKeyDown: handleUserInputKeyDown,
    readOnly: readOnly,
    disabled: disabled
  })))), hint && React.createElement(FormHint, {
    error: error
  }, hint), filteredSuggestions.length > 0 && React.createElement(Styled.TagFieldSuggestionWrapper, null, React.createElement(Styled.TagFieldSuggestionLabel, null, React.createElement(Styled.TagFieldSuggestionIcon, null, React.createElement(QuestionMarkOutline, {
    size: 12,
    color: "#778285"
  })), suggestionLabel || React.createElement("span", null, "Suggested Tags")), React.createElement(Styled.TagFieldSuggestionWrapperList, null, filteredSuggestions.map(function (suggestion) {
    return React.createElement(Tag, {
      key: getTagValue(suggestion),
      type: "suggested",
      onSelect: function onSelect() {
        handleTagAdd(suggestion, AddTagType.Suggestion);
        setUserInput('');
      },
      style: {
        margin: '0 8px 8px 0'
      }
    }, getTagLabel(suggestion));
  }))));
});
TagField.defaultProps = {
  tags: [],
  suggestedTags: [],
  fullWidth: false,
  placeholder: 'Add a tag (separate by pressing enter)',
  disabled: false,
  readOnly: false,
  background: Background.Primary
};
TagField.propTypes = {
  tags: PT.arrayOf(PT.oneOfType([PT.string, PT.object])).isRequired,
  suggestedTags: PT.arrayOf(PT.oneOfType([PT.string, PT.object])),
  LabelProps: PT.exact(labelPropTypes),
  onAdd: PT.func.isRequired,
  onRemove: PT.func.isRequired,
  fullWidth: PT.bool,
  placeholder: PT.string,
  readOnly: PT.bool,
  disabled: PT.bool,
  label: PT.node,
  error: PT.bool,
  hint: PT.node,
  loading: PT.bool,
  getTagValue: PT.func,
  getTagLabel: PT.func,
  suggestionsFilter: PT.func,
  background: PT.oneOf(objectValues(Background)),
  suggestionLabel: PT.node
};
export default TagField;