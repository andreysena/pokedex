import React, { useEffect, useState } from 'react'
import axios from 'axios'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default( types ) => {

    const url = "https://api-poke-types.herokuapp.com/types-weaknesses"

    const [ isLoaoding, setIsLoading ] = useState(true)
    const [ weaknesses, setWeaknesses ] = useState([])
    
    useEffect(() => {

		setIsLoading(true)

        let type1 = ""
        let type2 = ""
        
        if(types.types[1]){
            type1 = types.types[0].type.name
            type2 = types.types[1].type.name
        }else{
            type1 = types.types[0].type.name
        }
  
        const weaknessesPromises = axios.get(`${url}/${type1}/${type2}`)
                .then(resolve => resolve.data)
                .catch(error => {
                    console.log("Ocorreu um erro ao tentar buscar as fraquezas dos tipos...: " + error)
                })

        Promise.resolve(weaknessesPromises)
                .then(weaknesses => {
                    setWeaknesses(weaknesses)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log("Ocorreu um erro ao tentar resolver a promise de busca pelas fraquezas dos tipos...: ", error)
                })
	}, [])

    let message = weaknesses ? "Loading..." : "Erro de conexão." 

    return (
        <S.PokeContainerTypesAndWeaknesses>

            <S.TitleTypesAndWeaknesses>Fraquezas</S.TitleTypesAndWeaknesses>

            <S.TypesAndWeaknessesContainer>

                {    
                    !isLoaoding && weaknesses
                    ?
                    weaknesses.weaknesses.map((pokeWeakness, index) => {
                        
                        const weakness = pokeWeakness.name

                        return (
                            <S.EachType
                                    key={index}
                                    bgColor={colorByType(weakness)}
                                >
                                    <S.TextOfType color={colorByType(weakness)}>
                                        { weakness }
                                    </S.TextOfType>
                                </S.EachType> 
                        )
                    })
                    :
                    <S.TextOfType>{message}</S.TextOfType>
                }

            </S.TypesAndWeaknessesContainer>

        </S.PokeContainerTypesAndWeaknesses>
    )
}