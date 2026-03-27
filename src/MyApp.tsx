import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

const MyApp = () => {
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    )
}

export default MyApp
