const addTransaction = async ({data}) => {
    const response = await fetch("http://127.0.0.1:5000/insert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: data.user_id,
            details: data.details,
            amount: data.amount,
            category: data.category,
            class: data.class_
        })
    })

    if (response.ok){
        console.log("Transaction added Successfully")
    }

    const data = response.json()

    return data
}
