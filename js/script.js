var recipe = document.getElementById("recipe");

var recipeImage = document.getElementById("recipe-image");
var ratingAverage = document.getElementById("rating-average");
var ratingReview = document.getElementById("rating-review");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var serving = document.getElementById("serving");

var difficultyRecipe = document.getElementById("difficulty-recipe");
var categoryRecipe = document.getElementById("category-recipe");
var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");

var timeWarning = document.getElementById("time-warning");

var ingredientsList = document.getElementById("ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var nutritionList = document.getElementById("nutrition-list");
var tipsList = document.getElementById("tips-list");

var caloriesValue = document.getElementById("calories-value");
var proteinValue = document.getElementById("protein-value");
var carbValue = document.getElementById("carb-value");
var fatValue = document.getElementById("fat-value");
var fiberValue = document.getElementById("fiber-value");
var sodiumValue = document.getElementById("sodium-value");

var tryAnotherBtn = document.getElementById("try-another-btn");

var recipes = [
  {
    name: "Margherita Pizza",
    category: "Italian",
    difficulty: "Intermediate",
    image: "/Images/Margherita Pizza.avif",
    rating: "4.9",
    reviews: "(512 reviews)",
    prepTime: 90,
    cookTime: 12,
    servings: "2 people",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    name: "Beef Tacos",
    category: "Mexican",
    difficulty: "Easy",
    image: "/Images/Beef Tacos.avif",
    rating: "4.8",
    reviews: "(342 reviews)",
    prepTime: 15,
    cookTime: 15,
    servings: "4 people",
    description:
      "Authentic street-style beef tacos with fresh salsa and cilantro.",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small corn tortillas",
      "1 white onion, diced",
      "Fresh cilantro, chopped",
      "Lime wedges for serving",
    ],
    instructions: [
      "Brown the ground beef in a large skillet over medium-high heat.",
      "Drain excess fat and stir in taco seasoning with a splash of water.",
      "Simmer for 5 minutes until sauce thickens.",
      "Warm tortillas in a dry pan for 30 seconds per side.",
      "Assemble tacos with beef, onion, and cilantro. Serve with lime.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "26g",
      carbs: "32g",
      fat: "20g",
      fiber: "5g",
      sodium: "850mg",
    },
    tips: [
      "Double up the corn tortillas so they don't break.",
      "Squeeze fresh lime juice right before eating for the best flavor.",
    ],
  },
  {
    name: "Thai Green Curry",
    category: "Asian",
    difficulty: "Medium",
    image: "/Images/Thai Green Curry.avif",
    rating: "4.7",
    reviews: "(421 reviews)",
    prepTime: 20,
    cookTime: 25,
    servings: "4 people",
    description:
      "A fragrant and spicy Thai curry with tender chicken and bamboo shoots.",
    ingredients: [
      "500g chicken breast, sliced",
      "3 tbsp green curry paste",
      "1 can (400ml) coconut milk",
      "1 cup bamboo shoots",
      "1 red bell pepper, sliced",
      "Fresh basil leaves",
      "1 tbsp fish sauce",
    ],
    instructions: [
      "Heat a splash of oil in a large pot over medium heat.",
      "Fry the green curry paste for 1 minute until fragrant.",
      "Add chicken and cook until mostly white on the outside.",
      "Pour in coconut milk, bamboo shoots, and bell peppers. Simmer for 15 minutes.",
      "Stir in fish sauce and fresh basil just before serving.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "32g",
      carbs: "12g",
      fat: "38g",
      fiber: "3g",
      sodium: "940mg",
    },
    tips: [
      "Don't boil the coconut milk rapidly, or it might separate.",
      "Serve with jasmine rice to soak up the delicious sauce.",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    category: "American",
    difficulty: "Medium",
    image: "/Images/BBQ Pulled Pork.avif",
    rating: "4.8",
    reviews: "(615 reviews)",
    prepTime: 20,
    cookTime: 240,
    servings: "10 people",
    description:
      "Melt-in-your-mouth slow cooker pulled pork smothered in sweet and smoky BBQ sauce.",
    ingredients: [
      "2kg pork shoulder",
      "2 tbsp smoked paprika",
      "1 tbsp brown sugar",
      "1 tsp garlic powder and onion powder",
      "1 cup beef broth",
      "1.5 cups BBQ sauce",
      "Brioche buns for serving",
    ],
    instructions: [
      "Rub the pork shoulder with paprika, brown sugar, garlic powder, onion powder, salt, and pepper.",
      "Place in a slow cooker and pour in the beef broth.",
      "Cook on low for 8 hours until the meat falls apart easily.",
      "Remove meat, shred with two forks, and discard excess fat.",
      "Return to the slow cooker, mix with BBQ sauce, and serve on brioche buns.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "42g",
      carbs: "48g",
      fat: "22g",
      fiber: "2g",
      sodium: "1250mg",
    },
    tips: [
      "Sear the pork shoulder in a hot pan before slow cooking for extra flavor.",
      "Top your sandwich with crunchy coleslaw for the ultimate texture.",
    ],
  },
  {
    name: "French Onion Soup",
    category: "French",
    difficulty: "Medium",
    image: "/Images/French Onion Soup.avif",
    rating: "4.6",
    reviews: "(289 reviews)",
    prepTime: 20,
    cookTime: 50,
    servings: "4 people",
    description:
      "Deeply caramelized onions in a rich beef broth, topped with toasted bread and melted Gruyère.",
    ingredients: [
      "4 large yellow onions, sliced thin",
      "3 tbsp butter",
      "4 cups rich beef broth",
      "1/2 cup dry white wine",
      "1 baguette, sliced and toasted",
      "200g Gruyère cheese, grated",
      "Fresh thyme",
    ],
    instructions: [
      "Melt butter in a large pot over medium-low heat. Add onions.",
      "Cook slowly for 30-40 minutes, stirring occasionally, until onions are deep brown and caramelized.",
      "Deglaze the pot with white wine, scraping up the browned bits.",
      "Add beef broth and thyme. Simmer for 15 minutes.",
      "Ladle soup into oven-safe bowls, top with bread and cheese, and broil until bubbly.",
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "18g",
      carbs: "38g",
      fat: "20g",
      fiber: "4g",
      sodium: "1050mg",
    },
    tips: [
      "Patience is key: don't rush caramelizing the onions, it builds the entire flavor profile.",
      "Use high-quality beef stock since it's the base of the soup.",
    ],
  },
  {
    name: "Teriyaki Chicken Bowl",
    category: "Japanese",
    difficulty: "Easy",
    image: "/Images/Teriyaki Chicken Bowl.avif",
    rating: "4.9",
    reviews: "(745 reviews)",
    prepTime: 15,
    cookTime: 15,
    servings: "2 people",
    description:
      "Sweet and savory glazed chicken served over a bed of steamed rice and fresh veggies.",
    ingredients: [
      "400g chicken thighs, cut into bite-sized pieces",
      "1/4 cup soy sauce",
      "2 tbsp honey",
      "1 tbsp rice vinegar",
      "1 tsp ginger, minced",
      "1 cup broccoli florets",
      "Steamed white rice",
    ],
    instructions: [
      "Whisk together soy sauce, honey, rice vinegar, and ginger to make the sauce.",
      "Pan-fry the chicken in a skillet over medium-high heat until browned (about 6 mins).",
      "Pour the sauce over the chicken and simmer until the sauce thickens and coats the meat.",
      "Steam the broccoli until tender-crisp.",
      "Serve the chicken and broccoli over warm rice, garnished with sesame seeds.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "38g",
      carbs: "65g",
      fat: "14g",
      fiber: "4g",
      sodium: "1120mg",
    },
    tips: [
      "Chicken thighs are much juicier than breasts and won't dry out in the pan.",
      "Add a pinch of cornstarch to the sauce if you prefer it extra thick.",
    ],
  },
  {
    name: "Greek Moussaka",
    category: "Greek",
    difficulty: "Hard",
    image: "/Images/Greek Moussaka.avif",
    rating: "4.7",
    reviews: "(312 reviews)",
    prepTime: 40,
    cookTime: 50,
    servings: "6 people",
    description:
      "A spectacular Mediterranean casserole with layers of roasted eggplant, spiced meat, and creamy sauce.",
    ingredients: [
      "2 large eggplants, sliced",
      "500g ground lamb or beef",
      "1 onion, diced",
      "400g crushed tomatoes",
      "1 tsp cinnamon",
      "500ml milk",
      "50g butter and flour (for sauce)",
    ],
    instructions: [
      "Roast eggplant slices in the oven at 200°C (400°F) for 20 minutes until soft.",
      "Brown the meat with onions, add tomatoes and cinnamon, and simmer until thick.",
      "Make the creamy béchamel sauce by cooking butter and flour, then whisking in milk.",
      "In a baking dish, layer half the eggplant, all the meat sauce, then the remaining eggplant.",
      "Pour the cream sauce over the top and bake for 45 minutes until golden.",
    ],
    nutrition: {
      calories: "610 kcal",
      protein: "28g",
      carbs: "22g",
      fat: "45g",
      fiber: "8g",
      sodium: "780mg",
    },
    tips: [
      "Salt the eggplant slices and let them sit for 20 minutes before roasting to draw out bitterness.",
      "Allow it to cool slightly before slicing so the layers stay intact.",
    ],
  },
  {
    name: "Vegetable Curry",
    category: "Indian",
    difficulty: "Easy",
    image: "/Images/Vegetable Curry.avif",
    rating: "4.5",
    reviews: "(198 reviews)",
    prepTime: 15,
    cookTime: 30,
    servings: "4 people",
    description:
      "A comforting, plant-based curry packed with hearty potatoes, carrots, and peas in a spiced tomato sauce.",
    ingredients: [
      "2 potatoes, cubed",
      "2 carrots, sliced",
      "1 cup green peas",
      "1 onion, diced",
      "2 tbsp curry powder",
      "1 can (400g) diced tomatoes",
      "1 cup vegetable broth",
    ],
    instructions: [
      "Sauté onions in a large pot until translucent.",
      "Stir in curry powder and cook for 1 minute to toast the spices.",
      "Add potatoes, carrots, tomatoes, and broth. Bring to a boil.",
      "Reduce heat, cover, and simmer for 20 minutes until vegetables are tender.",
      "Stir in the green peas and cook for 5 more minutes before serving.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "8g",
      carbs: "52g",
      fat: "9g",
      fiber: "12g",
      sodium: "650mg",
    },
    tips: [
      "Top with fresh cilantro and a dollop of plain yogurt.",
      "Leftovers taste even better the next day as the spices continue to meld.",
    ],
  },
  {
    name: "Creamy Spaghetti Carbonara",
    category: "Italian",
    difficulty: "Medium",
    image: "/Images/Creamy Spaghetti Carbonara.avif",
    rating: "4.8",
    reviews: "(1024 reviews)",
    prepTime: 10,
    cookTime: 15,
    servings: "2 people",
    description:
      "A traditional Roman pasta dish made with crispy guanciale, eggs, and Pecorino Romano cheese.",
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large eggs",
      "50g Pecorino Romano, freshly grated",
      "50g Parmesan, freshly grated",
      "Lots of fresh black pepper",
    ],
    instructions: [
      "Boil spaghetti in salted water until al dente.",
      "Crisp the guanciale in a large cold pan over medium heat until fat renders. Remove from heat.",
      "In a bowl, whisk eggs, cheeses, and black pepper together.",
      "Quickly toss the hot pasta in the pan with the guanciale.",
      "Off the heat, vigorously stir in the egg mixture, adding pasta water to create a creamy sauce.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "32g",
      carbs: "70g",
      fat: "30g",
      fiber: "3g",
      sodium: "980mg",
    },
    tips: [
      "Never mix the eggs in while the pan is over the fire, or you will end up with scrambled eggs!",
      "Reserve a cup of starchy pasta water; it's the secret to a silky smooth sauce.",
    ],
  },
];

var recipesArr = [];

// function displayRecipe(recipe) {
//   var randomIndex = Math.floor(Math.random() * recipes.length);
//   var randomRecipe = recipes[randomIndex];
//   console.log(randomRecipe);
// }

// Step 1 & 2: Create a function that takes a single recipe object and updates the screen
function displayRecipe(recipe) {
  console.log("Starting to load recipe:", recipe.name);

  recipeImage.src = recipe.image;

  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.description;

  categoryRecipe.textContent = recipe.category;
  difficultyRecipe.textContent = recipe.difficulty;
  ratingAverage.textContent = recipe.rating;
  ratingReview.textContent = recipe.reviews;
  serving.textContent = recipe.servings;

  caloriesValue.textContent = recipe.nutrition.calories;
  proteinValue.textContent = recipe.nutrition.protein;
  carbValue.textContent = recipe.nutrition.carbs;
  fatValue.textContent = recipe.nutrition.fat;
  fiberValue.textContent = recipe.nutrition.fiber;
  sodiumValue.textContent = recipe.nutrition.sodium;

  console.log("Nutrition data updated!");

  prepTime.textContent = recipe.prepTime + " min";
  cookTime.textContent = recipe.cookTime + " min";

  var totalTime = recipe.prepTime + recipe.cookTime;
  console.log("Total recipe time is:", totalTime, "minutes");

  if (totalTime > 45) {
    timeWarning.style.display = "block";
  } else {
    timeWarning.style.display = "none";
  }

  // Update Ingredients List
  ingredientsList.innerHTML = ""; // 1. First, we must clear out whatever ingredients were already sitting in the HTML
  // 2. Loop through the Ingredients array
  for (var i = 0; i < recipe.ingredients.length; i++) {
    // We grab the specific ingredient we are currently looking at
    var currentIngredient = recipe.ingredients[i];
    // 3. We inject the HTML block, adding the number and the text
    // Notice we use ${i + 1} for the number, because 'i' starts at 0!
    ingredientsList.innerHTML += `
      <li class="d-flex align-items-center mb-3">
        <div class="d-flex justify-content-center align-items-center rounded-circle text-white fw-bold flex-shrink-0 me-3" style="background-color: #f54a00; width: 24px; height: 24px; font-size: 0.8rem;">
          ${i + 1}
        </div>
        <span>${currentIngredient}</span>
      </li>
    `;
  }

  // Update Instructions List
  instructionsList.innerHTML = ""; // 1. Clear the old instructions
  // 2. Loop through the instructions array
  for (var j = 0; j < recipe.instructions.length; j++) {
    var currentInstruction = recipe.instructions[j];
    // 3. Inject the HTML (Notice the slightly different HTML structure for instructions)
    instructionsList.innerHTML += `
      <li class="d-flex align-items-start mb-4">
        <div class="number d-flex justify-content-center align-items-center flex-shrink-0 rounded-4 fs-5 fw-bold text-white me-3" style="background-color: #f54a00; width: 32px; height: 32px; font-size: 0.9rem;">
          ${j + 1}
        </div>
        <div class="instruction pt-1">
          <p class="mb-0">${currentInstruction}</p>
        </div>
      </li>
    `;
  }

  // Update Chef's Tips List
  tipsList.innerHTML = ""; // 1. Clear the old tips
  // 2. Loop through the tips array
  for (var k = 0; k < recipe.tips.length; k++) {
    var currentTip = recipe.tips[k];
    // 3. Inject the HTML (Tips use a checkmark icon instead of numbers!)
    tipsList.innerHTML += `
      <div class="tip d-flex align-items-start p-3 mb-3 rounded-end-3" style="background-color: #fffbf0; border-left: 4px solid #ffc107;">
        <i class="fa-solid fa-circle-check mt-1 me-2" style="color: #f54a00;"></i>
        <p class="mb-0 text-secondary">${currentTip}</p>
      </div>
    `;
  }

  var currentRecipeIndex = 0;
}

// TEST IT MANUALLY:
// Let's test it with index 3 (BBQ Pulled Pork) which has extendedTime: true
displayRecipe(recipes[3]);
