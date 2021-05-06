import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        background: -moz-linear-gradient( to right, #0052b0, #ffd400 );
        background: -webkit-linear-gradient( to right, #0052b0, #ffd400 );
        background: -o-linear-gradient( to right, #0052b0, #ffd400 );
        background: linear-gradient( to right, #0052b0, #ffd400);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 0;
        padding: 0;
    }

    @media(max-width: 800px){
        body{
            background: #0052b0DD;
        }    
    }
`

export const ContainerLoadingImage = styled.div`
    display: flex;
    min-height: 40vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 800px){
        min-height: 20vh;
    }

    @media only screen and (min-width: 3840px){
        min-height: 50vh;
    }

`

export const LoadingImage = styled.img`
    width: 300px;

    @media only screen and (max-width: 800px){
        width: 150px;
    }
    
    @media only screen and (min-width: 3840px){
        width: 800px;
    }
`

const spiner = keyframes`
    to {
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg); 
    }
`

export const PokeBallSpiner = styled.img`
    width: 50px;
    animation: ${spiner} 0.7s linear infinite;

    @media only screen and (max-width: 800px){
        width: 30px;
    }

    @media only screen and (min-width: 3840px){
        width: 150px;
    }
`

export const TitleImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 3%;
`

export const TitleImage = styled.img`
    display: flex;
    min-width: 200px;
    max-width: 400px;

    @media only screen and (max-width: 800px){
        margin: 8% 0% 0% 0%;
    }

    @media only screen and (min-width: 3840px){
        min-width: 800px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    min-height: 60vh;
    flex-direction: column;
`

export const TitleOpitionsGen = styled.h1`
    color: #FFF;
    font-size: 20px;
    text-align: center;
    margin-bottom: 0;
    
    @media(max-width: 800px){
        margin: 8% 0% 0% 0%;
    }

    @media only screen and (min-width: 3840px){
        font-size: 50px;
    }
`

export const GenOpitionBar = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.5% 0% 2% 0%;
    
    @media(max-width: 800px){
        margin: 4% 1% 8% 1%;
    }
`

export const GenOpition = styled.button`
    display: flex;
    width: 45px;
    height: 45px;
    background: steelblue;
    color: #FFF;
    font-weight: bolder;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin: 0 2% 2% 2%;
    border: ${(props) => {
        if(props.value === props.generation){    
            return 'solid yellow'
        }else{
            return 'none'
        }
    }};
    border-width: 2px;
    border-radius: 50%;
    cursor: pointer;

    @media only screen and (min-width: 3840px){
        width: 100px;
        height: 100px;
        font-size: 40px;
        border-width: 4px;
    }
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    background-color: #FFF;
    display: flex;
    list-style: none;
    min-width: 300px;
    min-height: auto;
    margin: 12px;
    border: 4px solid #FFF;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
	transition: all 0.3s;

    :hover{
        -moz-transform: scale(1.5);
	    -webkit-transform: scale(1.5);
	    transform: scale(1.05);
    }

    @media only screen and (min-width: 3840px){
        min-width: 600px;
        min-height: auto;
        margin: 22px;
    }
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(${({bgColor}) => {
        return bgColor.length === 2 ? 
            `180deg, ${bgColor[1]} 50%, ${bgColor[1]} 50%`
            : 
            `180deg, ${bgColor[1]} 50%, ${bgColor[2]} 50%`
    }});
    width: 100%;
    height: 50%;
    align-self: flex-start;
`

export const ImageInCardList = styled.img`
    width: 150px;
    height: 150px;
    padding: 15px;

    @media only screen and (min-width: 3840px){
        width: 200px;
        height: 200px;
    }
`
export const CardNumber = styled.a`
    align-self: flex-start;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    color: slategray;

    @media only screen and (min-width: 3840px){
        font-size: 18px;
    }
`

export const PokemonName = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin: 5% 0%;

    @media only screen and (min-width: 3840px){
        font-size: 36px;
    }
`

export const PokeContainerTypesAndWeaknesses = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-self: center;
    margin: 0% 2% 2% 0%;

    @media only screen and (min-width: 3840px){
        width: 80%;      
    }
`

export const TitleTypesAndWeaknesses = styled.h4`
    text-align: center;
    margin-bottom: 15px;

    @media only screen and (min-width: 3840px){
        font-size: 22px;
    }
`

export const TypesAndWeaknessesContainer = styled.div`
    display: flex;
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 15px;
    width: 70%;
    padding: 1.5%;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    flex-wrap: wrap;
`

export const EachType = styled.div`
    display: flex;
    background: linear-gradient(${({bgColor}) => {
        return bgColor.length === 2 ? 
            `180deg, ${bgColor[1]} 50%, ${bgColor[1]} 50%`
            : 
            `180deg, ${bgColor[1]} 50%, ${bgColor[2]} 50%`
    }});
    min-width: 30%;
    height: 30px;
    border-radius: 10px;
    padding: 0% 4% 0% 4%;
    margin: 1.5% 0% 1.5% 0%;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 3840px){
        height: 35px;
    }
`

export const TextOfType = styled.a`
    display: flex;
    color: ${(props) => {
        if(props.color){
            return props.color[0]
        }else{
            return "#000"
        }
    }};
    font-size: 16px;
    font-weight: 700;

    @media only screen and (min-width: 3840px){
        font-size: 22px;
    }
`

export const ScrollToTop = styled.div`
    display: flex;
    background-color: slategray;
    position: fixed;
    bottom: 2%;
    right: 2%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media only screen and (min-width: 3840px){
        width: 50px;
        height: 50px;
    }
`

const scrollTop = keyframes`
    from {
        -moz-transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        -o-transform: translateY(-2px);
        transform: translateY(-2px);
    }

    to: {
        -moz-transform: translateY(4px);
        -webkit-transform: translateY(4px);
        -o-transform: translateY(4px);
        transform: translateY(4px);
    }
`

export const ScrollToTopIcon = styled.img`
    color: #FFF;
    width: 25px;
    height: 25px;
    animation: ${scrollTop} 0.3s alternate ease infinite;
    width: 30px;
    height: 30px;
`

export const Modal = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 50;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
`

export const ContainerModal = styled.div`
    display: flex;
    background-color: #FFF;
    color: #000;
    width: 40%;
    height: 85%;
    border: 4px solid #FFF;
    border-radius: 15px;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;

    @media only screen and (max-width: 800px){
        width: 90%;
    }

    @media only screen and (min-width: 3840px){
        width: 30%;
    }    
`

export const CloseModalButton = styled.button`
    display: flex;
    position: absolute;
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    border: none;
    justify-content: flex-start;
    align-items: flex-end;
    align-self: flex-end;

    :before, 
    :after {
        content: ' ';
        position: fixed;
        width: 5px;
        height: 24px;
        background-color: #000;
    }

    :before{
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    :after{
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`

export const ModalContent = styled.div`
    display: flex;
    width: auto;
    margin: 2%;
    flex-direction: column;
    justify-content: center;
`

export const FirstModalDivision = styled.div`
    background-color: rgba(0, 0, 0, 0.090);
    display: flex;
    flex-direction: row;
    margin-bottom: 15px; 
    padding: 2% 4%;
    border-radius: 15px;
    flex-wrap: wrap;
    justify-content: center;
`

export const PokeBodyInfo = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const EachModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 0% 10% 0%;

    :last-child{
        margin: 0;
    }
`

export const ModalTitle = styled.h4`
    color: slategray;
    margin: 0;

    @media only screen and (min-width: 3840px){
        font-size: 22px;
    }
`

export const ModalP = styled.p`
    color: #000;
    margin: 4% 0% 0% 0%;
    font-size: 20px;
    font-weight: bold;

    @media only screen and (min-width: 3840px){
        font-size: 28px;
    }
`

export const ContainerAbilities = styled.div`
    width: 50%;
    text-transform: capitalize;
`

export const TitleStats = styled.h4`
    color: slategray;
    margin: 10% 0% 8% 0%;

    @media only screen and (min-width: 3840px){
        font-size: 22px;
    }
`

export const Footer = styled.div`
    background-color: transparent; 
    display: flex;
    width: 100%;
    height: 5vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4% 0% 1% 0%;
    bottom: 0;
`

export const FooterLine = styled.p`
    margin: 0%;
`

export const FooterLink = styled.a`
    color: #ffd400;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;

    @media only screen and (min-width: 3480px){
        font-size: 24px;
    }
`

export const FooterText = styled.a`
    font-size: 15px;

    @media only screen and (min-width: 3480px){
        font-size: 24px;
    }
`
