
import Konva from '../../../konva';


import * as CustomFinetunes from '../custom/finetunes';

const finetunesStrsToClasses = (finetunesStrings) => {
  if (Array.isArray(finetunesStrings) && finetunesStrings.length > 0) {
    return finetunesStrings.map(
      (finetuneClassName) =>
        Konva.Filters[finetuneClassName] || CustomFinetunes[finetuneClassName],
    );
  }

  return [];
};

export default finetunesStrsToClasses;
