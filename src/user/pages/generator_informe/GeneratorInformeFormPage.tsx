import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, FileText, CheckCircle } from "lucide-react";
import type { FormValuesInforme } from "@/user/types/FormValues";



interface Props {

    onSubmit: (formLike: FormValuesInforme) => void;
}

const GeneratorInformeFormPage = ({ onSubmit }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesInforme>();

    return (
        <div className="max-w-2xl mx-auto mt-3 p-6 bg-card rounded-xl border shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="space-y-2">
                    <Label htmlFor="titulo" className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-600" />
                        Titulo
                    </Label>
                    <Input
                        id="titulo"
                        placeholder="Ej: Informe semanal 1"
                        {...register("titulo", { required: "Debes poner el título" })}
                        style={errors.titulo ? { border: "1px solid red" } : {}}
                    />
                    {errors.titulo && <span className="text-xs text-red-500 m-2">{errors.titulo.message}</span>}
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <CalendarDays className="h-4 w-4 text-indigo-600" />
                        <span>Período</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="fechaDesde" className="text-xs text-muted-foreground">
                                Fecha desde
                            </Label>
                            <Input
                                id="fechaDesde"
                                type="date"
                                className="w-full"
                                {...register("fechaDesde", { required: "La fecha desde es obligatoria" })}
                                style={errors.fechaDesde ? { border: "1px solid red" } : {}}
                            />
                            {errors.fechaDesde && <span className="text-xs text-red-500 m-2">{errors.fechaDesde.message}</span>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="fechaHasta" className="text-xs text-muted-foreground">
                                Fecha hasta
                            </Label>
                            <Input
                                id="fechaHasta"
                                type="date"
                                className="w-full"
                                {...register("fechaHasta", { required: "La fecha hasta es obligatoria" })}
                                style={errors.fechaHasta ? { border: "1px solid red" } : {}}
                            />
                            {errors.fechaHasta && <span className="text-xs text-red-500 m-2">{errors.fechaHasta.message}</span>}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="desarrollo">Desarrollo de la reunión</Label>
                    <Textarea
                        id="desarrollo"
                        placeholder="Escribe aquí los detalles, debates y notas importantes de la semana..."
                        className="min-h-37.5 resize-none"
                        {...register("desarrollo", { required: "El desarrollo es necesario" })}
                        style={errors.desarrollo ? { border: "1px solid red" } : {}}
                    />
                    {errors.desarrollo && <span className="text-xs text-red-500 m-2">{errors.desarrollo.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="conclusion" className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600" />
                        Conclusión (opcional)
                    </Label>
                    <Textarea
                        id="conclusion"
                        placeholder="¿A qué se llegó? ¿Cuáles son los próximos pasos?"
                        className="min-h-25 resize-none"
                        {...register("conclusion")}
                    />
                </div>

                <hr className="my-6" />

                <div className="flex flex-col gap-4">
                    <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-6 shadow-md dark:text-white"
                    >
                        Generar Informe
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default GeneratorInformeFormPage;