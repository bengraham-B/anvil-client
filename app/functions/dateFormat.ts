const dateFormat = (dateParam:string) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date(dateParam)

    const dateReturn = {
        day: date.getDate(),
        monthText: months[date.getMonth()],
        monthNumber: date.getMonth(),
        year: date.getFullYear()
    }

    return dateReturn
}

// module.exports = {dateFormat}
export default dateFormat

const date01 = dateFormat("Thu, 25 Apr 2024 00:00:00 GMT")

console.log(date01.day)