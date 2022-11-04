
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Popper from '../../../element/ui/core/popper';
import * as  lc_color_picker from './lc_color_picker'

import { useStore } from '../../../hooks';
import { SET_LATEST_COLOR } from '../../../actions';
import { StyledColorPicker, StyledPickerTrigger } from './ColorInput.styled';

const pinnedColorsKey = 'respark_pinnedColors';

const ColorInput = ({ position = 'top', onChange, color }) => {
  const {
    selectionsIds = [],
    config: { annotationsCommon = {} },
    dispatch,
    latestColor,
  } = useStore();
  const [anchorEl, setAnchorEl] = useState();
  const [currentColor, setCurrentColor] = useState(() => latestColor || color || annotationsCommon.fill);
  const [pinnedColors, setPinnedColors] = useState(window?.localStorage ? JSON.parse(localStorage.getItem(pinnedColorsKey) || '[]') : [],);

  const changePinnedColors = (newPinnedColors) => {
    if (!window?.localStorage) {
      return;
    }
    const localStoragePinnedColors = window.localStorage.getItem(pinnedColorsKey);
    if (JSON.stringify(newPinnedColors) !== localStoragePinnedColors) {
      const maxOfSavedColors = 9;
      const pinnedColorsToSave = newPinnedColors.slice(-maxOfSavedColors);
      window.localStorage.setItem(pinnedColorsKey, JSON.stringify(pinnedColorsToSave),);
      setPinnedColors(pinnedColorsToSave);
    }
  };

  const changeColor = (_newColorHex, rgba, newPinnedColors) => {
    // rgba = 'radial-gradient(ellipse, rgba(238,27,27,0.4) 0%, #000000 100%)';
    setCurrentColor(rgba);
    onChange(rgba);
    newPinnedColors && changePinnedColors(newPinnedColors);

    if (latestColor !== rgba) {
      dispatch({
        type: SET_LATEST_COLOR,
        payload: {
          latestColor: rgba,
        },
      });
    }
  };

  const togglePicker = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  useEffect(() => {
    const colorToSet = (selectionsIds.length === 0 && latestColor) || color;
    setCurrentColor(colorToSet);
    onChange(colorToSet);
  }, [color, selectionsIds]);

  // useEffect(() => {
  //   window.lc_color_picker('input[name=full]', {
  //     transparency: true,
  //     open_on_focus: true,
  //     wrap_width: '100%',
  //     preview_style: {
  //       input_padding: 45,
  //       side: 'left',
  //       width: 40,
  //     },
  //     fallback_colors: ['#ff0', 'linear-gradient(90deg, rgba(255, 255, 255, .4), #000)'],

  //     on_change: function (new_value, target_field) {
  //       console.log(new_value, target_field);
  //       setCurrentColor(new_value);
  //       dispatch({
  //         type: SET_LATEST_COLOR,
  //         payload: {
  //           latestColor: new_value,
  //         },
  //       });
  //     },
  //   });
  // }, [])

  const oneywPickerClick = () => {
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((result) => {
      console.log(result);
      changeColor('', result.sRGBHex, null);
    }).catch((e) => {
      console.log(e)
    });
  }

  return (
    <>
      <script src="./lc_color_picker"></script>
      <StyledPickerTrigger
        className="respark_color-picker-triggerer"
        onClick={togglePicker}
        $color={currentColor}
        onChange={onChange}
      />
      {anchorEl && <Popper
        className="respark_color-picker"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        position={position}
        onClick={togglePicker}
        overlay
        zIndex={11111}
      >
        <StyledColorPicker
          onChange={changeColor}
          defaultColor={currentColor}
          pinnedColors={pinnedColors}
          showTransparentColor
        />
        {/* {window.EyeDropper && <button id="start-button" onClick={oneywPickerClick}>Open the eyedropper</button>} */}
      </Popper>}
      {/* <input type="text" name="full" value="linear-gradient(90deg, rgba(255, 255, 255, .4), #000)" /> */}
    </>
  );
};

ColorInput.defaultProps = {
  position: 'top',
  color: undefined,
};

ColorInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  position: PropTypes.string,
  color: PropTypes.string,
};

export default ColorInput;
