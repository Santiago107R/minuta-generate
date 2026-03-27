import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Users, FileText, CheckCircle, CalendarPlus } from "lucide-react";

type FormValues = {
    asistencia: string;
    temas: string;
    desarrollo: string;
    conclusion: string;
    proximaFecha?: string;
};

const GeneratorFormPage = () => {
    const [actionType, setActionType] = useState<"pdf" | "print" | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    const onSubmit = (data: FormValues) => {
        console.log("Datos del formulario:", data);

        if (actionType === "pdf") {
            console.log("Generando PDF...");
            // Aquí tu lógica de exportación
        } else if (actionType === "print") {
            console.log("Abriendo menú de impresión...");
            // Aquí tu lógica de window.print()
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-3 p-6 bg-card rounded-xl border shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-indigo-600" />
                            Fecha de la Reunión
                        </Label>
                        <Input value={formattedDate} disabled className="bg-muted" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="asistencia" className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-indigo-600" />
                            Asistencia
                        </Label>
                        <Input
                            id="asistencia"
                            placeholder="Ej: Juan, Maria..."
                            {...register("asistencia", { required: "La asistencia es obligatoria" })}
                            className={errors.asistencia ? "border-red-500" : ""}
                        />
                        {errors.asistencia && <span className="text-xs text-red-500">{errors.asistencia.message}</span>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="temas" className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-600" />
                        Temas Tratados
                    </Label>
                    <Input
                        id="temas"
                        placeholder="Resumen corto de los puntos principales"
                        {...register("temas", { required: "Debes indicar los temas" })}
                    />
                    {errors.temas && <span className="text-xs text-red-500">{errors.temas.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="desarrollo">Desarrollo de la reunión</Label>
                    <Textarea
                        id="desarrollo"
                        placeholder="Escribe aquí los detalles, debates y notas importantes..."
                        className="min-h-[150px] resize-none"
                        {...register("desarrollo", { required: "El desarrollo es necesario" })}
                    />
                    {errors.desarrollo && <span className="text-xs text-red-500">{errors.desarrollo.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="conclusion" className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600" />
                        Conclusión / Acuerdos
                    </Label>
                    <Textarea
                        id="conclusion"
                        placeholder="¿A qué se llegó? ¿Cuáles son los próximos pasos?"
                        className="min-h-[100px] resize-none"
                        {...register("conclusion", { required: "Debes anotar una conclusión" })}
                    />
                    {errors.conclusion && <span className="text-xs text-red-500">{errors.conclusion.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="proxima-fecha" className="flex items-center gap-2">
                        <CalendarPlus className="h-4 w-4 text-indigo-600" />
                        Próxima Fecha (Opcional)
                    </Label>
                    <Input id="proxima-fecha" type="date" className="w-full md:w-1/2" {...register("proximaFecha")} />
                </div>

                <hr className="my-6" />

                {/* 4. Botones con onClick para definir el tipo de acción */}
                <div className="flex flex-col gap-4">
                    <Button
                        type="submit"
                        onClick={() => setActionType("pdf")}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-6 shadow-md dark:text-white"
                    >
                        Generar PDF
                    </Button>

                    <p className="text-center font-medium text-muted-foreground">O</p>

                    <Button
                        variant={"outline"}
                        type="submit"
                        onClick={() => setActionType("print")}
                        className="w-full border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-lg py-6 shadow-md"
                    >
                        Imprimir
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default GeneratorFormPage;