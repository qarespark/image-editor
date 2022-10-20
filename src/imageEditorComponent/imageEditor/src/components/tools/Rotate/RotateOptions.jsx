
import React from 'react';
import RotationSlider from '../../../element/ui/core/rotation-slider';


import { useDebouncedCallback, useStore } from '../../../hooks';
import { CHANGE_ROTATION, SET_RESIZE } from '../../../actions';
import restrictNumber from '../../../utils/restrictNumber';
import getSizeAfterRotation from '../../../utils/getSizeAfterRotation';
import { TOOLS_IDS } from '../../../utils/constants';
import ToolsBarItemButton from '../../../components/ToolsBar/ToolsBarItemButton';

function AiOutlineRotateLeft(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} t={1569683455503} viewBox="0 0 1024 1024" pId={10463} height="1em" width="1em" {...props}><defs /><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z" pId={10464} /><path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z" pId={10465} /></svg>;
}

function AiOutlineRotateRight(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} t={1569683458761} viewBox="0 0 1024 1024" pId={10582} height="1em" width="1em" {...props}><defs /><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" pId={10583} /><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z" pId={10584} /></svg>;
}

const RotateOptions = () => {
  const {
    dispatch,
    adjustments: { rotation = 0 },
    resize = {},
    config,
  } = useStore();
  const rotateConfig = config[TOOLS_IDS.ROTATE];

  const changeRotation = useDebouncedCallback((_e, newRotation) => {
    const rotationAngle = restrictNumber(newRotation, -180, 180);

    dispatch({
      type: CHANGE_ROTATION,
      payload: {
        rotation: rotationAngle,
      },
    });

    if (resize.width && resize.height) {
      const sizeAfterRotation = getSizeAfterRotation(
        resize.width,
        resize.height,
        rotationAngle,
      );
      dispatch({
        type: SET_RESIZE,
        payload: {
          width: sizeAfterRotation.width,
          height: sizeAfterRotation.height,
        },
      });
    }
  }, 20);

  const changeRotationButtonPositive = (e) => {
    const newAngle = rotation + rotateConfig.angle;
    changeRotation(e, newAngle);
  };
  const changeRotationButtonNegative = (e) => {
    const newAngle = rotation - rotateConfig.angle;
    changeRotation(e, newAngle);
  };

  if (rotateConfig.componentType === 'buttons') {
    return (
      <>
        <ToolsBarItemButton
          className="respark_rotate_button_left"
          id={TOOLS_IDS.IMAGE}
          label={`-${rotateConfig.angle}°`}
          Icon={AiOutlineRotateLeft}
          onClick={changeRotationButtonNegative}
        />
        <ToolsBarItemButton
          className="respark_rotate_button_right"
          id={TOOLS_IDS.IMAGE}
          label={`+${rotateConfig.angle}°`}
          Icon={AiOutlineRotateRight}
          onClick={changeRotationButtonPositive}
        />
      </>
    );
  }

  return (
    <RotationSlider
      className="respark_rotate-slider"
      min={-180}
      max={180}
      value={rotation}
      angle={rotateConfig.angle || 90}
      onChange={changeRotation}
      style={{ marginBottom: 20 }}
    />
  );
};

export default RotateOptions;
