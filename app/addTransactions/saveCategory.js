function saveCategory(userID){
    fetch("http://127.0.0.1:5000/save_category", {
        method: "POST",
        body: JSON.stringify(userID),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json()).then((data) => {
        const records = data
        return data
    }).catch((error) => {
        console.log(error)
    })
    
    

   
}

module.exports = {saveCategory}