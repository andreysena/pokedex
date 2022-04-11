import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './style'

import Loading from './components/Loading'
import PokeTitle from './components/PokeTitle'
import pokemonByGeneration from './utils/pokemonByGeneration'
import GenerationBarOpitions from './components/GenerationBarOpitions'
import PokeList from './components/PokeList'
import Footer from './components/Footer'

export default function App() {

	const pokemonPromises = []
	const [ pokemonInfo, setPokemonInfo ] = useState([])
	const [ isLoading, setIsLoading ] = useState(true)
	const [ actualGeneration, setActualGeneration ] = useState(1)
	const [ rangeGeneration, setRangeGeneration ] = useState(pokemonByGeneration(1))
	
	useEffect(() => {

		setIsLoading(true)

		for(let i = rangeGeneration[0]; i <= rangeGeneration[1]; i++){

			pokemonPromises.push(
				axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
					.then(response => response.data)
					.catch(error => {
						console.log("Request com id do Pokémon: ", i, ". Retornou erro: ", error)
						return []
					})	
			)
		}

		Promise.all(pokemonPromises)
			.then(pokemon => {
				setPokemonInfo(pokemon)
				setIsLoading(false)
			})

	}, [rangeGeneration])

	return (
		<>
			<S.GlobalStyle />
			<PokeTitle />
			<S.MainContainer>
				<GenerationBarOpitions 
					actualGeneration={actualGeneration}
					setActualGeneration={setActualGeneration}
					alterGeneration={setRangeGeneration} 
				/>
				{
					isLoading ?
						<Loading />
						:
						<>
							<PokeList pokemon={pokemonInfo} />
						</>
				}	
			</S.MainContainer>
			<Footer />
		</>
	)
}