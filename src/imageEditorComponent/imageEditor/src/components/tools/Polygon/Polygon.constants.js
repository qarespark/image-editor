
import PolygonSides from '../../../element/icons/polygon-sides';


import PolygonSidesField from './PolygonSidesField';

export const SIDES_NUMBER = 'sides-number';

export const POLYGON_POPPABLE_OPTIONS = [
  {
    titleKey: 'sides',
    name: SIDES_NUMBER,
    Icon: PolygonSides,
  },
];

export const polygonOptionsPopupComponents = {
  [SIDES_NUMBER]: PolygonSidesField,
};
