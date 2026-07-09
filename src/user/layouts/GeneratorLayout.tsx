import CustomFooter from '@/components/custom/CustomFooter'
import CustomHeader from '@/components/custom/CustomHeader'
import { Outlet } from 'react-router'

const GeneratorLayout = () => {
    return (
        <>
            <CustomHeader title='Minuta Generator' />
            <Outlet />
            <CustomFooter title='Minuta Generator' description='Esta web tiene el fin de agilizar el proceso de la creación de una minuta y exportarlo como pdf' />
        </>
    )
}

export default GeneratorLayout
