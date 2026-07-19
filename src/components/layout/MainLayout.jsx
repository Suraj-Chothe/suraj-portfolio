import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../sections/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;