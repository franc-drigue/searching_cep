import { create } from 'zustand';

type Store = {
    setMessenger: (value: string) => void;
    setIsVisible: (value: boolean) => void;
    setCepInput: (value: string) => void;
    setCepInfo: (cepInfo: { cep: string; localidade: string; uf: string; bairro: string; logradouro: string }) => void;
    isVisible: boolean;
    cepInput: string;
    messenger: string;
    cepInfo: {
        cep: string;
        localidade: string;
        uf: string;
        bairro: string;
        logradouro: string;
    };
}

export const useStore = create<Store>((set) => ({
    setMessenger: (value: string) => set({messenger: value}) ,
    setIsVisible: (value: boolean) => set({isVisible: value}),
    setCepInput: (value: string) => set({cepInput: value}),
    setCepInfo: (cepInfo) => set({
        cepInfo: { ...cepInfo }
    }),
    isVisible: false,
    cepInput: "",
    messenger: "",
    cepInfo: {
        cep: "",
        localidade: "",
        uf: "",
        bairro: "",
        logradouro: ""
    },
}))