export default (generation) => {

    switch (generation){
        case 1:
            return [1, 151]
        case 2:
            return [152, 251]
        case 3:
            return [252, 386]
        case 4:
            return [387, 493]
        case 5:
            return [494, 649]
        case 6:
            return [650, 721]
        case 7:
            return [722, 809]
        case 8:
            return [810, 898]
        default:
            return []
    }
}