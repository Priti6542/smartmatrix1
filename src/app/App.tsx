import SiteLayout from "../components/layout/SiteLayout";

import AppProviders from "./providers";

const App = () => {
  return (
    <AppProviders>
      <SiteLayout />
    </AppProviders>
  );
};

export default App;
