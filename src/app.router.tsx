import { createHashRouter } from "react-router";
import GeneratorLayout from "./user/layouts/GeneratorLayout";
import HomePage from "./user/pages/home/HomePage";
import ErrorPage from "./user/pages/error/ErrorPage";
import GeneratorPage from "./user/pages/generator/GeneratorPage";
import MinutaGeneratedPage from "./user/pages/minuta/MinutaGeneratedPage";

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
            {
                path: 'informe',
                element: <GeneratorInformePage />
            }
        ],
    },

    {
        path: 'minuta',
        element: <MinutaGeneratedPage />,
        errorElement: <ErrorPage />,
    },
])