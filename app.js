const loadData =(search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    console.log(url);
    // const url = ' www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url).then(res=>res.json()).then(data=>showData(data));
}

const showData=(data)=>{
    const mealContainer = document.getElementById('container');
    mealContainer.innerHTML = ''
    data.meals.forEach(element => {
        const mealHolder = document.createElement('article');
        mealHolder.classList.add('col-md-4')
        const mealInstruction = element.strInstructions;
        const mealInst = mealInstruction.slice(0,100);
        mealHolder.innerHTML = `
        <div class="card">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">${element.strMeal}</h5>
                <p class="card-title d-flex justify-content-between"><span>${element.strCategory}</span> <span>${element.strArea}</span></p>
                <p class="card-text">${mealInst}</p>
                <div class = "d-flex justify-content-between align-items-center">
                <a href="#" class="btn btn-danger fw-bold">Add To Cart</a>
                <a href="#" class="btn btn-warning fw-bold">Buy Now</a>
                </div>
            </div>
        </div>
        `
       console.log(element);
       mealContainer.appendChild(mealHolder);
    });
}

const searchFood = () => {
    const sField = document.getElementById('meal');
    const sText = sField.value;
    loadData(sText);
    console.log(sText);
    sField.value = ''    
}
