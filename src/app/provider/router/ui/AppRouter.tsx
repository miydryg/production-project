import path from "path";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouteConfig).map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
