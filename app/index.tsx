import React from "react";
import { 
  View ,
  TextInput
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text } from '~/components/nativewindui/Text';
import { Button } from "~/components/nativewindui/Button";
import { CardInfo } from "~/components/myComponentes/CardInfo";
import { useStore } from "~/store/store";


export default function App(){
  const {
    isVisible, 
    setIsVisible,
    cepInput,
    setCepInput,
    cepInfo,
    setCepInfo,
    setMessenger,
    messenger
  } = useStore();

  const CepRequest = async (Cep: string) => {
    try {
      const data = await fetch(`https://viacep.com.br/ws/${Cep}/json`);

      if(!data.ok) {
        setCepInfo({
          cep: "",
          localidade: "",
          uf: "",
          bairro: "",
          logradouro: "",
        });
        throw new Error("Falha na requisição");
      }

      const { localidade, cep , logradouro, uf, bairro } = await data.json();
      setCepInfo({
        cep,
        localidade,
        uf,
        bairro,
        logradouro,
      });
    } catch (error) {
      console.error("Error fetching CEP:", error);
    }
  }
  
  const fetchCep = async () => {
    if (cepInput.trim() && cepInput.trim().length === 8) {
      await CepRequest(cepInput);
      setIsVisible(true);
      setMessenger("");
    }else {
      setIsVisible(false)
      setMessenger("Cep digitado é muito curto ou inválido");
    }
  }

  const clearInput = () => {
    setCepInput("");
    setMessenger("");
    setIsVisible(false);
  }

  return (
      <View className="flex-1 items-center bg-slate-50">
        <Text className="black font-semibold mt-32" variant={"title1"} color={"primary"}> 
          Digite o cep desejado
        </Text>
        <TextInput
         value={cepInput}
         onChangeText={(value) => setCepInput(value)}
         className="bg-white w-[90%] mt-5 shadow-black shadow-xl rounded-lg text-sm pl-3 border-gray-200 border"
         placeholder="Digite seu CEP"
         keyboardType="numeric"
        />
        <View className="mt-3 flex-row gap-3 justify-end w-[90%]">
          <Button variant="tonal" size={'lg'} onPress={fetchCep}>
            <Ionicons name="search" size={25} color={"#4682B4"}/>
          </Button>
          <Button size={'lg'} className="bg-red-400" onPress={clearInput}>
          <Ionicons name="close" size={25} color={"#800000"}/>
          </Button>
        </View>
        {
          isVisible ?  
            <CardInfo
              cep={cepInfo.cep} 
              localidade={cepInfo.localidade}
              uf={cepInfo.uf}
              bairro={cepInfo.bairro}
              logradouro={cepInfo.logradouro}
            /> : ""
        }
        {
          messenger? 
             <View className="bg-white w-[80%] mt-12 shadow-black shadow-xl rounded-lg border-gray-200 border h-[5%] p-1 justify-center items-center">
                <Text className="text-gray-500">{messenger}</Text>
             </View> : ''
        }
      </View>
  )
}