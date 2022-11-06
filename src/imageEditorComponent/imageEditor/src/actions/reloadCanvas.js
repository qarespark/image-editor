import { TABS_TOOLS } from '../components/tools/tools.constants';
import { POINTER_ICONS, TABS_IDS } from '../utils/constants';

export const RELOAD_CANVAS = 'RELOAD_CANVAS';

const reloadCanvas = (state, payload) => {
  return {
    ...state,
    reloadCanvas: payload.reload
  };
};

export default reloadCanvas;
