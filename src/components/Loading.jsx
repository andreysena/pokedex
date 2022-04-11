import React from 'react'

import * as S from '../style'
import loadingGenerationImage from '../assets/images/loadingGeneration.png'
import pokeballImage from '../assets/images/pokeball.png'

export default (props) => {

    let altura = window.innerHeight

    return (
        <S.ContainerLoadingImage altura={altura}>

            <S.PokeBallSpiner src={pokeballImage}/>

            <S.LoadingImage src={loadingGenerationImage}/>

        </S.ContainerLoadingImage>
    )
}