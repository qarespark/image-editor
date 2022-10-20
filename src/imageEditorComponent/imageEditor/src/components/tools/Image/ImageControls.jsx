
import React from 'react';
import PropTypes from 'prop-types';


import AnnotationOptions from '../../../components/common/AnnotationOptions';

const ImageControls = ({ image, saveImage, children, t }) => (
  <AnnotationOptions
    className="respark_image-tool-options"
    annotation={image}
    updateAnnotation={saveImage}
    t={t}
    hideFillOption
  >
    {children}
  </AnnotationOptions>
);

ImageControls.defaultProps = {
  children: null,
};

ImageControls.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  saveImage: PropTypes.func.isRequired,
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
};

export default ImageControls;
