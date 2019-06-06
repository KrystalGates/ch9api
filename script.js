fetch("http://localhost:8088/food")

.then(data => data.json())

// Long hand code
// .then(data => {
//     return data.json();
// })

.then(food => {
    console.table(food)
    let foodContainer = document.querySelector("#food-list");
    food.forEach(item => {
        foodContainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`
    });
})

