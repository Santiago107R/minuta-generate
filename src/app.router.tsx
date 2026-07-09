import { createHashRouter } from "react-router";
import GeneratorLayout from "./user/layouts/GeneratorLayout";
import HomePage from "./user/pages/home/HomePage";
import ErrorPage from "./user/pages/error/ErrorPage";
import GeneratorPage from "./user/pages/generator/GeneratorPage";
import MinutaGeneratedPage from "./user/pages/minuta/MinutaGeneratedPage";
import GeneratorInformePage from "./user/pages/generator_informe/GeneratorInformePage";
import InformeGeneratedPage from "./user/pages/informe/InformeGeneratedPage";

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
                path: 'generator-informe',
                element: <GeneratorInformePage />
            }
        ],
    },

    {
        path: 'minuta',
        element: <MinutaGeneratedPage />,
        errorElement: <ErrorPage />,
    },

    {
        path: 'informe',
        element: <InformeGeneratedPage />,
        errorElement: <ErrorPage />,
    }
])