import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const HomePage = () => {
    return (
        <div>
            <main className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">

                <div className="max-w-2xl space-y-4 mb-10">

                    <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
                        ¡Bienvenido a Minuta Generator!
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
                        Transforma tus reuniones en documentos profesionales en segundos. Completa el formulario, organiza los puntos clave y descarga tu minuta en PDF lista para compartir.
                    </p>
                </div>

                <Link to={'/generator'}>
                    <Button
                        size="lg"
                        className="px-10 mb-4 font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-white shadow-lg transition-all"
                    >
                        Empezar Minuta
                    </Button>
                </Link>

                <Link to={'/generator-informe'}>
                    <Button
                        size="lg"
                        className="px-10 font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700 text-white shadow-lg transition-all"
                    >
                        Empezar Informe Semanal
                    </Button>
                </Link>
            </main>
        </div>
    )
}

export default HomePage
