
import React, { useCallback, useMemo, useState, useContext } from 'react';
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
import { EditorContext } from '../../../../../../imageEditorComponent'
import { TOOLS_IDS } from '../../../utils/constants';

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
  const { currentId, setCurrentId } = useContext(EditorContext);
  console.log(currentId)
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

  function BsTextareaT(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M14 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /><path fillRule="evenodd" d="M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v4h-1v-4A.5.5 0 0013 2H3a.5.5 0 00-.5.5v4h-1v-4zm1 7v4a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-4h1v4A1.5 1.5 0 0113 15H3a1.5 1.5 0 01-1.5-1.5v-4h1z" clipRule="evenodd" /><path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" /></svg>;
  }
  return (
    <StyledOptions
      className={`respark_annotations-options${className ? ` ${className}` : ''}`}
    >

      {!hideFillOption && <>
        <div onClick={() => setCurrentId(TOOLS_IDS.TEXT)}>
          {/* <BsTextareaT /> */}Text Styles
        </div>
        <ColorInput color={annotation.fill} onChange={changeAnnotationFill} />
      </>
      }
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
