import { useRef } from "react"; // Importar useRef
import { useFromStore } from "@/generator/store/useFormData";
import TitleMinuta from "../generator/ui/TitleMinuta";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import NoData from "./ui/NoData";

const MinutaGeneratedPage = () => {
    const { formData } = useFromStore();
    // Referencia al div que queremos imprimir/convertir a PDF
    const contentRef = useRef<HTMLDivElement>(null);

    if (!formData) return <NoData />;

    const formatDate = (dateStr?: string) => {
        if (!dateStr) return "";
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
    };

    const renderList = (text: string) => {
        if (!text) return null;
        return text.split('\n').map((item, index) => (
            item.trim() && <li key={index} className="mb-1 leading-tight">• {item}</li>
        ));
    };

    const handleDownloadPdf = async () => {
        const element = contentRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2, 
            logging: false,
            useCORS: true
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`Minuta_${formData.fechaInicial}.pdf`);
    };

    return (
        <div className="bg-white p-2 sm:p-8 min-h-screen print:min-h-0 print:p-0">

            <div
                ref={contentRef}
                className="max-w-4xl mx-auto border border-slate-200 print:border-none print:m-0 print:w-full"
            >
                {/* Sección: Fecha inicial */}
                <div className="p-4 bg-slate-50 print:bg-white border-b">
                    <p className="text-sm font-semibold text-slate-600">
                        Fecha de la reunión: <span className="text-black">{formatDate(formData.fechaInicial)}</span>
                    </p>
                </div>

                {/* Sección: Asistencia */}
                <div className="mb-4 p-4 border-b">
                    <TitleMinuta title="Asistencia" bgColor="red" />
                    <ul className="mt-3 ml-4 text-slate-700">
                        {renderList(formData.asistencia)}
                    </ul>
                </div>

                {/* ... resto de tus secciones (Temas, Desarrollo, etc) ... */}
                <div className="mb-4 p-4 border-b">
                    <TitleMinuta title="Temas Tratados" bgColor="blue" />
                    <ul className="mt-3 ml-4 text-slate-700">
                        {renderList(formData.temas)}
                    </ul>
                </div>

                <div className="mb-4 p-4 border-b">
                    <TitleMinuta title="Desarrollo de la Reunión" bgColor="gray" />
                    <p className="mt-3 text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {formData.desarrollo}
                    </p>
                </div>

                <div className="mb-4 p-4 border-b">
                    <TitleMinuta title="Conclusión" bgColor="green" />
                    <p className="mt-3 text-slate-800 whitespace-pre-wrap italic">
                        {formData.conclusion}
                    </p>
                </div>

                {formData.proximaFecha && (
                    <div className="p-4 bg-slate-50 print:bg-white border-t">
                        <p className="text-sm font-semibold text-slate-600">
                            Próxima reunión programada: <span className="text-black">{formatDate(formData.proximaFecha)}</span>
                        </p>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center mt-4 print:hidden">
                <Button
                    variant="destructive"
                    className="w-32"
                    onClick={handleDownloadPdf}
                >
                    PDF
                </Button>

                <Button
                    variant="default"
                    className="bg-indigo-700 mx-5 w-32"
                    onClick={() => window.print()}
                >
                    Imprimir
                </Button>

                <Link to="/">
                    <Button variant="outline" className={"w-32"}>Volver al inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default MinutaGeneratedPage;