const getTransactions = async (userID) => {
    const response = await fetch("http://127.0.0.1:5000/get_transactions", {
        method: "POST",
        body: JSON.stringify(userID),
        headers: {
            "Content-Type": "application/json"
        },
    })

    if(response.ok){
        console.log("Successfully got all transactions")
    }

    const data = await response.json()
    // console.log(data)

    return data
}

module.exports = {getTransactions}
