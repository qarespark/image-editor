
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../../element/ui/core/label';


import restrictNumber from '../../../../utils/restrictNumber';
import { StyledSpacedOptionFields } from '../../../../components/common/AnnotationOptions/AnnotationOptions.styled';
import Slider from '../../../../components/common/Slider';

const MIN_VALUE = 0;
const MAX_VALUE = 15;
const SLIDER_STEP = 1;

const TextSpacingsFields = ({
  annotation: text,
  updateAnnotation: updateText,
  t,
}) => {
  const { letterSpacing, lineHeight } = text;

  const updateValue = (prop, val) => {
    updateText({ [prop]: restrictNumber(val, MIN_VALUE, MAX_VALUE) });
  };

  return (
    <StyledSpacedOptionFields>
      <Label>{t('letterSpacing')}</Label>
      <Slider
        annotation="px"
        isActive={Boolean(letterSpacing)}
        onChange={(val) => updateValue('letterSpacing', val)}
        value={letterSpacing}
        step={SLIDER_STEP}
        min={MIN_VALUE}
        max={MAX_VALUE}
      />
      <Label>{t('lineHeight')}</Label>
      <Slider
        annotation="px"
        isActive={Boolean(lineHeight)}
        onChange={(val) => updateValue('lineHeight', val)}
        value={lineHeight}
        step={0.2}
        min={0}
        max={4}
      />
    </StyledSpacedOptionFields>
  );
};

TextSpacingsFields.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default TextSpacingsFields;
