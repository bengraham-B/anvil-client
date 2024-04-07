async function saveCategory(userID){
    const respose = await fetch("http://127.0.0.1:5000/save_category", {
        method: "POST",
        body: JSON.stringify(userID),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = respose.json()
    return data
}

module.exports = {saveCategory}