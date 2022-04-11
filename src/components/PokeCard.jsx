import React, { useState } from 'react'

import * as S from '../style.js'
import PokeContainerType from './PokeContainerType'
import PokemonImage from './PokemonImage'
import PokeModal from './PokeModal'

export default ({ pokemon }) => {
    
    const { id, name, height, weight, abilities, types, stats, images } = pokemon

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <>
            <S.Card onClick={() => pokemon.length !== 0 ? setIsOpen(!isOpen) : null}>
                
                <PokemonImage id={id} types={types ? types[0].type.name : null} />

                <S.CardNumber>Nº { id ? id : "-"}</S.CardNumber>

                <S.PokemonName>{ name ? name : "Não encontrado"}</S.PokemonName>

                <PokeContainerType types={types ? types : null} />

            </S.Card>
            
            {
                isOpen ? 
                    <PokeModal 
                        onClose={() => setIsOpen(false)} 
                        id={id}
                        name={name}
                        height={height}
                        weight={weight}
                        abilities={abilities }
                        types={types}
                        stats={stats}
                        images={images}
                    /> 
                    : null 
            }
        </>
    )
}   