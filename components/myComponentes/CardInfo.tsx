import { View } from 'react-native'
import { Text } from '../nativewindui/Text'
import React from 'react'

type CardInfo = {
  cep: string;
  localidade: string;
  uf: string;
  bairro: string;
  logradouro: string;
}

export const CardInfo = ({cep, localidade, uf, bairro, logradouro}: CardInfo) => {
  return (
    <View className="bg-white w-[90%] mt-12 shadow-black shadow-xl rounded-lg text-sm pl-3 border-gray-200 border h-[30%] p-5 justify-center gap-4">
      <Text variant={'heading'}>
        CEP:  <Text variant={"subhead" } color={"tertiary"}>{cep}</Text>
      </Text>
      <Text variant={'heading'}>
        Logradouro: <Text variant={"subhead" } color={"tertiary"}>{logradouro}</Text>
      </Text>
      <Text variant={'heading'}>
        Bairro: <Text variant={"subhead" } color={"tertiary"}>{bairro}</Text>
      </Text>
      <Text variant={'heading'}>
        Cidade: <Text variant={"subhead" } color={"tertiary"}>{localidade}</Text>
      </Text>
      <Text variant={'heading'}>
        Estado: <Text variant={"subhead" } color={"tertiary"}>{uf}</Text>
      </Text>
    </View>
  )
}

