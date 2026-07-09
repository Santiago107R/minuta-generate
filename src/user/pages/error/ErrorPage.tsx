import { Button } from "@base-ui/react/button";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
    const error = useRouteError() as any;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">¡Ups! Algo salió mal</h1>
            <p className="text-muted-foreground mb-8">
                {error?.statusText || error?.message || "No pudimos encontrar la página que buscabas."}
            </p>
            <Link to="/">
                <Button>Volver al inicio</Button>
            </Link>
        </main>
    );
};

export default ErrorPage