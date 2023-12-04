function connect() {
  var searchTerm = document.getElementById("searchBox").value;
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;
  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => display(data));
}

function display(data) {
  var allMeals = data.meals;
  console.log(allMeals);

  var mealContainer = document.getElementById("mealContainer"); 
  mealContainer.textContent = "";

  var maxResults = Math.min(5, allMeals.length);

  for (var i = 0; i < maxResults; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<img src="${allMeals[i].strMealThumb}"> <br> 
                        Meal Name: ${allMeals[i].strMeal}  <br>
                        Meal ID: ${allMeals[i].idMeal} <br> 
                        Meal Category: ${allMeals[i].strCategory} <br> <br>
                        Cooking Instructions: <p>
                        ${allMeals[i].strInstructions}  </p> <br>
                        Recipe: <button class="watchButton" onclick="openYoutube('${allMeals[i].strYoutube}')">Watch</button> <br>`;
    newDiv.classList.add("mealStyle");
    mealContainer.appendChild(newDiv);
  }
  
}  
function openYoutube(youtubeLink) {
   window.open(youtubeLink, "_blank");


}



