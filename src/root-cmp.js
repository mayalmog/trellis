import { Routes, Route } from "react-router";
import routes from "./routes";

export const RootCmp = () => {
  return (
    <section className="root-cmp">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact
            element={route.element}
            path={route.path}
          />
        ))}
      </Routes>
    </section>
  );
};
