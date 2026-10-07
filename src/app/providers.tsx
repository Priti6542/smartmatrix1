import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

export interface AppProvidersProps {
  children: ReactNode;
}

/** Everything the whole tree needs: routing context and parallax context. */
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BrowserRouter>
      <ParallaxProvider>{children}</ParallaxProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
