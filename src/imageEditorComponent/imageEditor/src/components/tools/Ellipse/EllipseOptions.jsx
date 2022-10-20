
import React from 'react';
import PropTypes from 'prop-types';


import { useAnnotation } from '../../../hooks';
import { TOOLS_IDS } from '../../../utils/constants';
import AnnotationOptions from '../../../components/common/AnnotationOptions';

const EllipseOptions = ({ t }) => {
  const [ellipse, saveEllipse] = useAnnotation({
    name: TOOLS_IDS.ELLIPSE,
  });

  return (
    <AnnotationOptions
      className="respark_ellipse-tool-options"
      annotation={ellipse}
      updateAnnotation={saveEllipse}
      t={t}
    />
  );
};

EllipseOptions.propTypes = {
  t: PropTypes.func.isRequired,
};
export default EllipseOptions;
