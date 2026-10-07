import { useScrollToTop } from "../../hooks/useScrollToTop";

/** Renders nothing; resets the scroll position on every navigation. */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;
