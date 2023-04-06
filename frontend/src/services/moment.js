const months = ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Jul", "Aout", "Sept", "Oct", "Nov", "Dec"];

const getPosition = (step = 0) => {
    const d = new Date()
    const month = d.getMonth()
    const move = d.getDate() < 15 ? 1 : 2
    //current month + next move + step
    return month + move + step
}

const getMonth = (step = 0) => {
    const pos = getPosition(step) % 12

    return {
        id: pos.toString(),
        label: '1er ' + months[pos]
    }
}

export const momentService = {
    getMonth
}