import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({ types }) => {
            
    return (
        <S.PokeContainerTypesAndWeaknesses>

            <S.TitleTypesAndWeaknesses>Tipos</S.TitleTypesAndWeaknesses>
            
            <S.TypesAndWeaknessesContainer>
                                
                {
                    types ?
                    types.map((pokeType, index) => {
                        
                        const type = types[index].type.name
                        
                        return(
                                <S.EachType 
                                    key={index}
                                    bgColor={colorByType(type)}
                                >
                                    <S.TextOfType color={colorByType(type)}>
                                        { pokeType.type.name }
                                    </S.TextOfType>
                                </S.EachType> 
                        )
                        
                    })
                    :
                    <S.TextOfType>Tipos não encontrados</S.TextOfType>
                }
            </S.TypesAndWeaknessesContainer>
        </S.PokeContainerTypesAndWeaknesses>
    )  
}