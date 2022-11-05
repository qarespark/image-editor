
import { useMemo, useCallback, useContext } from 'react';
import { SET_ANNOTATION, SELECT_ANNOTATION } from '../actions';
import { UPDATE_ZINDEX_ANNOTATIONS } from '../actions/updateZIndexAnnotations';
import { TABS_TOOLS } from '../components/tools/tools.constants';
import { TOOLS_IDS, TABS_IDS, WATERMARK_ANNOTATION_ID } from '../utils/constants';
import { EditorContext } from '../../../index'
import useStore from './useStore';

const useAnnotationEvents = () => {
  const { tabId, dispatch } = useStore();
  const { setCurrentTab } = useContext(EditorContext);

  const isAnnotationEventsDisabled = useMemo(
    () => false,
    [tabId],
  );

  const updateAnnotation = useCallback((annotationProps) => {
    dispatch({
      type: SET_ANNOTATION,
      payload: annotationProps,
    });
  }, []);

  const updatePositionOnDragEnd = useCallback((e) => {
    updateAnnotation({
      id: e.target.id(),
      x: e.target.x(),
      y: e.target.y(),
    });
  }, []);

  const updateZindexOnDragStart = useCallback((e) => {
    dispatch({
      type: UPDATE_ZINDEX_ANNOTATIONS,
      payload: { id: e.target.id() },
    });
  }, []);

  const getAnnotationTransformProps = useCallback((e) => {
    const transformProps = {
      id: e.target.id(),
      rotation: e.target.rotation(),
      x: e.target.x(),
      y: e.target.y(),
    };

    if (e.target.name() === TOOLS_IDS.TEXT) {
      transformProps.width = e.target.width() * e.target.scaleX();
      transformProps.height = e.target.height() * e.target.scaleY();
      transformProps.scaleX = 1;
      transformProps.scaleY = 1;
    } else {
      transformProps.scaleX = e.target.scaleX();
      transformProps.scaleY = e.target.scaleY();
    }

    return transformProps;
  }, []);

  const updateAnnotationTransform = useCallback((e) => {
    updateAnnotation(getAnnotationTransformProps(e));
  }, []);

  const updateTextAnnotationOnTransform = useCallback((e) => {
    if (e.target.name() === TOOLS_IDS.TEXT) {
      e.target.setAttrs(getAnnotationTransformProps(e));
    }
  });

  const selectAnnotationOnClick = useCallback((e) => {
    if (e.target.id() === WATERMARK_ANNOTATION_ID) {
      return;
    }
    const multiple = e.evt.ctrlKey || e.evt.shiftKey || e.evt.metaKey;
    let index = TABS_TOOLS[TABS_IDS.ANNOTATE].findIndex((t) => t == e.target.constructor.name);
    if (index != -1) {
      dispatch({
        type: 'SELECT_TAB',
        payload: {
          tabId: TABS_IDS.ANNOTATE,
        },
      });
    }
    dispatch({
      type: SELECT_ANNOTATION,
      payload: {
        annotationId: e.target.id(),
        multiple,
      },
    });
    // TODO: Remove this once we implement the possibility to select annotation
    // while any annotation tool is opened without changing the tool.
    // dispatch({
    //   type: SELECT_TOOL,
    //   payload: {
    //     toolId: e.target.name(),
    //     keepSelections: multiple,
    //   },
    // });
  }, []);

  return useMemo(
    () =>
      isAnnotationEventsDisabled
        ? {}
        : {
          onTransform: updateTextAnnotationOnTransform,
          onTransformEnd: updateAnnotationTransform,
          onDragEnd: updatePositionOnDragEnd,
          onClick: selectAnnotationOnClick,
          onTap: selectAnnotationOnClick,
          onDragStart: updateZindexOnDragStart,
        },
    [isAnnotationEventsDisabled],
  );
};

export default useAnnotationEvents;
