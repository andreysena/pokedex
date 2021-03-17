import React from 'react'

import * as S from '../style'

export default ({ height, weight }) => {

    return (
        <S.PokeBodyInfo>
            
            <S.EachModalContent>
                <S.ModalTitle>Altura:</S.ModalTitle>
                <S.ModalP>{ parseFloat(height * 0.1).toFixed(1) } m</S.ModalP>
            </S.EachModalContent>

            <S.EachModalContent>
                <S.ModalTitle>Peso:</S.ModalTitle>
                <S.ModalP>{ parseFloat(weight * 0.1).toFixed(1) } kg</S.ModalP>
            </S.EachModalContent>
        </S.PokeBodyInfo>
    )
}