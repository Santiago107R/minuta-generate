import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme-provider'
import { Button } from '../ui/button'
import { Link } from 'react-router';

interface Props {
    title: string;

}

const CustomHeader = ({ title }: Props) => {

    const { toggleTheme } = useTheme()

    return (
        <nav className='grid grid-cols-2 lg:grid-cols-3 items-center p-5 border-b bg-indigo-600 dark:bg-indigo-800'>

            <img
                src="/logo_trans.png"
                alt="Logotipo de la empresa - Código Ideal"
                className='hidden lg:block h-18 w-auto justify-self-start'
            />

            <h1 className='text-2xl lg:text-center font-bold tracking-tight text-white justify-self-center'>
                {title}
            </h1>

            <div className='flex items-center gap-4 justify-self-end'>
                <Link to={'/'} className="text-white hover:opacity-80 transition-opacity font-medium">
                    <p className='lg:text-xl'>Inicio</p>
                </Link>

                <Button
                    variant='link'
                    size='icon'
                    onClick={toggleTheme}
                    className="relative h-10 w-10 text-white hover:bg-white/10"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Cambiar tema</span>
                </Button>
            </div>

        </nav>
    )
}

export default CustomHeader
