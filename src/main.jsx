import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  FeaturePage,
  AddAppliancesPage,
  ViewAppLiancesPage,
} from "./pages/index";
import Outlet from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/feature" element={<FeaturePage />} />
      <Route path="/add-appliances" element={<AddAppliancesPage />} />
      <Route path="/view-appliances" element={<ViewAppLiancesPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
