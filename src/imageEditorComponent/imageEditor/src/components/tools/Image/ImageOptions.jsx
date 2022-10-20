
import React, { useRef, useState } from 'react';
import Button from '../../../element/ui/core/button';
import graphicsImages from '../../../../../graphics';
import Dialog from '@mui/material/Dialog';


import { useAnnotation, useStore } from '../../../hooks';
import { FEEDBACK_STATUSES, TOOLS_IDS } from '../../../utils/constants';
import { SET_FEEDBACK } from '../../../actions';
import HiddenUploadInput from '../../../components/common/HiddenUploadInput';
import ImageControls from './ImageControls';
import { Backdrop } from '@mui/material';
function AiOutlineCloseCircle(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>;
}
function RiExchangeLine(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z" /></g></svg>;
}
function RiImageAddFill(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></g></svg>;
}

function IoMdCloseCircleOutline(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"></path></g></svg>;
}
const ADDED_IMG_SPACING_PERCENT = 0.15;

const ImageOptions = () => {
  const [isLoading, setIsLoading] = useState();
  const [showImagesModal, setShowImagesModal] = useState(false)
  const uploadImgsInput = useRef();
  const [selectedImage, setSelectedImage] = useState('')
  const modalRef = useRef(null);
  const requestedImgsCount = useRef(0);
  const [activeBgImgCategory, setActiveBgImgCategory] = useState('All');

  const {
    shownImageDimensions,
    dispatch,
    adjustments: { crop = {} },
    t,
  } = useStore();

  const [image, saveImage, addNewImage] = useAnnotation(
    {
      name: TOOLS_IDS.IMAGE,
      opacity: 1,
    },
    false,
  );

  const addImgScaled = (loadedImg) => {
    const layerWidth = crop.width || shownImageDimensions.width;
    const layerHeight = crop.height || shownImageDimensions.height;
    const layerCropX = crop.x || 0;
    const layerCropY = crop.y || 0;

    const newImgRatio = Math.min(
      1,
      layerWidth /
      (loadedImg.width + loadedImg.width * ADDED_IMG_SPACING_PERCENT),
      layerHeight /
      (loadedImg.height + loadedImg.height * ADDED_IMG_SPACING_PERCENT),
    );

    addNewImage({
      image: loadedImg,
      x: layerCropX + layerWidth / 2 - (loadedImg.width * newImgRatio) / 2,
      y: layerCropY + layerHeight / 2 - (loadedImg.height * newImgRatio) / 2,
      width: loadedImg.width * newImgRatio,
      height: loadedImg.height * newImgRatio,
    });
  };

  const hideLoaderAfterDone = (filesLength) => {
    requestedImgsCount.current += 1;
    if (requestedImgsCount.current === filesLength) {
      requestedImgsCount.current = 0;
      setIsLoading(false);
    }
  };

  const setFeedback = (msg) => {
    dispatch({
      type: SET_FEEDBACK,
      payload: {
        feedback: {
          message: msg,
          status: FEEDBACK_STATUSES.WARNING,
        },
      },
    });
  };

  const importImages = (e) => {
    if (e.target.files) {
      setIsLoading(true);
      setShowImagesModal(false);
      const wrongFilesNames = [];
      const filesArray = Array.from(e.target.files);
      const filesLength = filesArray.length;
      filesArray.forEach((file) => {
        if (file.type.startsWith('image/')) {
          const img = new Image();
          img.onload = () => {
            addImgScaled(img);
            URL.revokeObjectURL(file);
            hideLoaderAfterDone(filesLength);
          };
          img.onerror = () => {
            setFeedback(t('uploadImageError'));
            hideLoaderAfterDone(filesLength);
          };
          img.src = URL.createObjectURL(file);
        } else {
          wrongFilesNames.push(file.name);
          hideLoaderAfterDone(filesLength);
        }
      });

      if (wrongFilesNames.length > 0) {
        const errorLabel =
          wrongFilesNames.length > 1 ? t('areNotImages') : t('isNotImage');
        setFeedback(
          `${wrongFilesNames.join(', ')} ${errorLabel} ${t('toBeUploaded')}.`,
        );
      }
    }

    e.target.value = '';
  };

  const triggerUploadInput = () => {
    if (uploadImgsInput.current) {
      uploadImgsInput.current.click();
    }
  };

  const onSelectImage = (image) => {
    const img = new Image();
    img.src = image;
    addImgScaled(img);
    setShowImagesModal(false);
  }
  const onOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowImagesModal(false);
    }
  }

  return (
    <>
      <ImageControls image={image} saveImage={saveImage} t={t}>
        <Button
          className="respark_image-tool-add-option"
          color="secondary"
          onClick={() => isLoading ? undefined : setShowImagesModal(true)}
          disabled={isLoading}
          size="sm"
          style={{ maxHeight: 24 }}
        >
          {isLoading ? t('importing') : t('addImage')}
        </Button>
        <HiddenUploadInput
          ref={uploadImgsInput}
          onChange={isLoading ? undefined : importImages}
          disabled={isLoading}
          multiple
        />
      </ImageControls>
      <Dialog
        open={showImagesModal}
        keepMounted
        onClick={onOutsideClick}
        onClose={() => setShowImagesModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className='backdrop-modal-wrapper graphics-images-modal'>
          <div className="backdrop-modal-content d-f-c graphics-images-content" style={{ height: `${showImagesModal ? '70vh' : '0'}` }} ref={modalRef}>
            <div className="heading-wrap">
              <div className="heading">Select graphics image</div>
              <div className="modal-close" onClick={() => setShowImagesModal(false)}><AiOutlineCloseCircle /></div>
            </div>

            <div className="modal-containt">
              <div className="category-image-wrap">
                <div className="cat-list-wrap">
                  <div className={`category ${activeBgImgCategory == 'All' ? "active" : ""}`} onClick={() => setActiveBgImgCategory('All')}>All</div>
                  {Object.keys(graphicsImages)?.map((imageCategory) => {
                    return <div className={`category ${activeBgImgCategory == imageCategory ? "active" : ""}`} key={Math.random()} onClick={() => setActiveBgImgCategory(imageCategory)}>{imageCategory}</div>
                  })}
                </div>
                {activeBgImgCategory == 'All' ? <>
                  <div className="all">
                    {Object.keys(graphicsImages)?.map((imageCategory) => {
                      return <div className="image-category-wrap" key={Math.random()}>
                        <div className="bg-images-list-wrap">
                          {graphicsImages[imageCategory]?.map((image) => {
                            return <div className={`img-wrap ${selectedImage == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectImage(image)}>
                              <img src={image} />
                            </div>
                          })}
                        </div>
                      </div>
                    })}
                  </div>
                </> : <>
                  <div className="image-category-wrap">
                    <div className="bg-images-list-wrap">
                      {graphicsImages[activeBgImgCategory]?.map((image) => {
                        return <div className={`img-wrap ${selectedImage == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectImage(image)}>
                          <img src={image} />
                        </div>
                      })}
                    </div>
                  </div>
                </>}
              </div>
            </div>

            <div className='btn-wrap'>
              <div className='btn' onClick={() => onSelectImage(null)}>Cancel <IoMdCloseCircleOutline /></div>
              <div className="btn" onClick={triggerUploadInput}>Upload from your computer <RiImageAddFill /></div>
              {/* <div className='btn' onClick={() => onSelectImage(selectedImage)}>Add graphics <RiExchangeLine /></div> */}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ImageOptions;
