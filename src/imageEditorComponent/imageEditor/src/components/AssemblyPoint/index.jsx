
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ThemeProvider from '../../element/ui/theme';
import ThemeProvider from '../../element/ui/theme';


import App from '../App';
import { AppProvider } from '../../context';
import defaultConfig from '../../context/defaultConfig';
import deepMerge from '../../utils/deepMerge';
import { FontsFaces, OverrideDefaultStyles } from './globalStyles';

const AssemblyPoint = (props) => {
  useEffect(() => {
    console.log('inside app', props)
  }, [props])

  const { source } = props;
  if (
    !source ||
    (typeof source !== 'string' && !(source instanceof HTMLImageElement))
  ) {
    throw new Error(
      '`source` property is required either a string of image url or a HTMLImageElement for the image that will be edited.',
    );
  }

  const initialProps = {

  }
  const defaultAndProvidedConfigMerged = deepMerge(defaultConfig, props);

  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultAndProvidedConfigMerged.theme}>
        <FontsFaces />
        <OverrideDefaultStyles />
        <AppProvider config={defaultAndProvidedConfigMerged}>
          <App />
        </AppProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

AssemblyPoint.defaultProps = {
  useCloudimage: false,
  cloudimage: {},
  // TODO: Remove this property from here after PROD. release
  img: undefined,
};

AssemblyPoint.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(HTMLImageElement),
    PropTypes.instanceOf(SVGImageElement),
    PropTypes.instanceOf(ImageBitmap),
  ]).isRequired,
  // TODO: Remove this property from here after PROD. release
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(HTMLImageElement),
    PropTypes.instanceOf(SVGImageElement),
    PropTypes.instanceOf(ImageBitmap),
  ]),
  useCloudimage: PropTypes.bool,
  cloudimage: PropTypes.instanceOf(Object),
};

export default memo(AssemblyPoint);
