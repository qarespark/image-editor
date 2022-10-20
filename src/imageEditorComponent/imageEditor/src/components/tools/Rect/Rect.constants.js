
import RadiusCorner from '../../../element/icons/radius-corner';


import RectCornerField from './RectCornerField';

export const CORNER_RADIUS = 'corner-radius';

export const RECT_POPPABLE_OPTIONS = [
  {
    titleKey: 'cornerRadius',
    name: CORNER_RADIUS,
    Icon: RadiusCorner,
  },
];

export const rectOptionsPopupComponents = {
  [CORNER_RADIUS]: RectCornerField,
};
