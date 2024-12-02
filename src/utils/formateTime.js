export const formateTime = (inputDate) => {
    const date = new Date(inputDate)
    const houres = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())

    return `${houres}:${minutes}`
}

// helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0")
}