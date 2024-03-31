
const apiTest = async (route) => {
    const response = await fetch(`http://127.0.0.1:5000${route}`)
    const data = await response.json()
    console.log(data)
}




module.exports = {apiTest}