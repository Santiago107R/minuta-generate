import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { FormValuesMinuta } from '../types/FormValues'

type FormState = {
    formData: FormValuesMinuta | null;
    setFormData: (data: Partial<FormValuesMinuta>) => void;
    clearFormData: () => void;
}

export const useFromStore = create<FormState>()(
    persist(
        (set) => ({
            formData: null,
            setFormData: (data) =>
                set((state) => ({
                    formData: state.formData
                        ? { ...state.formData, ...data }
                        : (data as FormValuesMinuta)
                })),
            clearFormData: () => set({ formData: null })
        }),
        {
            name: 'form-data-storage',
        }
    )
);