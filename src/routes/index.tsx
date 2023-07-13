import { Route, Routes as RoutesDom } from "react-router-dom";
import HomePage from "../pages/Home";

const Routes = () => {
  return (
    <RoutesDom>
      <Route element={<HomePage />} path="/" />
    </RoutesDom>
  );
};

export default Routes;
