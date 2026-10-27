import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export interface AppProvidersProps {
  children: ReactNode;
}

/** Everything the whole tree needs: routing context. */
const AppProviders = ({ children }: AppProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;
