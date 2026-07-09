import { useFromStore } from "@/user/store/useFormData";
import TitleMinuta from "../generator/ui/TitleMinuta";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import NoData from "./ui/NoData";
import MinutaPDF from "./MinutaPdf";
import { formatDate } from "@/utils/formatDate";
import { useEffect } from "react";
import { renderList } from "@/utils/renderList";
import { renderListText } from "@/utils/renderListText";

const MinutaGeneratedPage = () => {
    const { formData, clearFormData } = useFromStore();
    const today = new Date
    const navigate = useNavigate()

    if (!formData) return <NoData />;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const printDoc = () => {

        window.onafterprint = () => {
            navigate('/generator');
            clearFormData();
            window.onafterprint = null;
        };

        window.print();
    };

    return (
        <div className="bg-white p-2 sm:p-8 min-h-screen print:p-10 print:min-h-0">

            <div
                className="max-w-4xl mx-auto border border-slate-200 overflow-hidden print:border-slate-300"
            >
                {/* Sección: Fecha inicial */}
                <div className="p-4 bg-slate-50 print:bg-slate-50 border-b border-slate-200" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                    <p className="text-sm font-semibold text-slate-600">
                        Fecha de la reunión: <span className="text-black font-bold">{formatDate(formData.fechaInicial)}</span>
                    </p>
                </div>

                {/* Sección: Asistencia */}
                <div className="p-5  border-slate-200">
                    <TitleMinuta title="ASISTENCIA" bgColor="#ef4444" />
                    <ul className="mt-3 ml-4 text-slate-700 text-sm">
                        {renderList(formData.asistencia)}
                    </ul>
                </div>

                {/* Sección: Temas Tratados */}
                <div className="mb-4 p-4 ">
                    <TitleMinuta title="TEMAS TRATADOS" bgColor="#3b82f6" />
                    <ul className="mt-3 ml-4 text-slate-700 text-sm">
                        {renderList(formData.temas)}
                    </ul>
                </div>

                {/* Sección: Desarrollo */}
                <div className="mb-4 p-4 ">
                    <TitleMinuta title="DESARROLLO DE LA REUNIÓN" bgColor="#64748b" />
                    <p className="mt-3 pl-4 text-slate-800 text-sm whitespace-pre-wrap warp-break-words leading-relaxed">
                        {formData.desarrollo.trim().charAt(0).toUpperCase() + formData.desarrollo.trim().slice(1)}
                    </p>
                </div>

                {/* Sección: Conclusión */}
                <div className="p-5  border-slate-200">
                    <TitleMinuta title="CONCLUSIÓN" bgColor="#22c55e" />
                    <p className="mt-3 pl-4 text-slate-800 text-sm whitespace-pre-wrap warp-break-words italic">
                        {formData.conclusion.trim().charAt(0).toUpperCase() + formData.conclusion.trim().slice(1)}
                    </p>
                </div>

                {/* Sección: Pendientes */}
                {
                    formData.pendientes && (
                        <div className="p-5  border-slate-200">
                            <TitleMinuta title="PENDIENTES" bgColor="#fb923c" />
                            <ul className="mt-3 ml-4 text-slate-700 text-sm">
                                {renderList(formData.pendientes)}
                            </ul>
                        </div>
                    )
                }

                {/* Sección: Próxima reunión */}
                {formData.proximaFecha && (
                    <div className="p-4 bg-slate-50 print:bg-slate-50 border-t border-slate-200" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                        <p className="text-sm font-semibold text-slate-600">
                            Próxima reunión programada: <span className="text-black font-bold">{formatDate(formData.proximaFecha)}</span>
                        </p>
                    </div>
                )}
            </div>

            {/* BOTONES */}
            <div className="flex flex-wrap justify-center items-center mt-6 print:hidden gap-3 px-2">

                <PDFDownloadLink
                    document={
                        <MinutaPDF
                            formData={formData}
                            formatDate={formatDate}
                            renderListText={renderListText}
                        />
                    }
                    fileName={`Minuta_${formData.fechaInicial}-${today.getTime()}.pdf`}
                >
                    {({ loading }) => (
                        <Button variant="destructive" className="w-32" disabled={loading}
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/generator')

                                    clearFormData();
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
                    <Button variant="secondary" className="w-32" onClick={clearFormData}>Volver al inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default MinutaGeneratedPage;