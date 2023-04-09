const months = ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Jul", "Aout", "Sept", "Oct", "Nov", "Dec"];

const getMonth = (step = 0) => {
    const d = new Date()
    const month = d.getMonth()
    const move = d.getDate() < 15 ? 1 : 2
    const pos = month + move + step

    d.setMonth(d.getMonth() + move + step)
    const firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);

    return {
        startFrom: firstDayOfMonth.toLocaleDateString('fr-FR'),
        label: '1er ' + months[pos % 12]
    }
}

export const momentService = {
    getMonth
}