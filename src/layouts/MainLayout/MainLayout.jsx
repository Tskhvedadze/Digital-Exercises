import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
