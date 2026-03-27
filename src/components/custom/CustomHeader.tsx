import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme-provider'
import { Button } from '../ui/button'
import { Link } from 'react-router';

interface Props {
    title: string;

}

const CustomHeader = ({title}: Props) => {

    const {toggleTheme} = useTheme()

    return (
        <nav className='flex items-center justify-between p-5 border-b bg-indigo-600 dark:bg-indigo-800'>
            <h1 className='text-2xl font-bold tracking-tight text-white'>{title}</h1>
            
            <div className='flex items-center gap-4'>
                <Link to={'/'} className="text-white hover:opacity-80 transition-opacity font-medium">
                    Inicio
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
