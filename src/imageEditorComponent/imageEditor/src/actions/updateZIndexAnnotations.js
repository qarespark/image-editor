export const UPDATE_ZINDEX_ANNOTATIONS = 'UPDATE_ZINDEX_ANNOTATIONS';

const updateZIndexAnnotations = (state, payload) => {
  let { annotations } = state;
  let newAnnotations = {};

  if (state.designLayer && annotations[payload.id]) {
    let annotationsArray = (Object.entries(annotations).map((a) => ({ [a[0]]: a[1] })));
    let annotationIndex = annotationsArray.findIndex((a) => a[payload.id]);
    const annotationToMove = annotationsArray[annotationIndex];
    annotationsArray.splice(annotationIndex, 1);
    annotationsArray.push(annotationToMove);
    annotationsArray.map((a) => {
      newAnnotations = { ...newAnnotations, ...a };
    })
  }

  return {
    ...state,
    // not stored in state, used in reducer to consider in undo/redo stacks
    isDesignState: payload.isDesignState || true,
    annotations: newAnnotations,
  };
};

export default updateZIndexAnnotations;
