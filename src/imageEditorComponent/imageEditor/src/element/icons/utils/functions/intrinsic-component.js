import { forwardRef } from 'react';

/**
 * Wrapper around React's `forwardRef` function, which adds a `displayName` to each component
 * created using it
 */
export function intrinsicComponent(render, displayName) {
  var component = forwardRef(render);

  component.displayName = displayName || render.name;
  return component;
}