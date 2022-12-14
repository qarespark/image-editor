/**
 * If your prop can be either a function or a plain value, this function handles
 * its usage for you – just provide the reference for a 'maybe function' and the arguments
 * to call it with
 */
export function applyPolymorphicFunctionProp(prop) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof prop === 'function' ? prop.apply(void 0, args) : prop;
}