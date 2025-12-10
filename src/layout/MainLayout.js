import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "../styles/MainLayout.css"

const MainLayout = () => {
  return (
    <div id="main-layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
