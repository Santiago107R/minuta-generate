import GeneratorFormPage from "./GeneratorFormPage";
import type { FormValues } from "../../types/FormValues";
import { useNavigate } from "react-router";
import { useFromStore } from "@/generator/store/useFormData";

const GeneratorPage = () => {

    const { setFormData } = useFromStore()
    const navigate = useNavigate()
    
    const handleSubmit = (formLike: FormValues) => {
        setFormData(formLike)
        
        navigate('/minuta')
    }

    return (
        <GeneratorFormPage onSubmit={handleSubmit} />
    )
}

export default GeneratorPage
