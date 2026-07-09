import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { FormValuesInforme } from '../types/FormValues'

type FormState = {
    formInformeData: FormValuesInforme | null;
    setFormInformeData: (data: Partial<FormValuesInforme>) => void;
    clearFormInformeData: () => void;
}

export const useFromInformeStore = create<FormState>()(
    persist(
        (set) => ({
            formInformeData: null,
            setFormInformeData: (data) =>
                set((state) => ({
                    formInformeData: state.formInformeData
                        ? { ...state.formInformeData, ...data }
                        : (data as FormValuesInforme)
                })),
            clearFormInformeData: () => set({ formInformeData: null })
        }),
        {
            name: 'form-informe-data-storage',
        }
    )
);