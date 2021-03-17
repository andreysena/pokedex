import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({ id, types }) => {

    return (
        <S.ImageDiv bgColor={types ? colorByType(types) : colorByType(null)}>
            <S.ImageInCardList 
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            />   
        </S.ImageDiv>
    )
}