import { create } from 'zustand';

type Store = {
    setMessenger: (value: string) => void;
    setIsVisible: (value: boolean) => void;
    setIsloading: (value: boolean) => void;
    setCepInput: (value: string) => void;
    setCepInfo: (cepInfo: { cep: string; localidade: string; uf: string; bairro: string; logradouro: string }) => void;
    isVisible: boolean;
    isLoading: boolean;
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
    setIsloading: (value: boolean) => set({isLoading: value}),
    setCepInput: (value: string) => set({cepInput: value}),
    setCepInfo: (cepInfo) => set({
        cepInfo: { ...cepInfo }
    }),
    isVisible: false,
    isLoading: false,
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