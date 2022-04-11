import React from 'react'

import * as S from '../style'
import PokeCard from './PokeCard'
import ScrollToTop from './ScrollToTop'

export default ({ pokemon }) => {
    
    return(
        <S.MainContainer>
            <S.List>
                
                {
                    pokemon.map((pokemon, index) => {
                        return (
                            <PokeCard
                                key={index}
                                pokemon={pokemon}
                            />      
                        )
                    })
                }
                
            </S.List>
            <ScrollToTop />
        </S.MainContainer>
    )
}