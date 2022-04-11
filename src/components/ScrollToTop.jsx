import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

import * as S from '../style'
import icon from '../assets/icons/arrowTop.png'

export default (props) => {

    const {y: pageYOffset} = useWindowScroll()
    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        
        if(pageYOffset > 400){
            setVisible(true)

        }else{
            setVisible(false)
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    if(!visible){
        return false
    }

    return (
        <S.ScrollToTop>
            <S.ScrollToTopIcon src={icon} onClick={scrollToTop}/>
        </S.ScrollToTop>
    )
}