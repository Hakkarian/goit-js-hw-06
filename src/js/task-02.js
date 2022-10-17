const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ul = document.querySelector('#ingredients');



 const ings = ingredients.map(ing => {
  const ling = document.createElement('li');
   ling.textContent = ing;
   ling.classList.add('item');
   return ling;
 })
ul.append(...ings);


// for (let ing of ingredients) 
//   console.log(ling);
//   ling.textContent = ing;
// 
console.log(ul);








