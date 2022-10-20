
import Custom from '../../../element/icons/custom';
import Ellipse from '../../../element/icons/ellipse';
import Landscape from '../../../element/icons/landscape';
import Portrait from '../../../element/icons/portrait';


import { CUSTOM_CROP, ELLIPSE_CROP, ORIGINAL_CROP } from '../../../utils/constants';
import toPrecisedFloat from '../../../utils/toPrecisedFloat';
function BiImage(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" strokeWidth="2" d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M6,9 C6.55228475,9 7,8.55228475 7,8 C7,7.44771525 6.55228475,7 6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 Z M23,15 L18,9 L12,16 L9,13 L1,21"></path></svg>;
}
export const DEFAULT_CROP_PRESETS = [
  {
    titleKey: 'original',
    ratio: ORIGINAL_CROP,
    icon: BiImage,
  },
  {
    titleKey: 'custom',
    ratio: CUSTOM_CROP,
    icon: Custom,
  },
  {
    titleKey: 'landscape',
    descriptionKey: '16:9',
    ratio: toPrecisedFloat(16 / 9),
    icon: Landscape,
  },
  {
    titleKey: 'portrait',
    descriptionKey: '9:16',
    ratio: toPrecisedFloat(9 / 16),
    icon: Portrait,
  },
  {
    titleKey: 'ellipse',
    ratio: ELLIPSE_CROP,
    icon: Ellipse,
  },
];
