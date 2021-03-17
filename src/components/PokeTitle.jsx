import React from 'react'

import logoPokeList from '../assets/images/pokeList.png'
import * as S from '../style'

export default (props) => {
    
    return (
        <S.TitleImageContainer>
            <S.TitleImage
                src={logoPokeList}
            />
        </S.TitleImageContainer>
    )
}