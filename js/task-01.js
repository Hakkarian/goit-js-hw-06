const cat = document.querySelectorAll('.item');

console.log('Number of categories: ', cat.length);


cat.forEach(caty => {
    
    console.log('Category: ', caty.querySelector('h2').textContent);
    console.log('Elements: ', caty.querySelectorAll('ul > li').length);
}
);


// const catItem = document.querySelectorAll('ul > li > ul')
// let catNum = 0;
// const catArr = cat.forEach(caty => catNum += 1);

// const basket = catItem.forEach(caty => caty.classList.add('catItem'));
// const basketItem = document.querySelector('.catItem');
// const basketLi = basketItem.getElementsByTagName('li');

// let basketNum = 0;



// const animals = document.querySelector('h2');
// animals.classList.add('.animals__title');

// const products = document.querySelector('h2');
// products.classList.add('.products__title');


// console.log('Number of categories: ', catNum);
// console.log('Category: ', animals.textContent);
// console.log('Category: ', );
// console.log('Elements: ', );
// console.log('Category: ', );
// console.log('Elements: ',);
// console.log(basketLi);


