import _defineProperty from "@babel/runtime/helpers/defineProperty";

/**
 * If you are using a namespace for your styled components, this can come in handy giving each
 * styled component in this namespace a displayName which gives better debugging experience
 */
export function applyDisplayNames(styledObject) {
  return Object.keys(styledObject).reduce(function (newStyledObject, styledComponentName) {
    var styledComponent = styledObject[styledComponentName];
    styledComponent.displayName = "".concat(styledComponentName);
    return Object.assign(newStyledObject, _defineProperty({}, styledComponentName, styledComponent));
  }, {});
}