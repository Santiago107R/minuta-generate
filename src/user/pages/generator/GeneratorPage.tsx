import GeneratorFormPage from "./GeneratorFormPage";
import type { FormValuesMinuta } from "../../types/FormValues";
import { useNavigate } from "react-router";
import { useFromStore } from "@/user/store/useFormData";

const GeneratorPage = () => {

    const { setFormData } = useFromStore()
    const navigate = useNavigate()

    const handleSubmit = (formLike: FormValuesMinuta) => {
        setFormData(formLike)

        navigate('/minuta')
    }

    return (
        <GeneratorFormPage onSubmit={handleSubmit} />
    )
}

export default GeneratorPage