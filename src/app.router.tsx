import { createHashRouter } from "react-router";
import GeneratorLayout from "./generator/layouts/GeneratorLayout";
import HomePage from "./generator/pages/home/HomePage";
import ErrorPage from "./generator/pages/error/ErrorPage";
import GeneratorPage from "./generator/pages/generator/GeneratorPage";
import MinutaGeneratedPage from "./generator/pages/minuta/MinutaGeneratedPage";

export const appRouter = createHashRouter([
    {
        path: '/',
        element: <GeneratorLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'generator',
                element: <GeneratorPage />,
            },
        ],
    },

    {
        path: 'minuta',
        element: <MinutaGeneratedPage />,
        errorElement: <ErrorPage />,
    },
])