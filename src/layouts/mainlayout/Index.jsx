import { Outlet } from "react-router-dom";
import styles from "./Index.module.css";
import Header from "@shared/header/Index.jsx";
import Footer from "@shared/footer/Index.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <p>Main Layout</p>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
