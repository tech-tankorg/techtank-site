export const scrollToElement = (
  element: HTMLElement,
  options?: {
    behavior?: ScrollBehavior;
    topOffset?: number;
  }
) => {
  // NB: scrollIntoView apparently ignores all margins and scrolls to the most immediately available element with content
  const behavior = options?.behavior ?? "smooth";
  const topOffset = options?.topOffset ?? 65;
  const topPosition =
    element.getBoundingClientRect().top + window.scrollY - topOffset;
  window.scrollTo({ top: topPosition, behavior });
};
