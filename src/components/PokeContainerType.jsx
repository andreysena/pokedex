import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({ types }) => {
            
    return (
        <S.PokeContainerType>

            <S.TitleTypes>Tipos</S.TitleTypes>
            
            <S.TypesContainer>
                                
                {
                    types ?
                    types.map((pokeTypes, index)=> {
                        
                        const type = types[index].type.name
                        
                        return(
                                <S.EachType 
                                    bgColor={colorByType(type)}
                                >
                                    <S.TextOfType color={colorByType(type)}>
                                        { pokeTypes.type.name }
                                    </S.TextOfType>
                                </S.EachType> 
                        )
                        
                    })
                    :
                    <S.TextOfType>Tipos não encontrados</S.TextOfType>
                }
            </S.TypesContainer>
        </S.PokeContainerType>
    )  
}