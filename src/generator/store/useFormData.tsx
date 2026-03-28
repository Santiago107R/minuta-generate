import { create } from 'zustand'
import type { FormValues } from '../types/FormValues'

type FormState = {
    formData: FormValues | null;
    setFormData: (data: Partial<FormValues>) => void;
    clearFormData: () => void;

}

export const useFromStore = create<FormState>()((set) => ({
    formData: null,

    setFormData: (data) =>
        set((state) => ({
            formData: state.formData
                ? { ...state.formData, ...data }
                : (data as FormValues)
        })),

    clearFormData: () => set({formData: null})
}));