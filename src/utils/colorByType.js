const colorByType = (typeName) => { 
    
        switch (typeName){
            case 'bug':
                return ['#FFF','#729F3F']

            case 'dark':
                return ['#FFF','#707070']

            case 'dragon':
                return ['#FFF','#53a4cf', '#f16e57']

            case 'electric':
                return ['#000','#eed535']

            case 'fairy':
                return ['#000','#fdb9e9']
                
            case 'fighting':
                return ['#FFF','#d56723']
            
            case 'fire':
                return ['#FFF','#fd7d24']
            
            case 'flying':
                return ['#000','#3dc7ef', '#bdb9b8']
                
            case 'ghost':
                return ['#FFF','#7b62a3']

            case 'grass': 
                return ['#000','#9bcc50']
            
            case 'ground':
                return ['#000','#f7de3f', '#ab9842']

            case 'ice': 
                return ['#000','#51c4e7']
            
            case 'normal':
                return ['#000','#a4acaf']
            
            case 'poison':
                return ['#FFF','#b97fc9']
            
            case 'psychic':
                return ['#FFF','#f366b9']

            case 'rock':
                return ['#FFF','#a38c21']
                
            case 'steel':
                return ['#000','#9eb7b8']
                
            case 'water':
                return ['#FFF','#4592c4']
                
            default:
                return ['#000','slategray']
        }
}

export default colorByType