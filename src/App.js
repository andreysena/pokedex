import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './style'

import Loading from './components/Loading'
import PokeTitle from './components/PokeTitle'
import PokeList from './components/PokeList'

export default function App() {

	const [ pokemonInfo, setPokemonInfo ] = useState([])
	const pokemonPromises = []
	const [isLoading, setIsLoading ] = useState(true)
	
	useEffect(() => {

		for(let i = 1; i <= 898; i++){

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
				console.log("Estes são os pokemon: ", pokemon)
				setPokemonInfo(pokemon)
				setIsLoading(false)
			})
	}, [])

	if(isLoading)
		return (
			<>
				<S.GlobalStyle />
				<Loading />
			</>
		)

	return (
		<>
			<S.GlobalStyle />
			<PokeTitle />
			<S.MainContainer>
				<PokeList pokemon={pokemonInfo} />	
			</S.MainContainer>
		</>
	)
}