import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
import * as React from 'react';
export default function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref["default"];

  // isControlled is ignored in the hook dependency lists as it should never change.
  var _React$useRef = React.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = React.useState(defaultProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      valueState = _React$useState2[0],
      setValue = _React$useState2[1];

  var value = isControlled ? controlled : valueState;
  var setValueIfUncontrolled = React.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}