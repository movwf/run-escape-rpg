/**
 * Fetches offset value of an element
 * @param { Ref<ElementRef> } elementRef Element reference
 * @returns Offset object { top, left }
 */

export default function getPositionOffsets(elementRef) {
  return {
    top: elementRef.current.offsetTop,
    left: elementRef.current.offsetLeft,
  };
}
