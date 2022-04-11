import React, { useState } from 'react'

import * as S from '../style'
import PokemonImage from './PokemonImage'
import PokeModalContent from './PokeModalContent'

export default ({ onClose = () => {}, id, name, height, weight, abilities, types, stats }) => {

    const handleOutside = (e) =>{
        if(e.target.id === "modal") onClose()
    }

    return (
        <S.Modal id={"modal"} onClick={handleOutside}>

            <S.ContainerModal>

                <S.CloseModalButton onClick={onClose} />
                
                <PokemonImage id={id} types={types[0].type.name} />

                <S.CardNumber>Nº {id}</S.CardNumber>

                <S.PokemonName>{ name }</S.PokemonName>

                <PokeModalContent 
                    types={types} height={height} weight={weight} abilities={abilities} stats={stats}
                />
                
            </S.ContainerModal>

        </S.Modal>
    )
}