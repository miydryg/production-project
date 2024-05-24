import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import AppRouter from './provider/router/ui/AppRouter';

function App() {
    const { themes } = useTheme();
    return (
        <div className={classNames('app', {}, [themes])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
