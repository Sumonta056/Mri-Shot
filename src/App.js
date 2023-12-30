import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import Home from "./pages/Home/Home";
import { useEffect } from "react";

const PortRedirect = () => {
  useEffect(() => {
    // Redirect to the external website when the component mounts
    window.location.href = "https://sumonta056.github.io";
  }, []);

  // Return null or any content you want to render, or you can remove this function entirely
  return null;
};

const LinkRedirect = () => {
  useEffect(() => {
    // Redirect to the external website when the component mounts
    window.location.href =
      "https://www.linkedin.com/in/sumonta-saha-mridul-b35bb61a0/";
  }, []);

  // Return null or any content you want to render, or you can remove this function entirely
  return null;
};

const GitRedirect = () => {
  useEffect(() => {
    // Redirect to the external website when the component mounts
    window.location.href = "https://github.com/Sumonta056";
  }, []);

  // Return null or any content you want to render, or you can remove this function entirely
  return null;
};

const InstaRedirect = () => {
  useEffect(() => {
    // Redirect to the external website when the component mounts
    window.location.href = "https://www.instagram.com/_sumonta_saha_/";
  }, []);

  // Return null or any content you want to render, or you can remove this function entirely
  return null;
};

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="/portfolio" element={<PortRedirect />} />
      <Route path="/github" element={<GitRedirect />} />
      <Route path="/instagram" element={<InstaRedirect />} />
      <Route path="/linkedin" element={<LinkRedirect />} />
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
