import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Users, FileText, CheckCircle, CalendarPlus, ListTodo } from "lucide-react";
import type { FormValuesMinuta } from "../../types/FormValues";



interface Props {

    onSubmit: (formLike: FormValuesMinuta) => void;
}

const GeneratorFormPage = ({ onSubmit }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesMinuta>();

    return (
        <div className="max-w-2xl mx-auto mt-3 p-6 bg-card rounded-xl border shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="proxima-fecha" className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-indigo-600" />
                            Fecha de la Reunión
                        </Label>
                        <Input id="proxima-fecha" type="date" className="w-full md:w-1/2" {...register("fechaInicial", { required: "La fecha es obligatoria" })}
                            style={errors.fechaInicial ? { border: "1px solid red" } : {}}
                        />
                        {errors.fechaInicial && <span className="text-xs text-red-500 m-2">{errors.fechaInicial.message}</span>}
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
                            style={errors.asistencia ? { border: "1px solid red" } : {}}
                        />
                        {errors.asistencia && <span className="text-xs text-red-500 m-2">{errors.asistencia.message}</span>}
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
                        style={errors.temas ? { border: "1px solid red" } : {}}
                    />
                    {errors.temas && <span className="text-xs text-red-500 m-2">{errors.temas.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="desarrollo">Desarrollo de la reunión</Label>
                    <Textarea
                        id="desarrollo"
                        placeholder="Escribe aquí los detalles, debates y notas importantes..."
                        className="min-h-37.5 resize-none"
                        {...register("desarrollo", { required: "El desarrollo es necesario" })}
                        style={errors.desarrollo ? { border: "1px solid red" } : {}}
                    />
                    {errors.desarrollo && <span className="text-xs text-red-500 m-2">{errors.desarrollo.message}</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="conclusion" className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600" />
                        Conclusión / Acuerdos
                    </Label>
                    <Textarea
                        id="conclusion"
                        placeholder="¿A qué se llegó? ¿Cuáles son los próximos pasos?"
                        className="min-h-25 resize-none"
                        {...register("conclusion", { required: "Debes anotar una conclusión" })}
                        style={errors.conclusion ? { border: "1px solid red" } : {}}
                    />
                    {errors.conclusion && <span className="text-xs text-red-500 m-2">{errors.conclusion.message}</span>}

                    <div className="space-y-2">
                        <Label htmlFor="pendientes" className="flex items-center gap-2">
                            <ListTodo className="h-4 w-4 text-indigo-600" />
                            Pendientes para la próxima reunión
                        </Label>
                        <Input
                            id="pendientes"
                            placeholder="Ej: Presentar informe, definir objetivos..."
                            {...register("pendientes")}
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="proxima-fecha" className="flex items-center gap-2">
                        <CalendarPlus className="h-4 w-4 text-indigo-600" />
                        Próxima Fecha
                    </Label>
                    <Input id="proxima-fecha" type="date" className="w-full md:w-1/2" {...register("proximaFecha")}
                    />
                </div>

                <hr className="my-6" />

                <div className="flex flex-col gap-4">
                    <Button
                        type="submit"
                        // onClick={() => setTempAction("pdf")}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-6 shadow-md dark:text-white"
                    >
                        Generar Minuta
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default GeneratorFormPage;