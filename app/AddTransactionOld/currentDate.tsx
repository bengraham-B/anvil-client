export function currentDate (){
    const date = new Date()

    let day = date.getDay()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    const returnDate = `${year} ${month} ${day}`
    const ISO_DATE = new Date().toISOString()
    console.log(ISO_DATE)
    // console.log(returnDate)

    return ISO_DATE
}
