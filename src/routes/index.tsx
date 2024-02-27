import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../page/Home";
import { Result } from "../page/Result";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </RouteLib>
  );
};
