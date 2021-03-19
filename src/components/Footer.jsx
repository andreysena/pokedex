import React from 'react'

import * as S from '../style'

export default (props) =>{

    return (
        <S.Footer>
            <S.FooterLine>
                <S.FooterLink 
                    href="https://github.com/andreysena/pokedex" 
                    target="_blank"
                >Pokédex </S.FooterLink>

                <S.FooterText> by </S.FooterText>

                <S.FooterLink 
                    href="https://github.com/andreysena" 
                    target="_blank"
                >Andrey Sena</S.FooterLink>
            </S.FooterLine>
        </S.Footer>
    )
}