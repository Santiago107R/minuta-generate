import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import NoData from "./ui/NoData";
import InformePdf from "./InformePdf";
import { useFromInformeStore } from "@/user/store/useFormInformeData";
import { format2Date } from "@/utils/format2Date";

const InformeGeneratedPage = () => {
    const { formInformeData, clearFormInformeData } = useFromInformeStore();
    const today = new Date
    const navigate = useNavigate()

    if (!formInformeData) return <NoData />;

    const printDoc = () => {

        window.onafterprint = () => {
            navigate('/generator-informe');
            clearFormInformeData();
            window.onafterprint = null;
        };

        window.print();
    };

    return (
        <div className="bg-white p-4 sm:p-8 min-h-screen print:p-10 print:min-h-0">

            <div
                className="max-w-4xl mx-auto border border-slate-200 rounded-xl shadow-sm overflow-hidden print:border-slate-300 print:shadow-none"
            >
                {/* Sección: Titulo y Subtitulo */}
                <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/50 text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 break-words leading-tight">
                        {formInformeData.titulo ? formInformeData.titulo.charAt(0).toUpperCase() + formInformeData.titulo.slice(1) : ''}
                    </h1>

                    <p className="mt-4 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                        Período: <span className="text-slate-800 font-semibold normal-case">{format2Date(formInformeData.fechaDesde, formInformeData.fechaHasta)}</span>
                    </p>
                </div>

                {/* Cuerpo del Informe */}
                <div className="p-6 sm:p-8 space-y-8">

                    {/* Sección: Desarrollo */}
                    <div className="space-y-3">
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider border-b pb-1 border-slate-100">
                            Desarrollo de la reunión
                        </h2>
                        <p className="text-slate-800 text-base whitespace-pre-wrap break-words leading-relaxed text-justify">
                            {formInformeData.desarrollo ? formInformeData.desarrollo.charAt(0).toUpperCase() + formInformeData.desarrollo.slice(1) : ''}
                        </p>
                    </div>

                    {/* Sección: Conclusión */}
                    {
                        formInformeData.conclusion && (
                            <div className="space-y-3 bg-slate-50 p-5 rounded-lg border border-slate-100 print:bg-slate-50 print:border-slate-200">
                                <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider border-b pb-1 border-slate-200">
                                    Conclusión
                                </h2>
                                <p className="text-slate-700 text-base whitespace-pre-wrap break-words leading-relaxed italic text-justify">
                                    {formInformeData.conclusion ? formInformeData.conclusion.charAt(0).toUpperCase() + formInformeData.conclusion.slice(1) : ''}
                                </p>
                            </div>
                        )
                    }

                </div>
            </div>

            {/* BOTONES */}
            <div className="flex flex-wrap justify-center items-center mt-6 print:hidden gap-3 px-2">

                <PDFDownloadLink
                    document={
                        <InformePdf
                            formInformeData={formInformeData}
                            format2Date={format2Date}
                        />
                    }
                    fileName={`Informe_${formInformeData.titulo}-${format2Date(formInformeData.fechaDesde, formInformeData.fechaHasta)}-${today.getTime()}.pdf`}
                >
                    {({ loading }) => (
                        <Button variant="destructive" className="w-32" disabled={loading}
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/generator-informe')

                                    clearFormInformeData();
                                }, 500);
                            }}
                        >
                            {loading ? "Generando..." : "PDF"}
                        </Button>
                    )}
                </PDFDownloadLink>

                <Button
                    variant="default"
                    className="bg-indigo-700 w-32 text-white"
                    onClick={() => printDoc()}
                >
                    Imprimir
                </Button>

                <Link to="/">
                    <Button variant="secondary" className="w-32" onClick={clearFormInformeData}>Volver al inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default InformeGeneratedPage;