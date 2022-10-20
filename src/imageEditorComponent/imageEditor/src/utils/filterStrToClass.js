
import Konva from '../../../konva';


import * as CustomFilters from '../custom/filters';

const filterStrToClass = (filterString) => {
  if (filterString) {
    return CustomFilters[filterString] || Konva.Filters[filterString];
  }

  return null;
};

export default filterStrToClass;
