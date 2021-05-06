import React from 'react'

import * as S from '../style'
import PokeBodyInfo from './PokeBodyInfo'
import PokeAbilities from './PokeAbilities'
import PokeContainerType from './PokeContainerType'
import PokeStats from './PokeStats'
import PokeContainerWeaknesses from './PokeContainerWeaknesses'

export default (props) => {

    const { types, height, weight, abilities, stats } = props
    
    return (
        <S.ModalContent>

            <S.FirstModalDivision>
            
                <PokeBodyInfo height={height} weight={weight} />
                
                <PokeAbilities abilities={abilities} />

                <PokeStats stats={stats}/>
                
            </S.FirstModalDivision>
            
            <PokeContainerType types={types} />
            
            <PokeContainerWeaknesses types={types} />

        </S.ModalContent>
    )
}