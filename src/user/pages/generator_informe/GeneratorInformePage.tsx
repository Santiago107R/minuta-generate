import type { FormValuesInforme } from "../../types/FormValues";
import { useNavigate } from "react-router";
import GeneratorInformeFormPage from "./GeneratorInformeFormPage";
import { useFromInformeStore } from "@/user/store/useFormInformeData";

const GeneratorInformePage = () => {

    const { setFormInformeData } = useFromInformeStore()
    const navigate = useNavigate()

    const handleSubmit = (formLike: FormValuesInforme) => {
        setFormInformeData(formLike)

        navigate('/informe')
    }

    return (
        <GeneratorInformeFormPage onSubmit={handleSubmit} />
    )
}

export default GeneratorInformePage
