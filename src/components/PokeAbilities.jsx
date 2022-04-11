import React from 'react'

import * as S from '../style'

export default ({abilities}) => {

    return (
        <S.ContainerAbilities>
            <S.ModalTitle>Habilidades:</S.ModalTitle>
            {
                abilities.map((ability, index) => {
                    return <S.ModalP key={index}>{ ability.ability.name }</S.ModalP>
                })
            }
        </S.ContainerAbilities>
    )
}