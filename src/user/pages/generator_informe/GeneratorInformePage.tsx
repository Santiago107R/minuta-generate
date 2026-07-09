import GeneratorFormPage from "./GeneratorInformeFormPage";
import type { FormValues } from "../../types/FormValues";
import { useNavigate } from "react-router";
import { useFromStore } from "@/user/store/useFormData";

const GeneratorInformePage = () => {

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

export default GeneratorInformePage
