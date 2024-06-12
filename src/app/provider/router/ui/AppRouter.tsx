import path from 'path';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
