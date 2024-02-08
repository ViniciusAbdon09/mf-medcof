import React, { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { Loading } from "../components/Loading";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
        </Routes>
    )
}