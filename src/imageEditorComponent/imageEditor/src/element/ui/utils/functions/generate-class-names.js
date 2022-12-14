import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
export function generateClassNames(componentName, subClassNames) {
  var generateClassName = function generateClassName(subClassName) {
    return "respark_".concat(componentName).concat(subClassName ? "-".concat(subClassName) : '');
  };

  var classNameArray = [];

  if (subClassNames) {
    if (Array.isArray(subClassNames)) {
      classNameArray.push.apply(classNameArray, _toConsumableArray(subClassNames.filter(function (subClassName) {
        return typeof subClassName === 'string';
      }).map(function (subClassName) {
        return generateClassName(subClassName);
      })));
    } else if (typeof subClassNames === 'string') {
      classNameArray.push(generateClassName(subClassNames));
    }
  }

  if (classNameArray.length === 0) {
    classNameArray.push(generateClassName());
  }

  return classNameArray.join(' ');
}