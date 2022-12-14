function useDrag(onMove, onStart, onEnd) {
  var onDragging = function onDragging(e) {
    if (typeof onMove === 'function') {
      var _e$touches;

      onMove(((_e$touches = e.touches) === null || _e$touches === void 0 ? void 0 : _e$touches[0]) || e);
    }
  };

  var disableSliding = function disableSliding(e) {
    document.removeEventListener('mousemove', onDragging);
    document.removeEventListener('mouseup', disableSliding);
    document.removeEventListener('mouseleave', disableSliding);
    document.removeEventListener('touchmove', onDragging);
    document.removeEventListener('touchend', disableSliding);
    document.removeEventListener('touchcancel', disableSliding);

    if (typeof onEnd === 'function') {
      var _e$touches2;

      onEnd(((_e$touches2 = e.touches) === null || _e$touches2 === void 0 ? void 0 : _e$touches2[0]) || e);
    }
  };

  var enableDrag = function enableDrag(e) {
    document.addEventListener('mousemove', onDragging);
    document.addEventListener('mouseup', disableSliding);
    document.addEventListener('mouseleave', disableSliding);
    document.addEventListener('touchmove', onDragging);
    document.addEventListener('touchend', disableSliding);
    document.addEventListener('touchcancel', disableSliding);

    if (typeof onStart === 'function') {
      var _e$touches3;

      onStart(((_e$touches3 = e.touches) === null || _e$touches3 === void 0 ? void 0 : _e$touches3[0]) || e);
    }
  };

  return {
    onMouseDown: enableDrag,
    onTouchStart: enableDrag
  };
}

export default useDrag;