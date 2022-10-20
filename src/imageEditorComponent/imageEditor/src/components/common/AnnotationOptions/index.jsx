
import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../element/ui/core/menu';
import Transparency from '../../../element/icons/transparency';
import Shadow from '../../../element/icons/shadow';
import Stroke from '../../../element/icons/stroke';
import Position from '../../../element/icons/position';


import { useStore } from '../../../hooks';
import OpacityField from './OpacityField';
import StrokeFields from './StrokeFields';
import ShadowFields from './ShadowFields';
import PositionFields from './PositionFields';
import {
  StyledOptionPopupContent,
  StyledOptions,
  StyledIconWrapper,
} from './AnnotationOptions.styled';
import { POPPABLE_OPTIONS } from './AnnotationOptions.constants';
import ColorInput from '../ColorInput';

const AnnotationOptions = ({
  children,
  morePoppableOptionsPrepended,
  moreOptionsPopupComponentsObj,
  morePoppableOptionsAppended,
  annotation,
  updateAnnotation,
  hideFillOption,
  hidePositionField,
  className,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOption, setCurrentOption] = useState(null);
  const {
    config: { useCloudimage },
    t,
  } = useStore();
  const options = useMemo(
    () => [
      ...morePoppableOptionsPrepended,
      {
        titleKey: 'opacity',
        name: POPPABLE_OPTIONS.OPACITY,
        Icon: Transparency,
      },
      ...(!useCloudimage
        ? [
          { titleKey: 'stroke', name: POPPABLE_OPTIONS.STROKE, Icon: Stroke },
          { titleKey: 'shadow', name: POPPABLE_OPTIONS.SHADOW, Icon: Shadow },
        ]
        : []),
      !hidePositionField
        ? {
          titleKey: 'position',
          name: POPPABLE_OPTIONS.POSITION,
          Icon: Position,
        }
        : undefined,
    ],
    [morePoppableOptionsPrepended],
  );

  const optionsPopups = useMemo(
    () => ({
      ...moreOptionsPopupComponentsObj,
      [POPPABLE_OPTIONS.OPACITY]: OpacityField,
      [POPPABLE_OPTIONS.STROKE]: StrokeFields,
      [POPPABLE_OPTIONS.SHADOW]: ShadowFields,
      [POPPABLE_OPTIONS.POSITION]: PositionFields,
      ...morePoppableOptionsAppended,
    }),
    [moreOptionsPopupComponentsObj],
  );

  const toggleOptionPopup = useCallback((e, targetOptionName) => {
    const targetAnchorEl = e?.currentTarget;
    setAnchorEl(targetAnchorEl);
    setCurrentOption(targetOptionName);
  }, []);

  const changeAnnotationFill = useCallback(
    (newFill) => {
      updateAnnotation({ fill: newFill });
    },
    [updateAnnotation],
  );

  const OptionPopupComponent =
    anchorEl && currentOption && optionsPopups[currentOption];

  return (
    <StyledOptions
      className={`respark_annotations-options${className ? ` ${className}` : ''}`}
    >
      {!hideFillOption && (
        <ColorInput color={annotation.fill} onChange={changeAnnotationFill} />
      )}
      {children}
      {options.map(
        (option) =>
          option && (
            <StyledIconWrapper
              className="respark_annotation-option-triggerer text-style-icon"
              key={option.name}
              title={t(option.titleKey)}
              onClick={(e) => toggleOptionPopup(e, option.name)}
            >
              <option.Icon size={18} />
            </StyledIconWrapper>
          ),
      )}
      {OptionPopupComponent && (
        <Menu
          className="respark_annotation-option-popup"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={toggleOptionPopup}
          position="top"
        >
          <StyledOptionPopupContent>
            <OptionPopupComponent
              annotation={annotation}
              updateAnnotation={updateAnnotation}
              {...rest}
            />
          </StyledOptionPopupContent>
        </Menu>
      )}
    </StyledOptions>
  );
};

AnnotationOptions.defaultProps = {
  children: undefined,
  morePoppableOptionsPrepended: [],
  moreOptionsPopupComponentsObj: {},
  morePoppableOptionsAppended: [],
  hideFillOption: false,
  hidePositionField: false,
  className: undefined,
};

AnnotationOptions.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
  children: PropTypes.node,
  hideFillOption: PropTypes.bool,
  morePoppableOptionsPrepended: PropTypes.arrayOf(PropTypes.object),
  morePoppableOptionsAppended: PropTypes.arrayOf(PropTypes.object),
  moreOptionsPopupComponentsObj: PropTypes.instanceOf(Object),
  hidePositionField: PropTypes.bool,
  className: PropTypes.string,
};

export default AnnotationOptions;
