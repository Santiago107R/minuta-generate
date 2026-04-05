import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const NoData = () => {
    return (
        <div>
            <div className="p-10 text-center">
                No hay datos disponibles
            </div>

            <div className="flex justify-center items-center mt-4">
                <Link to="/">
                    <Button variant="outline" className={"w-32"}>Volver al inicio</Button>
                </Link>
            </div>
        </div>
    )
}

export default NoData
