import React from 'react'
import { Bar } from 'react-chartjs-2'

import * as S from '../style'

export default ({ stats }) => {

    let statsValues = []
    stats.map(stat => statsValues.push(stat.base_stat))

    let maxStat = statsValues.reduce((a, b) => Math.max(a, b))
    
    let screenSize = window.screen.width >= 2000 ? 20 : 10

    return (
        <>
            <S.TitleStats>Status do Pokémon</S.TitleStats>

            <Bar
                type={Bar}
                data={{
                    labels: ["Hp", "Attack", "Defense", "Special Atk.", "Special Def.", "Speed"],
                    datasets: [{
                        label: 'Stat',
                        data: [statsValues[0], statsValues[1], statsValues[2], statsValues[3], statsValues[4], statsValues[5]],
                        backgroundColor: "rgba(50, 162, 206, 0.534)",
                        borderColor: "rgb(50, 162, 206)",
                        borderWidth: 2,
                        barPercentage: 1,
                        hoverBorderColor: "rgb(0, 78, 109)",
                    }],
                }}
                options= {{
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "#000",
                                fontSize: screenSize,
                                beginAtZero: true,
                                max: maxStat + 10,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#000",
                                fontSize: screenSize,
                                fontStyle: 'bold',                         
                            }
                        }],
                    },
                }}
                width={50}
                height={40}
            />
        </>
    )
}